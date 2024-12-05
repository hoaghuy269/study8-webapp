import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import logo from '../../../../assets/images/main_logo_black.png';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#f8f8f8', boxShadow: 'none', height: '64px',}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                <img src={logo} alt="Logo" style={{height: '40px'}}/>

                <IconButton edge="end" color="inherit" aria-label="help">
                    <HelpIcon sx={{color: '#000'}}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
