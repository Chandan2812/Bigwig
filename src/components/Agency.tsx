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
      <section className="bg-gradient-to-r from-[#e43038] to-[#2d197c] px-10 py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-3xl font-bold mb-6">Narrative</h2>
          <p className="mb-4 text-lg">
            So it all happened when one fine day I was sitting under a tree and
            an apple fell while I was staring at the sky thinking about the
            ideas I should imply to have my own Business. Eureka! An apple fell.{" "}
            <span className="text-blue-300 underline cursor-pointer">
              Just kidding.
            </span>
          </p>
          <p className="mb-4 text-lg">
            It’s a long story with what happened which we believe should be
            listened rather be read. Just to begin with,
            <span className="text-blue-300 font-medium"> BigWig Media </span>
            established its root in the year 2014, seeking visionary
            accomplishment since.
          </p>
          <p className="text-lg">
            <span className="text-red-200 font-medium">BigWig Media</span>{" "}
            emerged through competition, but stood tall anyway.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white text-black px-10 py-32">
        <div className="max-w-4xl mx-auto flex items-center flex-row">
          <div className="mr-10">
            <img src={mission} alt="Mission Icon" className="w-full" />
          </div>
          <div>
            <h2 className="text-[#e43038] text-2xl font-bold border-2 border-[#e43038] inline-block px-4 py-2 mb-4">
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
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#2d197c] px-10 py-32">
        <div className="max-w-4xl mx-auto flex items-center flex-row-reverse">
          <div className="ml-10">
            <img src={vision} alt="Vision Icon" className="w-full" />
          </div>
          <div>
            <h2 className="text-[#e43038] text-2xl font-bold mb-4">Vision</h2>
            <p className="text-lg mb-3">
              Talking about requirements, it’s 6/6. Either way, eyes need it and
              so do you.
            </p>
            <p className="text-lg">
              We wish to make dull appealing, breed codes, souvenir creativity
              and relish them with management.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#e43038] px-10 py-32">
        <div className="max-w-4xl mx-auto flex items-center flex-row">
          <div className="mr-10">
            <img src={process} alt="Process Icon" className="w-full" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Process</h2>
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
      <section className="bg-[#2d197c] px-10 py-32">
        <div className="max-w-4xl mx-auto flex items-center flex-row-reverse">
          <div className="ml-10">
            <img src={strategy} alt="Strategy Icon" className="w-full" />
          </div>
          <div>
            <h2 className="text-[#e43038] text-2xl font-bold mb-4">Strategy</h2>
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
