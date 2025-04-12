const skills = [
    "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "AngularJS", 
    "Ionic Framework", "Git & GitHub"
  ];
  
  const Skills = () => {
    return (
      <section className="py-12 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg p-4 text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  