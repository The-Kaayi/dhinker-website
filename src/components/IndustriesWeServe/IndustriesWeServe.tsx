import {
  Building2,
  BarChart as ChartBar,
  Cpu,
  Users,
  Rocket,
} from "lucide-react";

const IndustriesWeServe = () => {
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
      icon: Building2,
      title: "E-Commerce & Retail",
      description:
        "Enhancing customer experience and optimizing inventory management.",
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
  ];
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark via-dark/50 to-dark">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-16">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionData.map((item, index) => (
            <div key={index} className="card card-hover">
              <item.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-heading mb-4">{item.title}</h3>
              <p className="text-light/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
