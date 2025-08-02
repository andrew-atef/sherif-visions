import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Shield, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Violence Detection System',
      type: 'Graduation Project',
      description: 'A comprehensive system enabling administrators to view and filter real-time reports and alerts from AI cameras for violence detection, providing crucial insights for monitoring and security.',
      technologies: ['React.js', 'Node.js', 'AI Integration', 'Database Management'],
      githubUrl: 'https://github.com/AndrewSherif0/violence-detection-project-repo-link-placeholder',
      liveUrl: '', // Empty for now as mentioned
      icon: Shield,
      status: 'Completed',
      highlights: [
        'Real-time AI camera integration',
        'Admin dashboard with filtering',
        'Alert management system',
        'Security monitoring insights'
      ]
    },
    // Placeholder for future projects
    {
      title: 'Portfolio Website',
      type: 'Personal Project',
      description: 'A modern, responsive portfolio website showcasing skills and projects with a sleek dark theme and smooth animations.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      icon: Eye,
      status: 'In Progress',
      highlights: [
        'Modern dark theme design',
        'Fully responsive layout',
        'Smooth animations',
        'SEO optimized'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 section-separator">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing projects that demonstrate my skills in full-stack development, 
            AI integration, and creative problem-solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="project-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <IconComponent className="w-16 h-16 text-primary" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                    
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/AndrewSherif0" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;