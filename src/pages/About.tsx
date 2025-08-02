import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Brain, 
  Mail, 
  Server, 
  Zap, 
  Shield, 
  Github, 
  ExternalLink,
  Code,
  Eye,
  Database
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const technologies = [
    {
      category: "Backend",
      items: [
        { name: "Python", description: "Core programming language" },
        { name: "Flask", description: "Web framework for API endpoints" },
        { name: "OpenCV", description: "Computer vision and image processing" },
        { name: "Tesseract OCR", description: "Optical character recognition engine" },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", description: "User interface library" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Vite", description: "Fast build tool and dev server" },
      ]
    },
    {
      category: "Infrastructure",
      items: [
        { name: "SMTP", description: "Email notification system" },
        { name: "REST API", description: "Communication between frontend and backend" },
        { name: "File Upload", description: "Image processing pipeline" },
        { name: "Real-time Processing", description: "Instant license plate detection" },
      ]
    }
  ];

  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Image Processing",
      description: "Advanced computer vision algorithms process uploaded vehicle images to identify license plate regions with high accuracy."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "OCR Recognition",
      description: "Tesseract OCR engine extracts text from detected license plate regions with confidence scoring and error handling."
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Automated Alerts",
      description: "Instant email notifications sent to security personnel when vehicles are detected at entry points."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Entry Logging",
      description: "Comprehensive database logging of all vehicle entries with timestamps, images, and detection results."
    }
  ];

  const workflow = [
    {
      step: 1,
      title: "Image Capture",
      description: "Vehicle image captured at security gate",
      icon: <Camera className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Image Processing",
      description: "OpenCV analyzes image for license plate detection",
      icon: <Eye className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Text Extraction",
      description: "Tesseract OCR extracts text from detected plates",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Security Alert",
      description: "Automated email sent to security team",
      icon: <Mail className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">SafeEntry</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SafeEntry is an advanced AI-powered vehicle license plate recognition system designed for 
            secure office access control. Built with cutting-edge computer vision technology, it provides 
            real-time vehicle identification and automated security alerts.
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How SafeEntry Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <Card key={index} className="card-gradient shadow-medium border-0 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-primary rounded-full text-primary-foreground mb-4 shadow-glow">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient shadow-medium border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-lg text-primary-foreground shadow-glow">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies Used</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-gradient shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {tech.category === "Backend" && <Server className="mr-2 h-5 w-5 text-primary" />}
                    {tech.category === "Frontend" && <Code className="mr-2 h-5 w-5 text-primary" />}
                    {tech.category === "Infrastructure" && <Zap className="mr-2 h-5 w-5 text-primary" />}
                    {tech.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-0.5">{item.name}</Badge>
                        <p className="text-sm text-muted-foreground flex-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <Card className="card-gradient shadow-large border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-primary rounded-full text-primary-foreground inline-flex mb-4 shadow-glow">
                    <Camera className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Input Layer</h3>
                  <p className="text-muted-foreground text-sm">
                    Vehicle images captured via web interface or security cameras
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-primary rounded-full text-primary-foreground inline-flex mb-4 shadow-glow">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Processing Layer</h3>
                  <p className="text-muted-foreground text-sm">
                    AI-powered analysis using OpenCV and Tesseract OCR
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-primary rounded-full text-primary-foreground inline-flex mb-4 shadow-glow">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Security Layer</h3>
                  <p className="text-muted-foreground text-sm">
                    Automated alerts and access control decisions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Info & Links */}
        <section>
          <Card className="card-gradient shadow-large border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Open Source Project</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                SafeEntry is built with modern technologies and follows best practices for security, 
                scalability, and maintainability. The project is open source and welcomes contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;