import { 
  Code2, 
  Globe, 
  GitBranch, 
  Palette, 
  Lightbulb, 
  Bot,
  Users,
  MessageSquare,
  Cpu,
  Database
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Front-End Development',
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'],
      color: 'text-blue-500'
    },
    {
      title: 'Back-End (Learning)',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'APIs', 'Database Fundamentals'],
      color: 'text-green-500'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Collaborative Development'],
      color: 'text-orange-500'
    },
    {
      title: 'Creative Tools',
      icon: Palette,
      skills: ['Adobe Photoshop', 'Canva', 'Adobe Premiere Pro', 'Capcut'],
      color: 'text-purple-500'
    },
    {
      title: 'Problem Solving',
      icon: Lightbulb,
      skills: ['Analytical Thinking', 'Debugging', 'Algorithm Design'],
      color: 'text-yellow-500'
    },
    {
      title: 'AI & Prompt Engineering',
      icon: Bot,
      skills: ['AI Tool Integration', 'Prompt Crafting', 'Productivity Enhancement'],
      color: 'text-cyan-500'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Fast Learner', 'Team Player', 'Adaptable', 'Organized'],
      color: 'text-pink-500'
    },
    {
      title: 'Communication',
      icon: MessageSquare,
      skills: ['Technical Writing', 'Presentation', 'Collaboration'],
      color: 'text-indigo-500'
    }
  ];

  return (
    <section id="skills" className="py-20 section-separator">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning front-end development, creative design, 
            and modern AI tools to deliver innovative solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="skill-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Technologies */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
              'Node.js', 'Git', 'Photoshop', 'Premiere Pro', 'AI Tools'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;