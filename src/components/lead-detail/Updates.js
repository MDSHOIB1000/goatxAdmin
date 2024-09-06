
// Timeline.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa"; // For user icon

const Updates = () => {
  const events = [
    {
      time: "26-08-2024 03:49:14 PM",
      timeAgo: "1 Hour Ago",
      title: "Leads Updated",
      description: [
        "By Abdul through Manual from Web",
        "Project: From Gold Mine To Silver Fields 2",
        "Modified By: Abdul",
      ],
    },
    {
      time: "26-08-2024 03:11:51 PM",
      timeAgo: "2 Hours Ago",
      title: "Workflow New Lead | Notification | WHATSAPP Triggered",
      description: [
        "By Abdul through Workflow from Web",
        "Notification for New Lead Alert!!! executed",
      ],
    },
    {
      time: "26-08-2024 03:11:51 PM",
      timeAgo: "2 Hours Ago",
      title: "Workflow New Lead | Notification | WHATSAPP Triggered",
      description: [
        "By Abdul through Workflow from Web",
        "WhatsApp for Lead Welcome Whatsapp executed",
      ],
    },
    {
      time: "26-08-2024 03:11:50 PM",
      timeAgo: "2 Hours Ago",
      title: "Workflow New Lead | Notification | WHATSAPP Triggered",
      description: [
        "By Abdul through Workflow from Web",
        "Custom Function for OPTIN Leads executed",
      ],
    },
  ];

  return (
    <div className="container my-5">
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <FaUser />
            </div>
            <div className="timeline-content">
              <p className="small text-muted">{event.time}</p>
              <h6>{event.title}</h6>
              {event.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="small text-muted">{event.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
