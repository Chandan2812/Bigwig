import { useState } from "react";
import homepage from "../assets/homepage.gif";
import bulb from "../assets/home-icon-1.gif";
import cube from "../assets/home_icon-2.gif";
import ham from "../assets/nav.png";
import { Link } from "react-router-dom";

function Landing() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="flex w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${homepage})` }}
    >
      {/* Left 5/6 Content */}
      <div className="relative w-5/6 h-full">
        {/* Hamburger and dropdown container */}
        <div className="absolute top-8 left-16 z-20">
          <img
            src={ham}
            alt="hamburger"
            className="w-12 h-12 bg-white rounded-full border cursor-pointer"
            onClick={() => setShowContent(!showContent)}
          />

          {/* Animated Toggleable Content */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${showContent ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}
            `}
            style={{
              fontFamily: "inherit",
              fontSize: "1.75rem",
              color: "white",
            }}
          >
            <div className="mt-4 space-y-3 font-thin cursor-pointer">
              <Link to="/agency" className="block">
                Agency
              </Link>
              <Link to="/legal" className="block">
                Legal
              </Link>
              <Link to="/clients" className="block">
                Clients
              </Link>
              <Link to="/strategy" className="block">
                Strategy
              </Link>
              <Link to="/bigwig" className="block">
                Y Bigwig
              </Link>
              <Link to="/things-to-do" className="block">
                Things to Do
              </Link>
              <Link to="/method-to-madness" className="block">
                Method to Madness
              </Link>
            </div>
          </div>
        </div>

        {/* Bulb GIF - top right */}
        <img
          src={bulb}
          alt="bulb"
          className="absolute top-0 right-0 w-1/3 h-48 z-0 -mt-6"
        />

        {/* Cube GIF - bottom left - fixed in place */}
        <img
          src={cube}
          alt="cube"
          className="absolute bottom-0 left-0 w-1/4 z-0 -ml-16"
        />
      </div>

      {/* Right 1/6 Hover Text Area */}
      <div className="w-1/6 flex flex-col justify-start mt-10 items-end space-y-4 text-white font-light text-3xl">
        <HoverText
          defaultText="LET'S"
          hoverText="Let's Talk About Us"
          boldText="Talk About Us"
        />
        <HoverText
          defaultText="MAKE"
          hoverText="Make a Project"
          boldText=" a Project"
        />
        <HoverText
          defaultText="THINGS"
          hoverText="Things We Do"
          boldText="We Do"
        />
        <HoverText
          defaultText="INTERESTING"
          hoverText="Interested?"
          boldText="Interested?"
        />
      </div>
    </div>
  );
}

type HoverTextProps = {
  defaultText: string;
  hoverText: string;
  boldText: string; // Added boldText prop
};

function HoverText({ defaultText, hoverText, boldText }: HoverTextProps) {
  const highlightBold = (text: string) => {
    // This function will split the hoverText and make the bold part bold
    return text.split(boldText).map((part, index) => {
      if (index === 0) return <span>{part}</span>;
      return (
        <>
          <span style={{ fontWeight: 400 }}>{boldText}</span>
          <span>{part}</span>
        </>
      );
    });
  };

  if (defaultText === "INTERESTING") {
    return (
      <div className="relative h-10 w-full flex justify-end items-center group cursor-pointer overflow-hidden pr-2">
        {/* Base word: INTEREST */}
        <span className="text-white text-right">INTEREST</span>

        {/* Animate "ING" fade out and "ED?" fade in upward */}
        <div className="relative ml-1 w-[3.5rem] h-full flex items-center justify-start">
          {/* ING fades out on hover */}
          <span className="absolute transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2 text-white">
            ING
          </span>

          {/* ED? fades in and rises on hover */}
          <span className="absolute transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 text-white font-bold">
            ED?
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden h-10 w-full group cursor-pointer">
      <div className="flex transition-transform duration-700 group-hover:-translate-x-1/2 w-[200%]">
        <div className="w-1/2 text-right pr-2">{defaultText}</div>
        <div className="w-1/2 text-right pr-2">{highlightBold(hoverText)}</div>
      </div>
    </div>
  );
}

export default Landing;
