import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">SafeEntry</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI-powered vehicle license plate recognition system for secure office access control.
              Built with Python, Flask, OpenCV, and Tesseract OCR.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/yaadav-deepanshu/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/deepanshu-yadav-2000092ba/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:yaadav.deepanshu@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/upload" className="hover:text-primary transition-colors">Upload Image</a></li>
              <li><a href="/history" className="hover:text-primary transition-colors">View History</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Python & Flask</li>
              <li>OpenCV</li>
              <li>Tesseract OCR</li>
              <li>SMTP Alerts</li>
              <li>React & TypeScript</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SafeEntry. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Python and Flask
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;