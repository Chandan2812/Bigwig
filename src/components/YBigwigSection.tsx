import Navbar from "./nav";
import why from "../assets/why-us.png";
import value from "../assets/valueIcon.png";
import team from "../assets/team.png";

const yBigwigContent = [
  {
    title: "Why Bigwig Media?",
    text: `Good things take time to occur. We, on the other hand, make this procedure faster. Let us be your 3rd Eye & 6th Sense and wait for the end results to be nothing but spectacular.
  
  BigWig Media is equipped with latest technologies, creativity and experience that leads to higher success rate.
  
  Our team comprises of lunatics who love to utilize their skills, combine them with requirements and magically transforms it into Narnia.`,
    image: why,
    bg: "bg-red-600 text-white",
  },
  {
    title: "Our Values",
    text: `We believe that with a positive working environment, the results are excellent. Out of admiration for our customers, we invented a modern company that prioritizes self-realization, admiration and indulgence at work.
  
  It’s with a collective goal; surpassing objectives on each client mandate, that we combine our resources and skills to contribute in the growth of our Beloved Clienteles.`,
    image: value,
    bg: "bg-white text-black",
  },
  {
    title: "Our Team",
    text: `Team is something that can make or break any foundation. Ours fortunately is the BADASS one.
  
  We find reasons to show our skills, hence are proudly known as BigShowOffWig.`,
    image: team,
    bg: "bg-blue-900 text-white",
  },
];

const YBigwigSection = () => {
  return (
    <section className="w-full">
      <Navbar />
      {yBigwigContent.map((block, index) => {
        const isEven = index % 2 === 0; // true if image on right
        return (
          <div key={index} className={`${block.bg} py-16`}>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
              {/* Text First if image is on right (even index) */}
              <div className={`${isEven ? "order-1" : "order-2"} space-y-4`}>
                <h2
                  className={`text-2xl md:text-3xl font-bold border-l-4 pl-4 ${
                    block.bg.includes("bg-white")
                      ? "border-red-600 text-red-600"
                      : "border-white"
                  }`}
                >
                  {block.title}
                </h2>
                <p className="text-base leading-relaxed whitespace-pre-line">
                  {block.text}
                </p>
              </div>

              {/* Image Second if image is on right (even index) */}
              <div
                className={`${
                  isEven ? "order-2" : "order-1"
                } flex justify-center`}
              >
                <img
                  src={block.image}
                  alt={block.title}
                  className="max-w-[300px] md:max-w-[400px]"
                />
              </div>
            </div>
          </div>
        );
      })}
      {/* Footer */}
      <footer className="bg-black text-white text-xs py-3 px-6 flex justify-between items-center">
        <span>© BIGWIG 2019 | PRIVACY POLICY</span>
        <span>MADE WITH ❤️</span>
      </footer>
    </section>
  );
};

export default YBigwigSection;
