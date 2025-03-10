export default function Brands() {
    return (
      <section className="py-10 bg-base-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:w-2/4 pl-50%">
            My Tech Stack
          </h2>
  
          {/* Tech Stack Cards */}
          <div className="flex flex-wrap justify-center gap-6 md:w-2/4">
            {[
              { name: "Figma", img: "/figma.png" },
              { name: "Bootstrap", img: "/bootstrap.png" },
              { name: "Tailwind", img: "/tailwind.png" },
              { name: "Javascript", img: "/javascript.png" },
              { name: "PHP", img: "/php.png" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white transition transform hover:scale-105"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="h-10 w-10 md:h-12 md:w-12 mb-2"
                />
                <p className="text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  