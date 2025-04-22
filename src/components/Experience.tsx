
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Geeks for Geeks Summer Training Course',
    company: 'GeeksforGeeks',
    date: 'June 2024 - July 2024',
    description: 'Intensive training on data structures and algorithms, with practical application in real-world problems.',
    responsibilities: [
      'Gained hands-on experience in Data Structures & Algorithms',
      'Worked on real-world projects to apply theoretical knowledge in practical scenarios',
      'Followed best coding practices and optimized performance for better efficiency',
      'Presented the project, demonstrating practical application of learned concepts',
      'Successfully completed assessments and earned certification from GeeksforGeeks'
    ],
    certificate: '/lovable-uploads/1c241336-80ee-4eac-bdb3-7a8064ef904e.png'
  },
  {
    id: 2,
    title: 'Community Development Project',
    company: 'Thrissur Municipal Association',
    date: '2023',
    description: 'Led a community initiative focused on environmental awareness and waste management.',
    responsibilities: [
      'Led a garbage management awareness campaign with Thrissur Municipal Association',
      'Worked with Self-Help Groups (SHGs) to educate residents on waste segregation and recycling',
      'Engaged local communities in eco-friendly initiatives like composting and reducing plastic waste',
      'Collaborated with municipal officials to improve waste management efforts'
    ]
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

        <div className="mt-10 relative">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-data-blue/30 transform md:translate-x-[-0.5px] hidden md:block"></div>
          
          {/* Experience blocks */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`mb-12 md:mb-0 relative md:flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-[-8px] md:left-auto md:top-6 md:left-1/2 md:transform md:translate-x-[-50%] h-4 w-4 rounded-full bg-data-blue z-10 hidden md:block"></div>
              
              {/* Date for mobile */}
              <div className="md:hidden mb-3 px-3 py-1 bg-data-blue/10 text-data-blue rounded-full text-sm inline-block">
                {exp.date}
              </div>
              
              {/* Content container */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="data-card h-full">
                  {/* Date for desktop */}
                  <div className="hidden md:block mb-2 px-3 py-1 bg-data-blue/10 text-data-blue rounded-full text-sm inline-block">
                    {exp.date}
                  </div>
                  
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
              
              {/* Empty div for timeline layout */}
              <div className="hidden md:block w-1/2"></div>
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
