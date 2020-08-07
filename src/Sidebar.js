import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* Twitter Icon */}
      <TwitterIcon className='sidebar__twitterIcon' />

      <SidebarOption active Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={SearchIcon} text='Explore' />
      <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
      <SidebarOption Icon={MailOutlineIcon} text='Messages' />
      <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
      <SidebarOption Icon={PersonIcon} text='Profile' />
      <SidebarOption Icon={MoreHorizIcon} text='More' />

      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}
      {/* SideBar Option */}

      {/* Button Tweet */}
      <Button varient='outlined' className='sidebar__tweet'>
        TWEET
      </Button>
    </div>
  );
}

export default Sidebar;
