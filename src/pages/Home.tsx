import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Cpu,
  Building2,
  Rocket,
  Users,
  BarChart as ChartBar,
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IndustriesWeServe from "../components/IndustriesWeServe/IndustriesWeServe";

export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set(".hero-content > *, .card", { opacity: 1, y: 0 });

    // Hero section animation
    const heroTimeline = gsap.timeline();
    heroTimeline.from(".hero-content > *", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Cards animation on scroll
    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card",
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      },
    });
    cardsTimeline.from(".card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Interactive background effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      gsap.to(".hero-section", {
        backgroundPosition: `${x * 10}px ${y * 10}px`,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      heroTimeline.kill();
      cardsTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Reset styles on cleanup
      gsap.set(".hero-content > *, .card", { opacity: 1, y: 0 });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-start bg-gradient-to-br from-dark via-dark to-secondary/20 pt-16">
        <div className="container mx-auto px-4 hero-content text-left">
          <h1 className="text-6xl md:text-8xl font-heading mb-6 animate-glow">
            Think <span style={{ color: "#9127f3" }}>Big</span>, Think{" "}
            <span style={{ color: "#2ecc71" }}>Dhinker</span>.
          </h1>
          <p className="text-xl md:text-2xl text-light/80 max-w-3xl mb-12">
            Empowering businesses with cutting-edge AI technology and
            comprehensive education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/ai-solutions" className="btn btn-primary">
              Explore Solutions
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-16">
            Who We Are
          </h2>
          <p className="text-lg text-light/80 max-w-3xl mx-auto text-center mb-12">
            Dhinker is an AI solutions provider dedicated to transforming
            businesses with innovative AI technology. We specialize in building
            intelligent solutions that enhance automation, improve efficiency,
            and empower data-driven decision-making.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation Leaders",
                description:
                  "Pioneering AI solutions that transform businesses.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Industry veterans with deep AI expertise.",
              },
              {
                icon: Rocket,
                title: "Future-Ready",
                description: "Preparing businesses for the AI revolution.",
              },
            ].map((item, index) => (
              <div key={index} className="card card-hover text-center">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading mb-4">{item.title}</h3>
                <p className="text-light/80">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-heading text-center mt-16 mb-8">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Continuously exploring new AI advancements to deliver powerful solutions.",
              },
              {
                title: "Collaboration",
                description:
                  "Working closely with businesses to tailor AI solutions for their unique challenges.",
              },
              {
                title: "Accessibility",
                description:
                  "Making AI adoption simple, scalable, and effective for businesses of all sizes.",
              },
              {
                title: "Impact",
                description:
                  "Driving real-world outcomes that improve processes, customer experiences, and business growth.",
              },
            ].map((value, index) => (
              <div key={index} className="card card-hover text-center p-6">
                <h4 className="text-xl font-heading mb-2">{value.title}</h4>
                <p className="text-light/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesWeServe />
    </div>
  );
}
