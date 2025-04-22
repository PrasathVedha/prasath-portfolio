import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Card, CardContent } from '@/components/ui/card';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

const skillGroups = [
  {
    id: 1,
    title: 'Languages',
    skills: ['C++', 'Python']
  },
  {
    id: 2,
    title: 'Frameworks',
    skills: ['HTML', 'CSS']
  },
  {
    id: 3,
    title: 'Tools & Databases',
    skills: ['MySQL', 'Oracle SQL']
  },
  {
    id: 4,
    title: 'Cloud Platforms',
    skills: ['Google Cloud', 'Azure', 'AWS']
  },
  {
    id: 5,
    title: 'Soft Skills',
    skills: ['Multi-Tasking', 'Problem-Solving Skills']
  }
];

const certificates = [
  {
    id: 1,
    title: "Cyber Security and Privacy",
    issuer: "NPTEL",
    date: "October 2024",
    image: "/lovable-uploads/0b556142-b9d1-4989-a6dd-70c027272bb7.png"
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    issuer: "Geek for Geek",
    date: "June 2024",
    image: "/lovable-uploads/4bb8515d-6545-468b-a67d-343b7aa877ba.png"
  },
  {
    id: 3,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "February 2024",
    image: "/lovable-uploads/d1996e82-09a4-43ea-9dc3-dcddd12e5175.png"
  },
  {
    id: 4,
    title: "GenAI for Everyone",
    issuer: "Coursera",
    date: "February 2024",
    image: "/lovable-uploads/ec8cd860-5b4e-4ebc-8248-a84350888382.png"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="section-subtitle">
            My technical toolkit and expertise
          </div>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.id}
                className="data-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + groupIndex * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-4">{group.title}</h3>
                <div className="flex flex-wrap">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-medium mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg mb-2">{cert.title}</h4>
                    <p className="text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
