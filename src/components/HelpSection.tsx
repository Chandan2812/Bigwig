import Navbar from "./nav";
import digital from "../assets/digital-partner.gif";
import campaign from "../assets/4_digital-campaign.gif";
import creativeCampaign from "../assets/creative-campaign.gif";
import app from "../assets/app.gif";
import newWeb from "../assets/new-website.gif";
import bird from "../assets/digital-instalation.gif";

const services = [
  {
    title: "HELP! I NEED A DIGITAL PARTNER",
    description:
      "Starting a business can be tedious. Promoting it is a necessity. If you think generating leads, lead management, generating sales etc. can be done by a Specialist so you can save time for your other important work, then consider us your Partner... as making lives easy is our full time job.",
    img: digital,
    bg: "bg-blue-900 text-white",
  },
  {
    title: "HELP! I NEED TO EXECUTE A DIGITAL CAMPAIGN",
    description:
      "Dealing with so many abilities we pride ourselves on having the capacity to handle anything a customer tosses at us. We trust in being the unshakeable comrade our customers could ever need. Be it the reason from individuals mind control to our customer’s overall vision, the list is reason including brands contact services etc.",
    img: campaign,
    bg: "bg-red-500 text-white",
  },
  {
    title: "HELP! I NEED CREATIVE CAMPAIGN",
    description:
      "Creative campaign can be a distinctive fulfilling creative clinch such as teams both online and offline. Flyers, video editing, website layout, anything you can think of that will be needed in campaigning - we've got you covered.",
    img: creativeCampaign,
    bg: "bg-white",
  },
  {
    title: "HELP! I NEED AN APP",
    description:
      "We have created everything from corporate apps to multiplayer games to virtual pets. We have found that the real challenge isn't designing or building the functionalities but knowing which ones give actual value - and how to distribute the man hours.",
    img: app,
    bg: "bg-blue-900 text-white",
  },
  {
    title: "HELP! I NEED E-COMMERCE WEB APPLICATION WEBSITE",
    description:
      "A well built DIGITAL PLATFORM should generate revenue, strengthen your brand and handle pressure from your customer support. But the demands and complexity of modern web technology has risen dramatically...",
    img: newWeb,
    bg: "bg-red-500 text-white",
  },
  {
    title: "HELP! I NEED TO ORGANIZE AN EVENT",
    description:
      "BigWig Events can help you with this too. From corporate events, M.I.C.E, destination weddings, catering to security, every detail is seen through empathetic grace.",
    img: bird,
    bg: "bg-bigwigBlue text-white",
  },
  {
    title: "HELP! MY THING IS NONE OF THE ABOVE",
    description:
      "Just ping us for anything, even for watering your office plants, we probably will do even that awkward task with the utmost genius.",
    img: "/assets/service7.png",
    bg: "bg-white",
  },
];

const formatTitle = (title: string) => {
  if (title.startsWith("HELP!")) {
    const parts = title.split("HELP!");
    return (
      <h3 className="text-xl font-semibold">
        <span className="text-blue-500 font-bold">HELP!</span>
        <span style={{ color: "#ee3d49" }}>{parts[1]}</span>
      </h3>
    );
  }
  return <h3 className="text-xl font-semibold">{title}</h3>;
};

const HelpSection = () => {
  return (
    <div className="w-full">
      <Navbar />
      {/* Title Section */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl font-semibold">
          <span className="text-rose-500">WE </span>
          <span className="text-blue-500">PLAN </span>
          <span className="text-pink-500">DESIGN </span>
          <span className="text-yellow-500">BUILD </span>
          <span className="text-green-500">EXECUTE </span>
          <span className="text-sky-500">DELIVER </span>
          <span className="text-purple-500">RETAIN</span>
        </h2>
        <p className="mt-2 text-xl text-gray-700">HOW CAN WE HELP YOU?</p>
      </div>

      {/* Services Section */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center justify-between px-6 py-20 min-h-[600px] ${
            service.bg
          }`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 space-y-4 px-10">
            {formatTitle(service.title)}
            <p className="text-2xl leading-relaxed">{service.description}</p>
            <a href="#contact" className="underline text-sm font-semibold">
              CONTACT US
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src={service.img}
              alt={service.title}
              className="max-w-[250px] md:max-w-xs lg:max-w-md"
            />
          </div>
        </div>
      ))}

      {/* Final CTA */}
      <div className="bg-red-500 text-white py-10 text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Let's not waste time & get started. Shall we?
        </h2>
        <button className="border px-6 py-3 rounded hover:bg-white hover:text-red-500 transition">
          LET’S DISCUSS YOUR PROJECT
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-xs py-3 px-6 flex justify-between items-center">
        <span>© BIGWIG 2019 | PRIVACY POLICY</span>
        <span>MADE WITH ❤️</span>
      </footer>
    </div>
  );
};

export default HelpSection;
