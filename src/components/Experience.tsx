
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Bachelor of Technology – Information Technology',
    company: 'Lovely Professional University',
    location: 'Punjab, India',
    date: 'Since August 2022',
    description: 'Currently pursuing B.Tech in Information Technology.',
  },
  {
    id: 2,
    title: 'Senior Secondary Education',
    company: 'Paavai Vidhyashram CBSE School',
    location: 'Tamil Nadu, India',
    date: 'April 2021 - March 2022',
    description: 'Completed senior secondary education with 90.4%',
  },
  {
    id: 3,
    title: 'Secondary Education',
    company: 'Paavai Vidhyashram CBSE School',
    location: 'Tamil Nadu, India',
    date: 'April 2019 - March 2020',
    description: 'Completed secondary education with 93.4%',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-data-lightGray">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-subtitle">
            My professional journey and experiences
          </div>
        </motion.div>

        <div className="mt-10 relative max-w-3xl mx-auto">
          {/* Experience blocks */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Date for mobile */}
              <div className="mb-3 px-3 py-1 bg-data-blue/10 text-data-blue rounded-full text-sm inline-block">
                {exp.date}
              </div>
              
              {/* Content container */}
              <div className="w-full">
                <div className="data-card h-full">
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <p className="text-data-blue font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  {exp.certificate && (
                    <div className="mb-4 p-2 border border-gray-200 rounded-md bg-white">
                      <img 
                        src={exp.certificate} 
                        alt={`${exp.title} Certificate`} 
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  )}
                  
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 max-w-lg mx-auto">
            I'm continuously seeking new opportunities to apply my data analysis skills in real-world scenarios.
            If you have a project or position that aligns with my experience, let's connect!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
