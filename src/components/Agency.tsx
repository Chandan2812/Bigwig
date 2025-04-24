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
      <section className="bg-gradient-to-r from-[#e43038] to-[#2d197c] px-6 py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl font-extrabold mb-8">Narrative</h2>

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

        {/* Light Bulb Line (replicated from image) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[url('/path-to-your-bulbs-image.png')] bg-no-repeat bg-cover bg-right" />
      </section>

      {/* Mission Section */}
      <section className="bg-white text-black px-6 py-32">
        <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:mr-10">
            <h2 className="text-[#e43038] text-5xl font-bold border-2 border-[#e43038] inline-block px-4 py-2 mb-4 mt-8 lg:mt-0">
              Mission
            </h2>
            <p className="mb-3 text-lg">
              Your portion of mind plus our psyche will have their own{" "}
              <span className="font-bold">PARTY</span>.
            </p>
            <p className="text-lg">
              Your ideas combined with ours will be a deadly combination. So,
              when that can be a case, there’s nothing to be worried about. We
              find ways to be with you, even when the job is done.
            </p>
          </div>
          <div className="w-full flex justify-center mb-6 lg:mb-0">
            <img src={mission} alt="Mission Icon" className="w-48 md:w-60" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#2d197c] px-6 py-32">
        <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center text-white">
          <div className="lg:ml-10">
            <h2 className="text-[#e43038] text-5xl font-bold mb-4 mt-8 lg:mt-0">
              Vision
            </h2>
            <p className="text-lg mb-3">
              Talking about requirements, it’s 6/6. Either way, eyes need it and
              so do you.
            </p>
            <p className="text-lg">
              We wish to make dull appealing, breed codes, souvenir creativity
              and relish them with management.
            </p>
          </div>
          <div className="w-full flex justify-center mb-6 lg:mb-0">
            <img src={vision} alt="Vision Icon" className="w-72 md:w-96" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#e43038] px-6 py-32">
        <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row items-center text-white">
          <div className="lg:mr-10">
            <h2 className="text-white text-5xl font-bold mb-4 mt-8 lg:mt-0">
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
          <div className="w-full flex justify-center mb-6 lg:mb-0">
            <img src={process} alt="Process Icon" className="w-44 md:w-56" />
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="bg-[#2d197c] px-6 py-32">
        <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center text-white">
          <div className="lg:ml-10">
            <h2 className="text-[#e43038] text-5xl font-bold mb-4 mt-8 lg:mt-0">
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
          <div className="w-full flex justify-center mb-6 lg:mb-0">
            <img src={strategy} alt="Strategy Icon" className="w-48 md:w-80" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <CallToActionSection />
    </div>
  );
};

export default Agency;
