import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function CallToActionSection() {
  return (
    <div className="flex flex-col h-[60vh] justify-between">
      {/* Top Section */}
      <div className="bg-[#EE3D49] text-white flex flex-col items-center justify-center flex-grow px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Let's not waste time &amp; get started.{" "}
          <span className="text-white font-extrabold">Shall we?</span>
        </h1>
        <button className="bg-transparent border-2 border-white px-8 py-4 rounded shadow-lg text-white font-semibold text-lg tracking-widest hover:bg-white hover:text-red-600 transition">
          LET'S DISCUSS YOUR PROJECT
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white text-sm py-7 px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-gray-400">
          © BIGWIG 2025 |{" "}
          <a href="#" className="underline hover:text-gray-400">
            PRIVACY POLICY
          </a>
        </div>
        <div className="mb-2 md:mb-0 text-gray-400">
          MADE WITH <span className="text-red-500">❤️</span>
        </div>
        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:bg-[#25258E] bg-gray-400 p-1 rounded">
            <FaFacebookF color="black" />
          </a>
          <a href="#" className="hover:bg-[#25258E] bg-gray-400 p-1 rounded">
            <FaTwitter color="black" />
          </a>
          <a href="#" className="hover:bg-[#25258E] bg-gray-400 p-1 rounded">
            <FaInstagram color="black" />
          </a>
          <a href="#" className="hover:bg-[#25258E] bg-gray-400 p-1 rounded">
            <FaYoutube color="black" />
          </a>
        </div>
      </footer>
    </div>
  );
}
