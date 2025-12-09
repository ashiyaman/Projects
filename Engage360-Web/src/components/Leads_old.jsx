import axios from "axios"
import { useEffect, useState } from "react"

const Leads = () => {
    const [leads, setLeads] = useState([])
    const [filteredLeads, setFilteredLeads] = useState([])
    const [priorityValue, setPriorityValue] = useState(null)
    const priorityOrder = { High: 1, Medium: 2, Low: 3 }

    const fetchLeads = async() => {
        try{
            const leadsData = await axios.get("http://localhost:3000/leads")
            console.log(leadsData.data.message)
            setLeads(leadsData.data.message)
            setFilteredLeads(leadsData.data.message)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchLeads()
    }, [])

    const handleSortByPriority = (value) => {
        console.log("in priority sorting", value)
        const addRank = filteredLeads.map(lead => ({
            ...lead,
            priorityRank: priorityOrder[lead.priority]
        }))
        value === "High" 
            ? addRank.sort((a, b) => a.priorityRank - b.priorityRank) 
            : addRank.sort((a, b) => b.priorityRank - a.priorityRank)
        setFilteredLeads(addRank)
    }

    if(!leads || leads.length === 0){
        return <p>No leads found</p>
    }

    return (
        <div>
            <select onChange={(e) => handleSortByPriority(e.target.value)}>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
            </select>
           {leads && leads.length > 0 && 
            <ul>
                {filteredLeads.map(lead => (
                    <li key={lead._id}>
                        <p>{lead.name} ------------
                        {lead.priority}</p>
                    </li>
                ))}
            </ul>
           }
        </div>
    )
}

export default Leads