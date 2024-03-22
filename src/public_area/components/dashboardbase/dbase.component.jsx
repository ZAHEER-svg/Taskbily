import React, { useState } from "react";
import "../../../styles/Dbase.css";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaBuilding,
  FaPeopleGroup,
  FaBriefcase,
  FaDollarSign,
  FaCartShopping,
  FaPerson,
  FaGear,
  FaBookmark,
  FaHeadset,
  FaBars,
  FaFile,
  FaClock,
  FaBell,
  FaPowerOff,
  FaProductHunt,
  FaComment,
  FaCalendar,
  FaTv,
  FaCirclePlus,
  FaListUl,
  FaFileArrowUp,
  FaNoteSticky


  
} from "react-icons/fa6";

import {FaSearch, FaArrowRight} from 'react-icons/fa'

export default function Dbase({children}) {
  const [menu, setMenu] = useState(false)

  const handleMenu = () =>{
    setMenu(!menu)
  }


  return (
    <section>
      <div className="sidebar">
        <div className={menu ? 'sidebar-menu sidebar-toggle' : 'sidebar-menu'}>
          <div className="sidebar-user">
             <div>
                <div>Bodegram</div>
                <div>Samuel Olabode Awofisan</div>
             </div>
             <div>
                <FaPerson size={20}/>
             </div>
          </div>
          <div className="sidebar-menu-items">
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <FaHouse size={20} />
                </div>
                <div>
                  <Link>Dashboard</Link>
                </div>
              </div>
              <div><FaArrowRight size={20}/></div>
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <FaPeopleGroup size={20} />
                </div>
                <div>
                  <Link>Leads</Link>
                </div>
              </div>
              <div><FaArrowRight size={20}/></div>
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <FaBuilding size={20} />
                </div>
                <Link>Clients</Link>
              </div>
             
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <FaPeopleGroup size={20} />
                </div>
                <div>
                  <Link>HR</Link>
                </div>
              </div>
              <div><FaArrowRight size={20}/></div>
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <FaBriefcase size={20} />
                </div>
                <div>
                  <Link>Work</Link>
                </div>
              </div>
              <div><FaArrowRight size={20}/></div>
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <FaDollarSign size={20} />
                </div>
                <div>
                  <Link>Finance</Link>
                </div>
              </div>
              <div><FaArrowRight size={20}/></div>
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaProductHunt size={20}/></div>
                <div>
                  <Link>Products</Link>
                </div>
              </div>
             
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div>
                  <FaCartShopping size={20} />
                </div>
                <div>
                  <Link>Orders</Link>
                </div>
              </div>
            
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaHeadset size={20}/></div>
                <div>
                  <Link>Tickets</Link>
                </div>
              </div>
            
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaCalendar size={20}/></div>
                <div>
                  <Link>Events</Link>
                </div>
              </div>
            
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaComment size={20}/></div>
                <div>
                  <Link>Messages</Link>
                </div>
              </div>
            
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaNoteSticky size={20}/></div>
                <div>
                  <Link>Notice Board</Link>
                </div>
              </div>
            
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaBookmark size={20}/></div>
                <div>
                  <Link>Knowledge Base</Link>
                </div>
              </div>
             
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaTv size={20}/></div>
                <div>
                  <Link>Assets</Link>
                </div>
              </div>
             
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaListUl size={20}/></div>
                <div>
                  <Link>Payroll</Link>
                </div>
              </div>
              <div><FaArrowRight size={20}/></div>
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaFileArrowUp size={20}/></div>
                <div>
                  <Link>Reports</Link>
                </div>
              </div>
              <div><FaArrowRight size={20}/></div>
            </div>
            <div className="sidebar-menu-item">
              <div style={{ display: "flex", gap: "15px" }}>
                <div><FaGear size={20}/></div>
                <div>
                  <Link>Settings</Link>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-nav">
            <div className="sidebar-nav-left">
              <div className="sidebar-icon">
                 <FaBars size={20} onClick={handleMenu}/>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Dashboard
              </h3>
              <p style={{ marginTop: "6px", color: "gray" }}>Home</p>
              <p style={{ marginTop: "6px", color: "gray" }}>Dashboard</p>
            </div>
            <div style={{display:'flex', gap:'10px'}}>
              <div className="info">25 days left on trial</div>
              <div><FaSearch size={15}/></div>
              <div><FaFile size={15}/></div>
              <div><FaClock size={15}/></div>
              <div><FaCirclePlus size={15}/></div>
              <div><FaBell size={15}/></div>
              <div><FaPowerOff size={15}/></div>
            </div>
          </div>
          <div className="dbase-main">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
