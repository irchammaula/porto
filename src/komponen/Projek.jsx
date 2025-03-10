import { useState } from "react";

export default function Projek() {
  const [activeTab, setActiveTab] = useState("UI/UX");

  const projects = {
    "UI/UX": [
      {
        id: 1,
        title: "UI/UX Project 1",
        description: "This is a UI/UX design project.",
        image: "https://plus.unsplash.com/premium_photo-1704546974012-78acde0d4905?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tools: ["Figma", "Adobe XD", "Wireframing"],
      },
      {
        id: 2,
        title: "UI/UX Project 2",
        description: "Another UI/UX design project.",
        image: "https://images.unsplash.com/photo-1734688246098-141f0cae5cbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tools: ["Figma", "Sketch", "Prototyping"],
      },
    ],
    "Web Development": [
      {
        id: 3,
        title: "Web Dev Project 1",
        description: "This is a web development project.",
        image: "https://images.unsplash.com/photo-1735836761873-1e5fa93f7125?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tools: ["React", "Tailwind", "Node.js"],
      },
      {
        id: 4,
        title: "Web Dev Project 2",
        description: "Another web development project.",
        image: "https://source.unsplash.com/600x400/?javascript,frontend",
        tools: ["Next.js", "Tailwind", "TypeScript"],
      },
    ],
  };

  // Warna untuk setiap tool
  const toolColors = {
    "Figma": "bg-purple-500",
    "Adobe XD": "bg-pink-500",
    "Wireframing": "bg-gray-500",
    "Sketch": "bg-yellow-500",
    "Prototyping": "bg-blue-500",
    "React": "bg-blue-600",
    "Tailwind": "bg-teal-500",
    "Node.js": "bg-green-600",
    "Next.js": "bg-gray-900",
    "TypeScript": "bg-blue-700",
  };

  return (
    <section id="projek" className="py-5 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          {["UI/UX", "Web Development"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 mx-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-[#000] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects[activeTab].map((project) => (
            <div
              key={project.id}
              className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row md:items-start max-w-4xl mx-auto"
            >
              {/* Gambar */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 h-48 md:h-64 object-cover"
              />

              {/* Konten */}
              <div className="p-6 md:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-white-200">{project.title}</h3>

                {/* Badge Tools */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${
                        toolColors[tool] || "bg-gray-500"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="text-white mt-2">{project.description}</p>
                <button className="btn mt-4 px-5 py-2 rounded-full transition text-left">
                  Lihat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Load More */}
        <button className="btn mt-10 px-6 py-3 bg-base-200 text-white rounded-full hover:bg-base-500 transition">
          Lihat Lebih banyak
        </button>
      </div>
    </section>
  );
}
