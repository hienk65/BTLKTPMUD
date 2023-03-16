import React from "react";
import './homepage.css'
// import { WrapperStyled } from "./styled";
import Slider from "../../homepage/slider/slider";
import Banner from "../../homepage/banner/banner";
import Benefit from "../../homepage/benefit/benefit";
import Feature from "../../homepage/feature/feature";
import Promotion from "../../homepage/promotion/promotion";
import Footer from "../../homepage/footer/footer";

export default function HomepageChoNhanVien() {
  return (
    <>
      <Slider />
      <Banner />
      <Benefit />
      <Feature />
      <Promotion />
      <Footer />
    </>
  );
}
