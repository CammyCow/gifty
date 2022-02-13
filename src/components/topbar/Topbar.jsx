import "./topbar.css";
import React from "react";
import {  Link } from "react-router-dom";
import { Search, Person, Chat, RssFeed, HelpOutline } from "@material-ui/icons";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";
import {logout} from "../../firebase";

//navigation router
const Links = () => {
    return(
    <div className="topbarRight">
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Link to="/profile"><Person /></Link>
            </div>
            <div className="topbarIconItem">
                <Chat />
            </div>
            <div className="topbarIconItem">
                <Link to = "/feed"><RssFeed /></Link>
            </div>
            <div className="topbarIconItem">
                <HelpOutline />
            </div>
        </div>
        <div>
            <button onClick={() => logout()}> Log Out</button>
        </div>
        <Link to="/profile"><img src="/assets/person/1.jpeg" alt="" className="topbarImg"/></Link>
    </div>

    )
}

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">gifty</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for gift"
            className="searchInput"
          />
        </div>
      </div>
        <Links />
    </div>
  );
}
