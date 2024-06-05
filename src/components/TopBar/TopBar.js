import React from "react";
import "./TopBar.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            Admin Panel
            <AdminPanelSettingsIcon fontSize="large" />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <LanguageIcon fontSize="large" />
            <span className="topIconBadge">4</span>
          </div>

          <div className="topbarIconContainer">
            <SettingsIcon fontSize="large" />
          </div>

          <img src="./images/admin.png" alt="admin" className="topbar-image" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
