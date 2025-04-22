
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Radar } from 'react-chartjs-2';

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
          className="mt-12 p-6 rounded-lg bg-data-lightGray border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-medium mb-4">Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium">Data Analysis with Tableau</h4>
              <p className="text-gray-500 text-sm">Coursera - April 2024</p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium">Excel skills for Data Analytics and Visualization</h4>
              <p className="text-gray-500 text-sm">Coursera - May 2024</p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium">Supervised Machine Learning: Regression and Classification</h4>
              <p className="text-gray-500 text-sm">Coursera - Aug 2024</p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium">C++ Basics: Selection and Iteration</h4>
              <p className="text-gray-500 text-sm">Coursera - Dec 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
