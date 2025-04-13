import React from 'react';

const Tab = ({ icon, label }) => {
  return (
    <div className="sidebar-tab-content">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Tab; 