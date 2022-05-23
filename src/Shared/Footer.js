import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer p-10 bg-neutral text-neutral-content">
      <div className="footer container mx-auto justify-around ">
        <div className=" font-bold font-serif">
          <span class="footer-title text-xl ">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div className=" font-bold font-serif">
          <span class="footer-title text-xl">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div className=" font-bold font-serif">
          <span class="footer-title text-xl">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
