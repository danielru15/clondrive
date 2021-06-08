import React from 'react'
import './header.css'
import logo from '../../assets/logo.jpeg'
import { Avatar } from '@material-ui/core';
import { Apps , SettingsOutlined, HelpOutlineOutlined, CheckCircleOutline  , 
       Search , ArrowDropDown } from '@material-ui/icons';
const Header = ({User}) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="buscar">
                <Search/>
                <input type="text" placeholder="Buscar en Drive" />
                <ArrowDropDown/> 
            </div>
            <div className="a">
                <div className="a">
                    <CheckCircleOutline className="menu"/>
                    <HelpOutlineOutlined className="menu"/>
                    <SettingsOutlined className="menu"/>
                </div>
                <div className="a">
                    <Apps className="menu"/>
                    <Avatar><img src={User} alt="avatar" className="avatar"/></Avatar>
                </div>
            </div>
        </div>
    )
}

export default Header
