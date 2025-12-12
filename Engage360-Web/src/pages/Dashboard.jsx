import { closestCenter, closestCorners, DndContext } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import Droppable from "../components/Droppable";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Dashboard = () => {
  const [statuses, setStatuses] = useState([])
  const [leadData, setLeadData] = useState([]);

  const fetchStatus = async() => {
    const data = await axios.get(`${BASE_URL}/leads/allStatus`)
    console.log(data)
    setStatuses(data.data)
  }

  const fetchLeads = async () => {
    const data = await axios.get(`${BASE_URL}/leads`);
    const fetchedLeads = data.data;
    setLeadData(data.data);
  };

  useEffect(() => {
    fetchStatus()
    fetchLeads();
  }, []);


  const handleDrag = async (event) => {
    const { active, over } = event;
    console.log(active, over);
    if (!over) return;

    setLeadData((prev) =>
      prev.map((lead) =>
        lead._id === active.id ? { ...lead, status: over.id } : lead
      )
    );
    try {
      const updateLeadStatus = await axios.put(
        `http://localhost:3000/leads/edit/${active.id}`,
        { status: over.id }
      );
      console.log(updateLeadStatus);      
    } catch (error) {
      console.error("Error updating lead status:", error);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDrag}
    >
      <div className="flex flex-col bg-(--background-app-gradient) overflow-x py-4 mx-2">
        <h1 className="text-center font-bold text-xl py-4">Dashboard</h1>
        <div className="flex -auto min-h-full py-2 px-4 gap-4 scroll-smooth">
          {statuses &&
            statuses.map((status) => (
              <Droppable
                key={status}
                id={status}
                tasks={leadData.filter((lead) => lead.status === status)}
              ></Droppable>
            ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Dashboard;
