import React, { useState } from "react";
import { FirstTab } from "./TabData/FirstTab";
import { SecTab } from "./TabData/SecTab";
import { FileUpload } from "./TabData/FileUpload";

// Tab component to manage the tab state
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: " Insert Number Here", content: <FirstTab/> },
    { id: 1, label: " Get Contacts", content: <SecTab/> },
    { id: 2, label: "Upload file", content: <FileUpload/>},
  ];

  return (
    <div>
      {/* Tab Buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
        )}
      </div>
    
    </div>
  );
};

export default Tabs;
