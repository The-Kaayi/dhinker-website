import { useState } from "react";
import {
  Building2,
  BarChart as ChartBar,
  Cpu,
  Users,
  Rocket,
} from "lucide-react";
import "./IndustriesWeServe.css";

const sectionData = [
  {
    icon: Building2,
    title: "Finance",
    description: "AI-powered financial analysis and risk assessment.",
  },
  {
    icon: ChartBar,
    title: "Healthcare",
    description: "Advanced diagnostic and patient care solutions.",
  },
  {
    icon: Cpu,
    title: "Manufacturing",
    description: "Smart automation and predictive maintenance.",
  },
  {
    icon: Users,
    title: "Education",
    description:
      "AI-driven personalized learning and administrative efficiency.",
  },
  {
    icon: Rocket,
    title: "Agriculture",
    description: "Precision farming and crop monitoring with AI technology.",
  },
  {
    icon: Building2,
    title: "E-Commerce & Retail",
    description:
      "Enhancing customer experience and optimizing inventory management.",
  },
];

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark via-dark/50 to-dark">
      <div className="container mx-auto flex flex-row justify-between items-center gap-8">
        {/* Beehive Layout */}
        <div className="beehive">
          {sectionData.map((item, index) => (
            <div
              key={index}
              className={`hexagon cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "text-primary" : "text-light"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <item.icon className="w-10 h-10 text-black" />
              <p className="text-sm font-bold text-black">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Description Panel (Pushed to Right) */}
        <div className="max-w p-6 bg-dark ext-white ml-auto m-auto">
          <h3 className="text-2xl font-bold mb-8">
            {sectionData[activeIndex].title}
          </h3>
          <p className="text-light/80">
            {sectionData[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
