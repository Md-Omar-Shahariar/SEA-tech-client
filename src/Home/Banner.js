import React from "react";
import bannerImg from "../img/pexels-pok-rie-1432675.jpg";
import { Wave } from "react-animated-text";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div class="hero-overlay bg-opacity-60 "></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-3xl sm:text-5xl font-bold font-serif ">
            <Wave text="Tech To Upgrade" />
          </h1>
          <p class="my-5 font-mono font-bold">
            Upgrade Your Self With Our Latest Technology. We Bring You The Most
            Powerful and Upgraded Equipment To Boost Your Performance To
            Unbeatable
          </p>
          <button
            onClick={() => window.location.replace("/#footer")}
            class="btn btn-primary"
          >
            Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
