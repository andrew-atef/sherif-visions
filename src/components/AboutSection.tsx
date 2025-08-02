import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const keyAttributes = [
    'Problem-Solver',
    'Creative',
    'Adaptable',
    'Team Player',
    'AI Enthusiast',
    'Fast Learner'
  ];

  return (
    <section id="about" className="py-20 section-separator">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-left">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm Andrew Sherif Shokry, a passionate and problem-solving Computer Science graduate 
                  with a strong foundation in web development. My journey is focused on becoming a 
                  versatile <span className="text-primary font-medium">Full Stack Developer</span>, 
                  building complete, user-friendly web solutions.
                </p>
                
                <p>
                  I have solid expertise in front-end technologies like{' '}
                  <span className="text-primary font-medium">HTML, CSS, JavaScript, and React</span>, 
                  and I'm actively expanding my back-end knowledge with{' '}
                  <span className="text-primary font-medium">Node.js</span>. Beyond coding, my creative 
                  mindset extends to graphic design and video editing, which I leverage to bring a 
                  holistic approach to technical projects.
                </p>
                
                <p>
                  I'm a quick learner, adaptable, and organized, always eager to master new tools and 
                  frameworks. My skills in{' '}
                  <span className="text-primary font-medium">Prompt Engineering and AI tools</span>{' '}
                  further enhance my ability to innovate and boost productivity. I thrive in team 
                  environments and am dedicated to continuous growth in the tech landscape.
                </p>
              </div>
            </div>

            {/* Key Attributes */}
            <div className="animate-fade-in-right">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Attributes</h3>
              <div className="space-y-3">
                {keyAttributes.map((attribute, index) => (
                  <div 
                    key={attribute} 
                    className="flex items-center gap-3 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">
                      {attribute}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats or highlight */}
              <div className="mt-8 p-6 skill-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">Expected Graduation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;