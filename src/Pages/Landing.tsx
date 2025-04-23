import homepage from "../assets/homepage.gif";
import bulb from "../assets/home-icon-1.gif";
import cube from "../assets/home_icon-2.gif";
import ham from "../assets/nav.png";

function Landing() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex"
      style={{ backgroundImage: `url(${homepage})` }} // Using the imported homepage gif
    >
      {/* Left 4/5 content overlay */}
      <div className="w-4/5 relative">
        {/* Hamburger GIF - top left */}
        <img
          src={ham} // Using the imported nav image
          alt="hamburger"
          className="absolute top-4 left-4 w-32 h-32" // Increased size to w-32 h-32
        />

        {/* Bulb GIF - top center */}
        <img
          src={bulb} // Using the imported bulb gif
          alt="bulb"
          className="absolute top-4 right-4 transform -translate-x-1/2 w-64 h-64" // Increased size to w-64 h-48
        />

        {/* Cube GIF - bottom left */}
        <img
          src={cube} // Using the imported cube gif
          alt="cube"
          className="absolute bottom-4 left-4 w-48 h-64" // Increased size to w-48 h-48
        />
      </div>
    </div>
  );
}

export default Landing;
