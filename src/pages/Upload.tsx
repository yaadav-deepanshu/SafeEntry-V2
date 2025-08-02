import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload as UploadIcon, Image, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = useCallback((file: File) => {
    if (file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select an image file",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select an image file first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to Flask backend
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock response - in real implementation, this would call your Flask API
      const mockPlates = ["ABC-1234", "XYZ-5678", "DEF-9012"];
      const randomPlate = mockPlates[Math.floor(Math.random() * mockPlates.length)];
      setResult(randomPlate);
      
      toast({
        title: "License plate detected!",
        description: `Found: ${randomPlate}`,
      });
    } catch (error) {
      toast({
        title: "Processing failed",
        description: "Unable to process the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upload Vehicle Image</h1>
          <p className="text-xl text-muted-foreground">
            Upload an image of a vehicle to detect and recognize the license plate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="card-gradient shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UploadIcon className="mr-2 h-5 w-5" />
                Image Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/25 hover:border-primary/50"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-w-full h-48 object-contain mx-auto rounded-lg shadow-medium"
                    />
                    <p className="text-sm text-muted-foreground">
                      {selectedFile?.name}
                    </p>
                    <Button variant="outline" onClick={resetUpload}>
                      Choose Different Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Image className="h-16 w-16 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium">Drop your image here</p>
                      <p className="text-muted-foreground">or click to browse</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileSelect(file);
                      }}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button asChild variant="outline">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Browse Files
                      </label>
                    </Button>
                  </div>
                )}
              </div>

              {selectedFile && (
                <div className="mt-6">
                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full shadow-glow"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <UploadIcon className="mr-2 h-5 w-5" />
                        Detect License Plate
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="card-gradient shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Detection Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="text-center space-y-6">
                  <div className="p-6 bg-success/10 border border-success/20 rounded-lg">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">License Plate Detected</h3>
                    <div className="text-4xl font-mono font-bold text-primary mb-4">
                      {result}
                    </div>
                    <p className="text-muted-foreground">
                      Email alert has been sent to security personnel
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Confidence</p>
                      <p className="text-success">98.5%</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Processing Time</p>
                      <p className="text-primary">2.3s</p>
                    </div>
                  </div>
                </div>
              ) : isLoading ? (
                <div className="text-center space-y-4">
                  <Loader2 className="h-12 w-12 text-primary mx-auto animate-spin" />
                  <h3 className="text-xl font-medium">Processing Image...</h3>
                  <p className="text-muted-foreground">
                    Using OpenCV and Tesseract OCR to detect license plate
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-4 text-muted-foreground">
                  <AlertCircle className="h-12 w-12 mx-auto" />
                  <h3 className="text-xl font-medium">No Results Yet</h3>
                  <p>Upload an image to begin license plate detection</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <Card className="mt-8 card-gradient shadow-medium border-0">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3">How it works:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <p className="font-medium">Image Processing</p>
                  <p className="text-muted-foreground">OpenCV analyzes the uploaded image</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <p className="font-medium">Text Recognition</p>
                  <p className="text-muted-foreground">Tesseract OCR extracts license plate text</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <p className="font-medium">Security Alert</p>
                  <p className="text-muted-foreground">Automated email notification sent</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;