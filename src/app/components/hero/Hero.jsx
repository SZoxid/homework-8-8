"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import UserImg from "/public/user.png";

export default function Hero() {
  return (
    <div className="container mt-20 mx-auto px-12 bg-[rgba(18,18,18,1)] py-4">
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            style={{ opacity: 1, transform: "none" }}
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I'm
              </span>
              <br />
              <TypeAnimation
                sequence={["Mamasidikov Zoxidjon", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-4xl lg:text-[65px]"
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              expedita.
            </p>
            <div>
              <a
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white transition duration-300"
                href="/#contact"
              >
                Hire Me
              </a>
              <a
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white mt-3 transition duration-300"
                href="/"
              >
                <span className="block bg-[#121212] hover:bg-slate-700 rounded-full px-5 py-2">
                  Download CV
                </span>
              </a>
            </div>
          </div>
          <div
            className="col-span-4 place-self-center mt-4 lg:mt-0"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                alt="hero image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-full"
                src={UserImg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
