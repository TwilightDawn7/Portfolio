import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      name: "AI Coaching Voice Agent",
      about:
        "A real-time AI voice agent that transcribes and responds to user speech, simulating a personal coaching experience using Next.js, Convex, DeepSeek and Assembly AI.",
      tech: ["TS", "NextJs", "React"],
      url: "https://ai-coaching-voice-agent-sigma.vercel.app/",
    },
    {
      name: "Weather App",
      about:
        "A sleek and responsive weather app that provides real-time weather updates for any city worldwide.",
      tech: ["HTML", "CSS", "JS"],
      url: "",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((prj, index) => (
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">
                  {prj.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {prj.about}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {prj.tech.map((tech, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={prj.url}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
