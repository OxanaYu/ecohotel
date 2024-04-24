import React from "react";

import LogoWhite from "../assets/img/logo-white.jpeg";

const Footer = () => {
  return (
    <footer className="bg-green py-12">
      <div className="container mx-auto text-white flex justify-between ">
        <a href="/">
          <img className="h-16" src={LogoWhite} alt="" />
        </a>
        Copyright &copy; 2024. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
