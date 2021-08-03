import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header_icon"/>
            </IconButton>
            <img className="header_logo" src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo.png"
                 alt=""/>
            <IconButton>
                <ForumIcon/>
            </IconButton>
        </div>
    );
}

export default Header;