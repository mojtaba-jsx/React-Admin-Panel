import React from "react";
import "./WidgetSm.css";
import { newMembers } from "../../datas";
import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsm-title">New Join Members</span>
      <ul className="widgetsm__list">
        {newMembers.map((user) => (
          <li className="widgetsm__list-item">
            <img
              src={user.img}
              alt="user"
              className="widgetsm__list-item-image"
            />
            <div className="widgetsm__list-item-user">
              <span className="widgetsm__list-item-user-name">
                {user.username}
              </span>

              <span className="widgetsm__list-item-user-title">
                {user.title}
              </span>
            </div>
            <button className="widgetsm__list-item-btn">
              <VisibilityIcon className="widgetsm__list-item-btn-icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
