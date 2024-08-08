import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="w-full flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <a className="text-2xl md:text-5xl text-white font-semibold" href="/">
            LOGO
          </a>
          <div class="menu hidden md:block md:w-auto" id="navbar">
            <ul class="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              <li>
                <a
                  class="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  class="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  class="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
