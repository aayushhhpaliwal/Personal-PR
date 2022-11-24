import meter1 from "../assets/img/react.png";
import meter2 from "../assets/img/node.png";
import meter3 from "../assets/img/Redux.png";
import express from "../assets/img/express.png";
import mongo from "../assets/img/mongo.png";
import figma from "../assets/img/figma.png";
import Carousel from 'react-multi-carousel';
import material from "../assets/img/material.png";
import sass from "../assets/img/sass.png";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import "./style.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} className="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} className="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} className="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={express} className="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} className="Image" />
                            <h5>MongoDb</h5>
                        </div>
                        <div className="item">
                        <img src={figma} className="Image" />
                    <h5>Figma</h5>
                </div>
                <div className="item">
                <img src={sass} className="Image" />
            <h5>Sass</h5>
        </div>
                <div className="item">
                <img src={material} className="Image" />
            <h5>Material UI</h5>
        </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
