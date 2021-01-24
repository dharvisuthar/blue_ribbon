import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";
import { HashLink as Link } from 'react-router-hash-link';
import { IconButton, Grid, withStyles, CardMedia, Typography } from "@material-ui/core";
import { FaPlus, FaDesktop, FaCode, FaUser, FaBusinessTime, FaAccessibleIcon, FaBuilding, FaArrowAltCircleRight } from 'react-icons/fa';
import { companyName, compPhoneNumber } from '../../providers/comp-contact-provider';
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
import * as landingoneLogo from "../../images/img1.jpg";
import * as landingtwoLogo from "../../images/img2.jpg";
import * as landingthreeLogo from "../../images/img3.jpg";
import * as landingfourLogo from "../../images/img4.jpg";
import * as img1Image from "../../images/image1.jpg";
import * as img6Image from "../../images/image6.jpg";
import * as img9Image from "../../images/image9.jpg";
import * as img10Image from "../../images/image10.jpg";
import * as img16Image from "../../images/image16.jpg";
import * as img8Image from "../../images/image8.jpg";
import * as img17Image from "../../images/image17.jpg";
import * as img22Image from "../../images/image22.jpg";
import * as img25Image from "../../images/image25.jpg";
import * as img27Image from "../../images/image27.jpg";
import * as img28Image from "../../images/image28.jpg";
import * as img30Image from "../../images/image30.jpg";
import * as img4Image from "../../images/img4.jpg";
import * as boneless_cut_img from "../../images/boneless_cut.jpg";
import * as venison_burger_img from "../../images/venison_burger.jpg";
import * as salami_cheddar_cheese_img from "../../images/salami_cheddar_cheese.jpg";
import * as pepper_jack_cheese_img from "../../images/pepper_jack_cheese.jpg";
import * as salami_img from "../../images/salami.jpg";
import * as summer_sausage_img from "../../images/summer_sausage.jpg";
import * as salami_stix_img from "../../images/salami_stix.jpg";
import * as smoked_italian_img from "../../images/smoked_italian.jpg";
import * as smoked_bratwurst_img from "../../images/smoked_bratwurst.jpg";
import * as smoked_polish_sausage_img from "../../images/smoked_polish_sausage.jpg";
import * as jerky_img from "../../images/jerky.jpg";
import * as sausage_img from "../../images/sausage.jpg";
import * as sausage_small_links_img from "../../images/sausage_small_links.jpg";
import * as venison_to_grind_img from "../../images/venison_to_grind.jpg";
import Slider from 'react-slick';
/**
 * home component
 */
const Home = () => {
  const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");

  /**
 * slider -start
 */
  const width = '100%', height = '500px';
  const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
  const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
  const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  user-select: none;
  backgroundColor: rgba(74, 196, 243, 0.9);
  color: #2a2f35;
`;
  const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;  
  left: 48%;
  position: relative;    
  bottom: 30px;
  backgroundColor: #2a2f35;
  color: #2a2f35;
`;

  const CarouselUI = ({ position, total, handleClick, children }) => <Container>
    <Children>{children} </Children>
    {/* <Dots>
    {Array(...Array(total)).map((val, index) =>
      <Dot key={index} onClick={handleClick} data-position={index}>
        {index === position ? '● ' : '○ '}
      </Dot>
    )}
  </Dots> */}
  </Container>;
  const CarouselHeader = makeCarousel(CarouselUI);
  /**
   * slider - end
   */
  const useStyles = withStyles(theme => ({
    root: {
      '& > span': {
        margin: 2,
      },
    },
  }));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  /**
   * return the elements for home
   */
  return (

    <div className="constainer-HomeBar">

      <div className="main_div">
        <div className="hide_div"></div>
        <div className="height-600">
          <Grid container className="container-div-tab" >
            <CarouselHeader defaultWait={10000} >
              <Slide right>
                <div>
                  <Grid container className="carousel_main_grid">
                    <Grid container className="carousel_paper_grid">
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <CardMedia image={landingoneLogo as any} className="header_cardMedia"> </CardMedia>
                      </Grid >
                    </Grid>
                  </Grid>
                </div>
              </Slide>
              <Slide right>
                <div>
                  <Grid container className="carousel_main_grid">
                    <Grid container className="carousel_paper_grid">
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <CardMedia image={landingtwoLogo as any} className="header_cardMedia"> </CardMedia>
                      </Grid >
                    </Grid>
                  </Grid>
                </div>
              </Slide>
              <Slide right>
                <div>
                  <Grid container className="carousel_main_grid">
                    <Grid container className="carousel_paper_grid">
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <CardMedia image={landingthreeLogo as any} className="header_cardMedia"> </CardMedia>
                      </Grid >
                    </Grid>
                  </Grid>
                </div>
              </Slide>
              <Slide right>
                <div>
                  <Grid container className="carousel_main_grid">
                    <Grid container className="carousel_paper_grid">
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <CardMedia image={landingfourLogo as any} className="header_cardMedia"> </CardMedia>
                      </Grid >
                    </Grid>
                  </Grid>
                </div>
              </Slide>
            </CarouselHeader>
          </Grid>
          {/* Dashboard second div */}
          <Grid container className="grid-dashboard-aboutus" id="about_us">
            <Grid item xs={12} sm={12} lg={6} md={6}>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6} className="bg-2a2f35 aboutus-grid">
              <h1 className="grid_dash_second_h1">About Us</h1>
              <hr className="hr_border"></hr>
              <h3 className="grid_dash_second_h3_home">Blue Ribbon Products is a full-service wild game processing company and taxidermist with 40 plus years of experience. We have been honored to service the community as a family-owned business for so long and continue to provide an exceptional experience to our loyal customers.</h3>
            </Grid>
          </Grid>
        </div>
        <Grid container className="grid-dashboard-second" id="our_services">
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <h1 className="grid_dash_second_h1">Our services</h1>
            <hr className="hr_border"></hr>
            <h3 className="grid_dash_second_h3_home">Processing custom cut, labeled and vacuum sealed meat</h3>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img6Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img9Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img10Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img16Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img17Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img8Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img22Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img25Image as any} className="service_img_card-home"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            {/* <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img27Image as any} className="service_img_card"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img28Image as any} className="service_img_card"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img30Image as any} className="service_img_card"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={4} className="service_img_div">
              <CardMedia image={img4Image as any} className="service_img_card"> </CardMedia>
              <div className="service-over-div">Taxidermy</div>
            </Grid> */}
          </Grid>
        </Grid>
        <div className="bg-2a2f35" id="our_mission">
          {/* Dashboard second div */}
          <Grid container className="grid-dashboard-second">
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <h1 className="grid_dash_second_h1">Our Mission</h1>
              <hr className="hr_border"></hr>
              <h3 className="grid_dash_second_h3_service">We are committed to our customers to ensure high quality meat processing and packaging. We consider our customers our family and express great gratitude for the opportunity to deliver our services to our amazing customers.</h3>
              <h3 className="grid_dash_second_h3_service">If interested in more information on pricing and our services please send us an email or call at 586-731-7973. We are currently accepting deer 8-6pm daily.</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <CardMedia image={img1Image as any} className="service_img_card_service"> </CardMedia>
            </Grid>
          </Grid>
        </div>
        <div className="our-menu-div" id="our_menu">
          <Grid container className="grid-dashboard-second">
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <h1 className="grid_dash_second_h1">Our Menu</h1>
              <hr className="hr_border"></hr>
              <br />
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={boneless_cut_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
                <div className="card-menu-in-txt">                  
                <span>Boneless Cut(Custome Cut, Labeled and Vacuum Sealed)</span>
                <p className="card-menu-price">$120</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={venison_burger_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Add Pork to Venison Burger</span>
                <p className="card-menu-price">$3/LB</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={salami_cheddar_cheese_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
               <span>Salami & Cheddar Cheese(5LB Stick)</span>
                <p className="card-menu-price">$30</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={pepper_jack_cheese_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                  <span>Salami & Pepper Jack Cheese(5LB Stick)</span>
                <p className="card-menu-price">$30</p>
                </div> 
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={salami_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
              <span>Salami(5LB Stick)</span>
                <p className="card-menu-price">$25</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={summer_sausage_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
               <span>Summer Sausage(5LB Stick)</span>
                <p className="card-menu-price">$25</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={salami_stix_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Salami Stix(HOT or MILD)5LB</span>
                <p className="card-menu-price">$35</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={smoked_italian_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Smoked Italian 10LB</span>
                <p className="card-menu-price">$50</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={smoked_bratwurst_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Smoked Bratwurst 10LB</span>
                <p className="card-menu-price">$50</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={smoked_polish_sausage_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Smoked Polish Sausage 10LB</span>
                <p className="card-menu-price">$50</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={jerky_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Delicious Jerky 5LB(*charge is for raw weightof meat)</span>
                <p className="card-menu-price">$40</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={sausage_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
               <span>FRESH Sausage(10LB minimum order) Polish,Italian, Hot or Mild Bratwurst</span>
                <p className="card-menu-price">$40</p>
                </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={sausage_small_links_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Breakfast Sausage-Small Links</span>
                <p className="card-menu-price">$45</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2} md={2} className="card-menu">
              <CardMedia image={venison_to_grind_img as any} className="menu_img_card_service"></CardMedia>
              <div className="card-menu-in">
              <div className="card-menu-in-txt">   
                <span>Bring us your venison to grind & package</span>
                <p className="card-menu-price">$2/LB</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home);