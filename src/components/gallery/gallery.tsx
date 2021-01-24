import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";
import { HashLink as Link } from 'react-router-hash-link';
import { IconButton, Grid, withStyles, CardMedia, Typography } from "@material-ui/core";
import { FaPlus, FaDesktop, FaCode, FaUser, FaBusinessTime, FaAccessibleIcon, FaBuilding, FaArrowAltCircleRight } from 'react-icons/fa';
import { companyName, compPhoneNumber } from '../../providers/comp-contact-provider';
import * as landingoneLogo from "../../images/img1.jpg";
import * as landingtwoLogo from "../../images/img2.jpg";
import * as landingthreeLogo from "../../images/img3.jpg";
import * as landingfourLogo from "../../images/img4.jpg";
import * as img1Image from "../../images/image1.jpg";
import * as img2Image from "../../images/image2.jpg";
import * as img3Image from "../../images/image3.jpg";
import * as img4Image from "../../images/image4.jpg";
import * as img5Image from "../../images/image5.jpg";
import * as img6Image from "../../images/image6.jpg";
import * as img7Image from "../../images/image7.jpg";
import * as img8Image from "../../images/image8.jpg";
import * as img9Image from "../../images/image9.jpg";
import * as img10Image from "../../images/image10.jpg";
import * as img11Image from "../../images/image11.jpg";
import * as img12Image from "../../images/image12.jpg";
import * as img13Image from "../../images/image13.jpg";
import * as img14Image from "../../images/image14.jpg";
import * as img15Image from "../../images/image15.jpg";
import * as img16Image from "../../images/image16.jpg";
import * as img17Image from "../../images/image17.jpg";
import * as img18Image from "../../images/image18.jpg";
import * as img19Image from "../../images/image19.jpg";
import * as img20Image from "../../images/image20.jpg";
import * as img21Image from "../../images/image21.jpg";
import * as img22Image from "../../images/image22.jpg";
import * as img23Image from "../../images/image23.jpg";
import * as img24Image from "../../images/image24.jpg";
import * as img25Image from "../../images/image25.jpg";
import * as img26Image from "../../images/image26.jpg";
import * as img27Image from "../../images/image27.jpg";
import * as img28Image from "../../images/image28.jpg";
import * as img29Image from "../../images/image29.jpg";
import * as img30Image from "../../images/image30.jpg";
/**
 * gallery component
 */
const Gallery = () => {

    /**
     * return the elements for home
     */
    return (

        <div className="constainer-HomeBar">
            <div className="main_div">
                <div className="hide_div"></div>
                <div className="">

                    <Grid container className="grid-dashboard-second">
                        <Grid container spacing={2} className="grid-row-gallery">
                            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-column-gallery">
                                <div className="div-service_img_card"><img src={img1Image as any} className="service_img_card" /></div>
                                <div className="div-service_img_card"><img src={img2Image as any} className="service_img_card" /></div>
                                
                                <img src={img3Image as any} className="service_img_card" />
                                <img src={img4Image as any} className="service_img_card" />
                                <img src={img5Image as any} className="service_img_card" />
                                <img src={img6Image as any} className="service_img_card" />
                                <img src={img7Image as any} className="service_img_card" />
                                <img src={img8Image as any} className="service_img_card" />
                                <img src={img9Image as any} className="service_img_card" />
                                <img src={img10Image as any} className="service_img_card" />
                                <img src={img20Image as any} className="service_img_card"/>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-column-gallery">
                                <img src={img11Image as any} className="service_img_card" /> 
                                <img src={img12Image as any} className="service_img_card"/>
                                <img src={img13Image as any} className="service_img_card"/>
                                <img src={img14Image as any} className="service_img_card"/>
                                <img src={img15Image as any} className="service_img_card"/>
                                <img src={img16Image as any} className="service_img_card"/>
                                <img src={img17Image as any} className="service_img_card"/>
                                <img src={img18Image as any} className="service_img_card"/>
                                <img src={img19Image as any} className="service_img_card"/>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-column-gallery">
                                <img src={img21Image as any} className="service_img_card"/>
                                <img src={img22Image as any} className="service_img_card"/>
                                <img src={img23Image as any} className="service_img_card"/>
                                <img src={img24Image as any} className="service_img_card"/>
                                <img src={img25Image as any} className="service_img_card"/>
                                <img src={img26Image as any} className="service_img_card"/>
                                <img src={img27Image as any} className="service_img_card"/>
                                <img src={img28Image as any} className="service_img_card"/>
                                <img src={img29Image as any} className="service_img_card"/>
                                <img src={img30Image as any} className="service_img_card"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Gallery);