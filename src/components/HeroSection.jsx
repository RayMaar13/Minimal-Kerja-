import React from "react";
import HeroImage from "../asset/images/Work Hero.png"
import "./HeroSection.css"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full bg-color z-index">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
              Find your best Job, that you want
              </h1>
              <p className="mt-4 text-gray-600">
                Minimal Kerja adalah Platfom yang ideal untuk mencari kerja untuk semua kalangan Tanpa Terkecuali!
              </p>
              <Link to={'/job-vacancy'}>
              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider bg-sky-500 hover:bg-sky-600 text-white uppercase transition-colors duration-300 rounded-md lg:w-auto focus:outline-none">
                Cari Kerja Sekarang!
              </button>
              </Link>
              
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={HeroImage}
              alt="Hero Section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
