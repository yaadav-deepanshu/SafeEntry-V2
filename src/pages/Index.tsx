import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Camera, Zap, Lock, Upload, History, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-security-gate.jpg";

const Index = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "AI-Powered Detection",
      description: "Advanced OpenCV and Tesseract OCR technology for accurate license plate recognition"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Processing",
      description: "Instant vehicle identification and automated security alerts"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Access Control",
      description: "Automated gate control with comprehensive logging and monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Secure Vehicle Access with{" "}
                  <span className="text-primary-glow">Real-Time</span>{" "}
                  License Plate Recognition
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  AI-powered system that ensures smarter, safer entries with advanced 
                  computer vision and automated security protocols.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                    <Link to="/upload">
                      <Upload className="mr-2 h-5 w-5" />
                      Try Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Link to="/about">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Security gate with AI scanning" 
                  className="rounded-2xl shadow-large animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Advanced Security Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience next-generation access control with our comprehensive AI-driven solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient shadow-medium hover:shadow-large transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 bg-primary rounded-2xl text-primary-foreground mb-6 shadow-glow">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-gradient shadow-large border-0">
            <CardContent className="p-12 text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Facility?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start using SafeEntry today and experience the future of automated vehicle access control
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-glow">
                  <Link to="/upload">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Vehicle Image
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/history">
                    <History className="mr-2 h-5 w-5" />
                    View History
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
