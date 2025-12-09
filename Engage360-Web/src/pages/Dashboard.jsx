import { closestCenter, closestCorners, DndContext } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import Droppable from "../components/Droppable";
import axios from "axios";

const Dashboard = () => {
  const [leadData, setLeadData] = useState([]);
  const [containers, setContainers] = useState([]);

  const fetchLeads = async () => {
    const data = await axios.get("http://localhost:3000/leads");
    const kll = data.data;
    setLeadData(data.data);
    setContainers([...new Set(kll.map((item) => item.status))]);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const showLead = () => {
    console.log(leadData);
  };

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
      <div className="flex flex-col bg-(--background-app-gradient) py-4">
        <h1 className="text-center font-bold text-xl py-4">Dashboard</h1>
        <div className="flex overflow-x-auto min-h-full py-2 px-4 gap-4 scroll-smooth">
          {containers &&
            containers.map((container) => (
              <Droppable
                key={container}
                id={container}
                tasks={leadData.filter((lead) => lead.status === container)}
              ></Droppable>
            ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Dashboard;
