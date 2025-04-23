import Navbar from "./nav";

const steps = [
  {
    title: "We Attend",
    content:
      "In order to have a deal, both parties have their own concerns. We on the other have concerns with techniques to kick-start your business...",
    icon: "🎧",
    bg: "bg-white",
    text: "text-red-600",
  },
  {
    title: "We Probe",
    content:
      "Our work begins and ends on your ideology. If well suited with your plan, we further build it up according to our capacity.",
    icon: "📋",
    bg: "bg-blue-900",
    text: "text-white",
  },
  {
    title: "We Breakthrough",
    content:
      "We believe in setting an example. That example could be dealing with and for your business, we’re up for it.",
    icon: "☁️",
    bg: "bg-red-600",
    text: "text-white",
  },
  {
    title: "We Present Our Solutions",
    content:
      "Do you know that one idea leads to another? We like to prepare you with the best. We conquer. Rest is history.",
    icon: "📄",
    bg: "bg-white",
    text: "text-red-600",
  },
  {
    title: "You choose the solution that enthuses you",
    content:
      "Let's talk about how it all works. The ideas are generated from your side and we build wings to those ideas.",
    icon: "✅",
    bg: "bg-blue-900",
    text: "text-white",
  },
  {
    title: "We Execute",
    content:
      "Once you have selected the best solution, our team of specialists goes into execution mode.",
    icon: "💻",
    bg: "bg-red-600",
    text: "text-white",
  },
  {
    title: "We Analyze and Optimize",
    content:
      "Things are done. Not locked yet. If it works according to the plan, it is a success. If not, we pivot.",
    icon: "📊",
    bg: "bg-white",
    text: "text-red-600",
  },
];

const Method = () => {
  return (
    <section>
      <Navbar />
      {steps.map((step, idx) => {
        const isImageRight = idx % 2 === 0;

        return (
          <div key={idx} className={`${step.bg} py-16 px-6 `}>
            <div
              className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center min-h-[350px] ${
                isImageRight ? "" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`space-y-4 ${step.text} ${
                  isImageRight ? "order-1" : "order-2"
                }`}
              >
                <h3 className="text-5xl font-bold border-l-4 pl-3 border-current">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed">{step.content}</p>
              </div>
              <div
                className={`text-9xl text-center ${
                  isImageRight ? "order-2" : "order-1"
                }`}
              >
                {step.icon}
              </div>
            </div>
          </div>
        );
      })}

      <div className="bg-red-600 text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Let's not waste time & get started. Shall we?
        </h2>
        <button className="bg-white text-red-600 px-6 py-3 font-semibold rounded-md hover:bg-red-100 transition">
          LET’S DISCUSS YOUR PROJECT
        </button>
      </div>
    </section>
  );
};

export default Method;
