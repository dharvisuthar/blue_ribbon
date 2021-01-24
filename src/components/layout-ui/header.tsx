
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";
import { FaBars, FaAngleRight, FaSearch } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, CardMedia, Grid } from "@material-ui/core";
import * as LogoImage from "../../images/CentillionLogo.svg";
import "../../style.css";
import { NavigationPaths } from "../../enums/navigation-paths";

const Header = () => {

    const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");
    const lessThan1200 = useMediaPredicate("(max-width: 1199px)");
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <AppBar position="static" style={{ fontFamily: "Roboto", backgroundColor: "#5d5e3b", position: "fixed"}}>
            <div className="main-container-div-header">
                <Grid container spacing={2} className="width-100" >
                    <Grid item xs={12} sm={6} lg={5} md={5}>
                        <h1 className="comp-logo">Blue Ribbon Products</h1>
                        {lessThan1200 && <FaBars className="header-fabbars-icon" onClick={toggleNav} />}
                    </Grid>
                    {biggerThan1200 && <Grid item xs={12} sm={6} lg={7} md={7} className="menubar-paddingtop">
                        <span><Link className="a-navbar-header-menu" to={"/"+ NavigationPaths.Home} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Home</Link></span>
                        <span className="footer_grd4_span"><Link to={"/"+ NavigationPaths.Home + "#about_us"} className="a-navbar-header-menu" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>About Us</Link></span>
                        <span className="footer_grd4_span"><Link to={"/"+ NavigationPaths.Home + "#our_services" } className="a-navbar-header-menu" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Our Services</Link></span>
                        <span className="footer_grd4_span"><Link to={"/"+ NavigationPaths.Home + "#our_mission"} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })} className="a-navbar-header-menu">Our Mission</Link></span>
                        <span className="footer_grd4_span"><Link to={"/"+ NavigationPaths.Home + "#our_menu"} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })} className="a-navbar-header-menu">Our Menu</Link></span>
                        <span className="footer_grd4_span"><Link to={"/"+ NavigationPaths.Gallery} className="a-navbar-header-menu" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Gallery</Link></span>
                    </Grid>}  {lessThan1200 && isNavVisible && (
                        <Grid item xs={12} sm={12} lg={12} md={12} className="header-fabbards-icon-list-mobile row-width-100" >
                            <p className="footer_grd4_span"><Link className="a-navbar-header-menu" to={"/"+ NavigationPaths.Home} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Home</Link></p>
                            <p className="footer_grd4_span"><Link className="a-navbar-header-menu" to={"/"+ NavigationPaths.Home + "#about_us"} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>About Us</Link></p>
                            <p className="footer_grd4_span"><Link className="a-navbar-header-menu" to={"/"+ NavigationPaths.Home + "#our_services"} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Our Services</Link></p>
                            <p className="footer_grd4_span"><Link className="a-navbar-header-menu" to={"/"+ NavigationPaths.Home + "#our_mission"} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Our Mission</Link></p>
                            <p className="footer_grd4_span"><Link className="a-navbar-header-menu" to={"/"+ NavigationPaths.Home + "#our_menu"} scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Our Menu</Link></p>
                            <p className="footer_grd4_span"><Link to={"/"+ NavigationPaths.Gallery} className="a-navbar-header-menu" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}>Gallery</Link></p>
                     </Grid>
                    )}
                </Grid>
            </div>
        </AppBar>
    )
}

export default Header;