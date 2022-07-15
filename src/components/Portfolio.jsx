import Nav from "../Nav";
import Helmet from "react-helmet";
import React from "react";
import Card from "./Card";
import "./portfolio.Module.css";
import webpageImg from "./../images/portfolio/websiteImg.png";
import textleMappingImg from "./../images/portfolio/textileMappingImg.png";
import middHacksImg from "./../images/portfolio/middHacks.png";
//import Canvas from "./Canvas";

export default function Portfolio() {
  return (
    <div>
      <Nav />
      <div className="cardHolder">
        <Card
          link="https://www.alexisballo.com"
          name="This Website"
          description="While website development is not my main interest, I created this website to showcase my tech versatility and knowledge about different fields in computer science.  "
          image={webpageImg}
          descHead="Personal Resume Website"
          skills={["React.js", "DigitalOcean", "Html, Css, Js"]}
        />
        <Card
          name="Textile Mapping"
          link="https://alexisballo.shinyapps.io/myApp"
          image={textleMappingImg}
          descHead="Textile Mapping"
          description='Website created in January semester at Middlebury College. The class was called "Data Science Across Diciplines" and the focus was on the Dutch textile trade '
          skills={["R", "shiny"]}
        />
        <Card
          link="https://github.com/AlexisBallo2/Hackathon2022"
          name="Middlebury Hackathon"
          description=" Middlebury Hackathon project where students can rent and borrow items from other students (only 24 hours on development time)  "
          image={middHacksImg}
          descHead="Middlebury Hackathon Project: Midd XChange"
          skills={["React.js", "Html, Css, Js", "sqlite3"]}
        />
      </div>
    </div>
  );
}