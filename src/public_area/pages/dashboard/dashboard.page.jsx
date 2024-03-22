import React from "react";
import Dbase from "../../components/dashboardbase/dbase.component";
import Card from "../../components/card/card";
import "../../../styles/Dashboard.css";
import CardTwo from "../../components/card/CardTwo";
import { FaPeopleGroup, FaPerson, FaLayerGroup, FaFile, FaClock, FaListCheck, FaCalendar, FaTicket } from "react-icons/fa6";

export default function Dashboard() {
  const Children = () => {
    return (
     <>
      <div className="dashboard-top">
        <Card name='Total Clients' count='0' icon={<FaPeopleGroup size={20} color="gray"/>} />
        <Card  name='Total Employees' count='1' icon={<FaPerson size={20}  color="gray"/>}  />
        <Card  name='Total Projects' count='0' icon={<FaLayerGroup size={20}  color="gray"/>}  />
        <Card  name='Due Invoices' count='0' icon={<FaFile size={20}  color="gray"/>}  />
        <Card  name='Hours Logged' count='0 Hrs' icon={<FaClock size={20}  color="gray"/>}  />
        <Card  name='Pending Tasks' count='0' icon={<FaListCheck size={20}  color="gray"/>}  />
        <Card  name='Today Attendance' count='0/1' icon={<FaCalendar size={20}  color="gray"/>}  />
        <Card  name='Unresolved Tickets' count='0' icon={<FaTicket size={20}  color="gray"/>} />
      </div>
      <div className="dashboard-bottom">
        <CardTwo/>
        <CardTwo/>
        <CardTwo/>
        <CardTwo/>
      </div>
     </>
    );
  };
  return <Dbase children={<Children />} />;
}
