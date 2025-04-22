
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Card, CardContent } from '@/components/ui/card';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

// Skill groups
const skillGroups = [
  {
    id: 1,
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'C++', 'Java', 'C', 'R']
  },
  {
    id: 2,
    title: 'Data Analysis & Visualization',
    skills: ['Pandas', 'NumPy', 'Tableau', 'Excel', 'Data Preprocessing', 'Statistical Analysis']
  },
  {
    id: 3,
    title: 'Tools & Platforms',
    skills: ['MySQL', 'Hadoop', 'Git', 'Jupyter Notebook', 'VS Code']
  },
  {
    id: 4,
    title: 'Soft Skills',
    skills: ['Team Player', 'Time Management', 'Adaptability', 'Problem Solving', 'Communication', 'Critical Thinking']
  }
];

// Radar chart data
const radarData = {
  labels: ['Python', 'SQL', 'Pandas/NumPy', 'Tableau', 'Excel', 'Statistics'],
  datasets: [
    {
      label: 'Skill Proficiency',
      data: [90, 85, 88, 80, 85, 75],
      backgroundColor: 'rgba(51, 195, 240, 0.2)',
      borderColor: 'rgba(51, 195, 240, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(51, 195, 240, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(51, 195, 240, 1)'
    }
  ]
};

// Radar chart options
const radarOptions = {
  scales: {
    r: {
      angleLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
      },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        stepSize: 20,
        backdropColor: 'transparent'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  maintainAspectRatio: false
};

// Certificate data - reordered as requested
const certificates = [
  {
    id: 1,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Dec 3, 2024",
    image: "/lovable-uploads/0b556142-b9d1-4989-a6dd-70c027272bb7.png",
    verifyLink: "https://coursera.org/verify/ZPRT0LCM4WX4"
  },
  {
    id: 2,
    title: "Excel Skills for Business Specialization",
    issuer: "Macquarie University",
    date: "May 2, 2024",
    image: "/lovable-uploads/4bb8515d-6545-468b-a67d-343b7aa877ba.png",
    verifyLink: "https://coursera.org/verify/specialization/66ZSVQSSSZ8Q"
  },
  {
    id: 3,
    title: "Programming in C++: A Hands-on Introduction",
    issuer: "Codio",
    date: "May 13, 2024",
    image: "/lovable-uploads/d1996e82-09a4-43ea-9dc3-dcddd12e5175.png",
    verifyLink: "https://coursera.org/verify/specialization/GVY2649JX7RN"
  },
  {
    id: 4, 
    title: "Data Analysis with Tableau",
    issuer: "Tableau Learning Partner",
    date: "Nov 19, 2024",
    image: "/lovable-uploads/ec8cd860-5b4e-4ebc-8248-a84350888382.png",
    verifyLink: "https://coursera.org/verify/I5T228DBDTWO"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <motion.div
            className="data-card h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium mb-6">Technical Proficiency</h3>
            <div className="h-80">
              <Radar data={radarData} options={radarOptions} />
            </div>
            <div className="mt-6 text-center text-gray-600">
              <p>Based on projects, coursework, and self-assessment</p>
            </div>
          </motion.div>

          <div className="space-y-6">
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
                    <a 
                      href={cert.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-data-blue hover:underline text-sm inline-block"
                    >
                      Verify Certificate
                    </a>
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
