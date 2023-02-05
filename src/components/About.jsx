import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      className="bg-color  lg:py-12 lg:flex lg:justify-center"
      id="about"
    >
      <div className="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
            }}
          />
        </div>
        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800  md:text-3xl">
            Telah di percaya banyak <span className="text-blue-500">Perusahan</span>
          </h2>
          <p className="mt-4 text-gray-500 ">
          <span className="text-blue-500">Minimal Kerja</span> telah di percaya oleh Ribuan Perusahan, menjadikan Platofom yang sangat di sukai oleh pencari Pekerja.<br /> jadilah Bagian dari Kami, segera daftarkan Perusahan Anda
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link
              to={"/login"}
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-sky-500 rounded-lg hover:bg-sky-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
