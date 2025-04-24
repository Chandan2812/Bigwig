import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import strategy from "../assets/strategy.png";
import process from "../assets/process.png";
import CallToActionSection from "./Footer";
import Navbar from "./nav";

const Agency = () => {
  return (
    <div className="text-white text-base font-light">
      <Navbar />

      {/* Narrative Section */}
      <section className="w-full bg-gradient-to-r from-[#e43038] to-[#2d197c] px-4 md:px-4 py-24 md:py-32 relative overflow-hidden">
        <div className="w-full md:w-5/6 mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Narrative
          </h2>

          <p className="mb-5 text-lg leading-relaxed font-light">
            So it all happened when one fine day I was sitting under a tree and
            an apple fell while I was staring at the sky thinking about the
            ideas I should imply to have my own Business. Eureka! An apple fell!{" "}
            <span className="font-bold">Just kidding.</span>
          </p>

          <p className="mb-5 text-lg leading-relaxed font-light">
            It's a long story with what happened which we believe should be
            listened rather be read. Just to begin with,
            <span className="font-bold text-white"> BigWig Media </span>
            established its root in the year 2014, seeking visionary
            accomplishment since.
          </p>

          <p className="text-lg leading-relaxed font-light">
            <span className="font-bold text-white">BigWig Media</span> emerged
            through competition, but stood tall anyway.
          </p>
        </div>

        {/* Decorative Line or Bulbs */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[url('/path-to-your-bulbs-image.png')] bg-no-repeat bg-cover bg-right hidden md:block" />
      </section>

      {/* Mission Section */}
      <section className="bg-white text-black px-4 md:px-4 py-10">
        <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex justify-between">
            <img src={mission} alt="Mission Icon" className="w-40 md:w-2/3" />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-[#e43038] text-4xl md:text-5xl font-bold border-2 border-[#e43038] inline-block px-4 py-2 mb-4">
              Mission
            </h2>
            <p className="mb-3 text-lg">
              Your portion of mind plus our psyche will have their own
              <span className="font-semibold"> PARTY</span>.
            </p>
            <p className="text-lg">
              Your ideas combined with ours will be a deadly combination. So,
              when that can be a case, there’s nothing to be worried about. We
              find ways to be with you, even when the job is done.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#2d197c] px-4 md:px-4 py-10">
        <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse lg:flex-row-reverse items-center text-white gap-8">
          <div className="w-full lg:w-1/2 flex justify-between">
            <img src={vision} alt="Vision Icon" className="w-72 md:w-full" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#e43038] text-4xl md:text-5xl font-bold mb-4">
              Vision
            </h2>
            <p className="text-lg">
              Talking about requirements, it's
              <span className="font-bold"> 6/6.</span>
            </p>
            <p className="text-lg mb-3">
              Either way, eyes need it and so do you.
            </p>
            <p className="text-lg">
              We wish to make dull appealing, breed codes, souvenir creativity
              and relish them with management.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#e43038] px-4 md:px-4 py-10">
        <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse lg:flex-row items-center text-white gap-8">
          <div className="w-full lg:w-1/2 flex justify-between">
            <img src={process} alt="Process Icon" className="w-44 md:w-2/3" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Process
            </h2>
            <p className="text-lg mb-3">
              Things happen, when need to be done. Confusing? It can be
              intimidating but we know our ways of working. Just know, if teamed
              up with us, efforts will be ours and commendable results will be
              for you.
            </p>
            <p className="text-lg">
              We are transparent and iterative, from strategy to implementation.
              You’ll surely know how and when we do it. And you can’t hold but
              say <span className="font-bold text-white">“WOW.”</span>
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="bg-[#2d197c] px-4 md:px-4 py-10">
        <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse lg:flex-row-reverse items-center text-white gap-8">
          <div className="w-full lg:w-1/2 flex justify-between">
            <img src={strategy} alt="Strategy Icon" className="w-48 md:w-2/3" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#e43038] text-4xl md:text-5xl font-bold mb-4">
              Strategy
            </h2>
            <p className="text-lg mb-3">
              We like to keep it{" "}
              <span className="font-bold">plain and simple</span> by being
              Competitive, Calculative, Updated & Innovative – Always a Step
              Ahead.
            </p>
            <p className="text-lg">
              Bcoz – If You Aint First, Then we are last.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <CallToActionSection />
    </div>
  );
};

export default Agency;
