import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Eye, Calendar, Filter, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data - in real implementation, this would come from your Flask API
  const mockEntries = [
    {
      id: 1,
      timestamp: "2024-08-02 14:30:25",
      plateNumber: "ABC-1234",
      imageUrl: "/placeholder.svg",
      emailStatus: "sent",
      confidence: "98.5%",
    },
    {
      id: 2,
      timestamp: "2024-08-02 13:15:42",
      plateNumber: "XYZ-5678",
      imageUrl: "/placeholder.svg", 
      emailStatus: "sent",
      confidence: "95.2%",
    },
    {
      id: 3,
      timestamp: "2024-08-02 12:45:18",
      plateNumber: "DEF-9012",
      imageUrl: "/placeholder.svg",
      emailStatus: "failed",
      confidence: "87.3%",
    },
    {
      id: 4,
      timestamp: "2024-08-02 11:22:56",
      plateNumber: "GHI-3456",
      imageUrl: "/placeholder.svg",
      emailStatus: "sent",
      confidence: "92.8%",
    },
    {
      id: 5,
      timestamp: "2024-08-02 10:18:33",
      plateNumber: "JKL-7890",
      imageUrl: "/placeholder.svg",
      emailStatus: "sent",
      confidence: "99.1%",
    },
  ];

  const filteredEntries = mockEntries.filter(entry => {
    const matchesSearch = entry.plateNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || entry.emailStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    // In real implementation, this would generate and download a CSV file
    console.log("Exporting data...");
  };

  const getStatusBadge = (status: string) => {
    if (status === "sent") {
      return (
        <Badge variant="default" className="bg-success text-success-foreground">
          <CheckCircle className="w-3 h-3 mr-1" />
          Sent
        </Badge>
      );
    } else {
      return (
        <Badge variant="destructive">
          <XCircle className="w-3 h-3 mr-1" />
          Failed
        </Badge>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Entry History</h1>
          <p className="text-xl text-muted-foreground">
            Track all vehicle entries and license plate detections
          </p>
        </div>

        {/* Filters and Actions */}
        <Card className="card-gradient shadow-medium border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters & Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by plate number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="all">All Status</option>
                <option value="sent">Email Sent</option>
                <option value="failed">Email Failed</option>
              </select>

              <Button onClick={handleExport} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Entries</p>
                  <p className="text-2xl font-bold">{mockEntries.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today</p>
                  <p className="text-2xl font-bold">{mockEntries.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold">80%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Confidence</p>
                  <p className="text-2xl font-bold">94.6%</p>
                </div>
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* History Table */}
        <Card className="card-gradient shadow-medium border-0">
          <CardHeader>
            <CardTitle>Recent Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Plate Number</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead>Email Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEntries.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-mono text-sm">
                        {entry.timestamp}
                      </TableCell>
                      <TableCell className="font-mono font-semibold text-primary">
                        {entry.plateNumber}
                      </TableCell>
                      <TableCell>
                        <img
                          src={entry.imageUrl}
                          alt="Vehicle"
                          className="w-16 h-12 object-cover rounded border"
                        />
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{entry.confidence}</Badge>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(entry.emailStatus)}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredEntries.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No entries match your search criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default History;