import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  Send, 
  MapPin,
  MessageSquare 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:Andrewsherif2013@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Andrewsherif2013@gmail.com',
      href: 'mailto:Andrewsherif2013@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Andrew Sherif',
      href: 'https://www.linkedin.com/in/andrew-sherif-a93781306/',
      color: 'text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'AndrewSherif0',
      href: 'https://github.com/AndrewSherif0',
      color: 'text-gray-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 1274589380',
      href: 'tel:+201274589380',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 section-separator">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Let's connect and build something amazing together!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="project-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond 
                within 24 hours and am always excited to discuss new opportunities.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="skill-card flex items-center gap-4 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg bg-secondary ${method.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {method.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div className="skill-card flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary text-purple-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">Egypt</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Ready to collaborate?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Whether it's a full-stack project, front-end development, or exploring AI integrations, 
                I'm here to help bring your ideas to life.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="mailto:Andrewsherif2013@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Start a conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;