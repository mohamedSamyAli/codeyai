import { useState } from "react";
import PotentailBox from "./PotentailBox";
function PotentialSection() {
  const [items, setItems] = useState([
    {
      title: "AI-Powered",
      desc: "Transform complex diagrams into efficient, maintainable code with our groundbreaking AI technology.",
    },
    {
      title: "Collaborative",
      desc: "Boost team productivity by simplifying communication and collaboration on complex projects.",
    },
    {
      title: "Intuitive Design",
      desc: "Easily visualize your team's processes, systems, and organizational structure with our intuitive interface.",
    },
    {
      title: "Time-Saving",
      desc: "Cut down on development time and streamline workflows with instantaneous diagram-to-code conversion.",
    },
    {
      title: "Scalable",
      desc: "Grow your projects seamlessly with our adaptable and versatile platform.",
    },
    {
      title: "Flexible",
      desc: "Stay in control by customizing the code output to fit your desired architectural patterns or frameworks.",
    },
  ]);

  return (
    <section>
      <h1 className="font-bold text-[#22222A] container mt-12 sm:mt-16 mb-8 sm:mb-12">
        Unleash Your Potential
      </h1>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[100px] max-w-full">
          {items.map((item) => {
            return (
              <PotentailBox
                key={item.title}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PotentialSection;
