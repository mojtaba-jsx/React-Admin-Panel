import React from 'react'
import './SideBar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

 function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__wrapper">
            <div className="sidebar__menu">
                <h3 className="sidebar-title">
                    Dashboard
                </h3>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item active">
                        <LineStyleIcon className='sidebar-icon'/>
                        Home
                    </li>

                    <li className="sidebar__list-item">
                        <TimelineIcon className='sidebar-icon'/>
                        Analytics
                    </li>

                    <li className="sidebar__list-item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebar__menu">
                <h3 className="sidebar-title">
                    Quick Menu 
                </h3>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item active">
                        <PermIdentityIcon className='sidebar-icon'/>
                        Users
                    </li>

                    <li className="sidebar__list-item">
                        <PermIdentityIcon className='sidebar-icon'/>
                        New Users
                    </li>

                    <li className="sidebar__list-item">
                        <StorefrontIcon className='sidebar-icon'/>
                        Products
                    </li>

                    <li className="sidebar__list-item">
                        <AttachMoneyIcon className='sidebar-icon'/>
                        TransActions
                    </li>

                    <li className="sidebar__list-item">
                        <BarChartIcon className='sidebar-icon'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebar__menu">
                <h3 className="sidebar-title">
                    Notofications
                </h3>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item active">
                        <MailOutlineIcon className='sidebar-icon'/>
                        Mail
                    </li>

                    <li className="sidebar__list-item">
                        <DynamicFeedIcon className='sidebar-icon'/>
                        FeedBack
                    </li>

                    <li className="sidebar__list-item">
                        <ChatBubbleOutlineIcon className='sidebar-icon'/>
                        Messages
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default SideBar