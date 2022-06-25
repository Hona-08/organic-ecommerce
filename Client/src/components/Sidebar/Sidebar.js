import React from 'react'
import {
    SidebarContainer,
    Icon,
    SidebarWrapper,
    // Overlay,
    SidebarMenu,
    SidebarRoute,
    SidebarLink,
} from './SidebarElement.js';//importing its style
import CloseIcon from '@mui/icons-material/Close';
import { bool } from 'prop-types';

const Sidebar = ({ setOpen, open }) => {
    return (
        <SidebarContainer open={open} >
            <Icon>
                <CloseIcon onClick={() => setOpen(!open)} />
            </Icon>
            <SidebarWrapper> 
                {/* <SidebarMenu>
                    <SidebarRoute to= '/shopall'>Shop All</SidebarRoute>
                </SidebarMenu> */}
                <SidebarMenu>
                    <SidebarLink to= 'category' onClick={() => setOpen(!open)}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    activeClass="active"
                    >Shop By Category</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to= 'concern' onClick={() => setOpen(!open)}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    activeClass="active"
                    >Shop By Concern</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to= 'about' onClick={() => setOpen(!open)}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    activeClass="active"
                    >About</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarRoute to= '/contact'>Contact</SidebarRoute>
                </SidebarMenu>
            </SidebarWrapper>
            {/* <Overlay/> */}
        </SidebarContainer>
    );
}

Sidebar.propTypes = {
    open: bool.isRequired,
}
export default Sidebar;