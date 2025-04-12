import { useState } from "react";

const projects = [
  {
    title: "Ecommerce Website – MERN Stack",
    duration: "March 2025 – April 2025",
    description: [
      "Designed and developed a full-stack e-commerce app using the MERN stack with Firebase for authentication.",
      "Built secure user authentication and session management.",
      "Created and integrated RESTful APIs for product and order handling.",
      "Developed frontend components for cart and multi-step checkout.",
      "Implemented Redux for state management.",
      "Ensured mobile responsiveness using Tailwind CSS.",
      "Deployed on Vercel with secure routing and MongoDB Atlas integration."
    ],
    link: null
  },
  {
    title: "Ayra Web App – PWA",
    duration: "July 2024 – March 2025",
    description: [
      "Developed a responsive PWA using React.js compatible across desktop and mobile.",
      "Used reusable React + Tailwind UI components.",
      "Integrated local storage/session for persistent user auth.",
      "Enabled offline support with modern PWA features.",
      "Firebase used for authentication and secure login.",
      "Used lazy loading, code splitting for performance boost."
    ],
    link: null
  },
  {
    title: "Ionic Angular Mobile App Upgrade",
    duration: "Nov 2023 – March 2024",
    description: [
      "Upgraded an existing mobile app to latest Ionic and Angular versions.",
      "Refactored deprecated components and updated plugins.",
      "Resolved breaking changes and optimized performance.",
      "Tested and fixed UI/UX inconsistencies post-migration.",
      "Documented the entire migration process and best practices."
    ],
    link: null
  }
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDetails(index)}>
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.duration}</p>
                </div>
                <button className="text-blue-500 hover:underline">
                  {openIndex === index ? "Hide Details" : "View Details"}
                </button>
              </div>
              {openIndex === index && (
                <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
