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

    const selectedLead = leadData.find((lead) => lead._id === active.id);
    console.log(selectedLead);
    try {
      const updateLeadStatus = await axios.put(
        `http://localhost:3000/leads/edit/${active.id}`,
        { status: over.id }
      );
      console.log(updateLeadStatus);
      setLeadData((prev) =>
        prev.map((lead) =>
          lead._id === active.id ? { ...lead, status: over.id } : lead
        )
      );
    } catch (error) {
      console.error("Error updating lead status:", error);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDrag}
      onDragStart={() => "Drag start"}
    >
      <h1 className="py-4 text-center font-bold text-xl">Dashboard</h1>
      <div>
        {containers &&
          containers.map((container) => (
            <Droppable
              key={container}
              id={container}
              tasks={leadData.filter((lead) => lead.status === container)}
            ></Droppable>
          ))}
      </div>
    </DndContext>
  );
};

export default Dashboard;
