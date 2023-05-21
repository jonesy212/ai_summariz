import React from "react";
import logo from "../../public/assets/ai_summariz.png";
const Hero = () => {
  return (
    <div class="main-container">
      <header clasName="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center flex-col">
          <div className="w-20 image-conatiner">
            <img
              src={logo}
              alt="summarize_logo"
              className="logo object-conatin"
            />
          </div>
          <button className="github">Github</button>
        </nav>

        <h1>
          Use GPT-4
          <br className="max-md:hidden" />
          <span className="orange_gradient">To Summariz Articles</span>
				</h1>
				<h2>Trying to catch up on reading.  Use Summariz to provide a straight-to-the-point summary of anything you want.</h2>
      </header>
    </div>
  );
};

export default Hero;
