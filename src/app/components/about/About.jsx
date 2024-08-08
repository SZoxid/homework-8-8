import React from "react";
import Image from "next/image";
import ComputerUser from "/public/computeruser.jpg";

export default function About() {
  return (
    <div>
      <section className="text-white bg-[rgba(18,18,18,1)]" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="relative w-full h-64 md:h-full">
            <Image
              src={ComputerUser}
              alt="About me image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded"
            />
          </div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, HTML, CSS, and
              Git. I am a quick learner and I am always looking to expand my
              knowledge and skill set. I am a team player and I am excited to
              work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <button>
                <p className="mr-3 font-semibold hover:text-white text-white">
                  Skills
                </p>
                <div
                  className="h-1 bg-primary-500 mt-2 mr-3"
                  style={{ width: "calc(100% - 0.75rem)" }}
                ></div>
              </button>
              <button>
                <p className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">
                  Education
                </p>
                <div
                  className="h-1 bg-primary-500 mt-2 mr-3"
                  style={{ width: "0px" }}
                ></div>
              </button>
              <button>
                <p className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">
                  Certifications
                </p>
                <div
                  className="h-1 bg-primary-500 mt-2 mr-3"
                  style={{ width: "0px" }}
                ></div>
              </button>
            </div>
            <div className="mt-8">
              <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
