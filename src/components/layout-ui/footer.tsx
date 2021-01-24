import React from 'react';
import "../index";
import { companyName, compPhoneNumber, compEmailAddress, compAddress } from '../../providers/comp-contact-provider';
import { HashLink as Link } from 'react-router-hash-link';
import * as INLogo from "../../images/IndiaFlag.png";
import { AppBar, Toolbar, Grid, IconButton, CardMedia } from "@material-ui/core";
import * as facebookLogo from "../../images/facebook.png";
import * as  googleplusLogo from "../../images/google-plus.png";
import * as instagramLogo from "../../images/instagram.png";
import * as linkedinLogo from "../../images/linkedin.png";
import * as whatsappLogo from "../../images/whatsapp.png";
import * as skypeLogo from "../../images/skype.png";
import * as twitterLogo from "../../images/twitter.png";
import { FaPhoneAlt, FaMapMarked, FaMapMarkerAlt, FaFacebookF, FaFacebookSquare } from 'react-icons/fa';


import "../../style.css";
/**
 * footer bar component
 */
export const Footer = () => {

    /**
     * end -use for hover effect
     */
    return (
        <div className="bg-black">
            <AppBar position="static">
                <Toolbar className="footer_appbar">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="grid-footer">
                            <Grid container>
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <h1 className="footer_grd3_h3">Blue Ribbon Products<span className="footer-grd3-span"> - Wild Game Processing & Taxidermy</span></h1>
                                </Grid>
                                <Grid item xs={12} sm={6} md={7} lg={7}>
                                    <br />
                                    <p> <a className="footer_grd2_a"><FaPhoneAlt className="color-5d5e3b" /> {compPhoneNumber}</a></p>
                                    <p><a className="footer_grd2_address" href="https://maps.google.com/maps?q=6560 191/2 MILE RD, Suite D, Sterling Heights, MI 48314" target="_blank"><FaMapMarkerAlt className="color-5d5e3b" /> {compAddress}</a></p>
                                </Grid>
                                <Grid item xs={12} sm={6} md={1} lg={1}>
                                <br />
                                 <p><a href="https://www.facebook.com/Blue-Ribbon-Products-Wild-Game-Processing-Taxidermy-104224970992554" target="_blank"><FaFacebookSquare className="color-5d5e3b font-size-40" /></a>
                                    </p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="footer_grd5">
                            © 2021 {companyName}. All Rights Reserved.
                          </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

