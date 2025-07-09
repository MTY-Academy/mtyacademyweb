import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Palette, Users, Book, FlaskConical, Calculator, FileText, Download, Clock, Video, UserCheck } from "lucide-react";
import fall09PreCalSyllabus from "@assets/09Fall_Syllabus_1751584047190.pdf";
import spring09PreCalSyllabus from "@assets/09Spring_Syllabus_1751584047217.pdf";
import fall10CalculusSyllabus from "@assets/10Fall_Syllabus_1751584047217.pdf";
import spring10CalculusSyllabus from "@assets/10Spring_Syllabus_1751584047217.pdf";
import summer10CalculusSyllabus from "@assets/10Summer_Syllabus_1751584047218.pdf";
import amc8Syllabus from "@assets/AMC_8_Syllabus_1751584047218.pdf";
import amc10Syllabus from "@assets/AMC_10_Syllabus_1751584047218.pdf";

export default function Classes() {
  const syllabi = [
    { name: "Fall 09 PreCalculus", file: fall09PreCalSyllabus, description: "Introduction to trigonometry and advanced functions" },
    { name: "Spring 09 PreCalculus", file: spring09PreCalSyllabus, description: "Trigonometric equations and sequences" },
    { name: "Fall 10 Calculus", file: fall10CalculusSyllabus, description: "Introduction to calculus and derivatives" },
    { name: "Spring 10 Calculus", file: spring10CalculusSyllabus, description: "Integration and fundamental theorem" },
    { name: "Summer 10 Calculus", file: summer10CalculusSyllabus, description: "Advanced integration and series" },
    { name: "AMC 8 Preparation", file: amc8Syllabus, description: "Comprehensive AMC 8 contest preparation" },
    { name: "AMC 10 Problem Solving", file: amc10Syllabus, description: "Advanced AMC 10 preparation course" }
  ];



  return (
    <div className="py-20 bg-academy-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold academy-blue mb-4">Our Math Programs</h1>
          <p className="text-lg academy-gray max-w-3xl mx-auto">
            MTY Academy offers comprehensive math enrichment programs for grades 5-12. Our courses are meticulously designed 
            and compiled by Dr. Gu to inspire students' interests in mathematics and help them excel academically.
          </p>
        </div>
        
        {/* Regular Enrichment Classes */}
        <Card className="shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold academy-blue mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6" />
              Regular Enrichment Classes
            </h3>
            <p className="academy-gray mb-6">
              Structured math courses designed to build strong mathematical foundations with instructor-led classes and comprehensive curriculum.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-[var(--academy-blue)] pl-6">
                <h4 className="text-xl font-semibold academy-blue mb-2">Fall Semester</h4>
                <p className="academy-gray mb-3">August - December</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-academy-blue text-white">Grades 5-12</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-[var(--academy-blue)] pl-6">
                <h4 className="text-xl font-semibold academy-blue mb-2">Spring Semester</h4>
                <p className="academy-gray mb-3">January - May</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-academy-blue text-white">Grades 5-12</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-[var(--academy-blue)] pl-6">
                <h4 className="text-xl font-semibold academy-blue mb-2">Summer Programs</h4>
                <p className="academy-gray mb-3">June - July</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-academy-blue text-white">Grades 5-12</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>



        {/* AMC Competition Prep */}
        <Card className="shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold academy-blue mb-6 flex items-center">
              <Calculator className="mr-3 h-6 w-6" />
              AMC Competition Preparation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[var(--academy-orange)] pl-6">
                <h4 className="text-xl font-semibold academy-blue mb-2">AMC 8 Preparation</h4>
                <p className="academy-gray mb-3">Comprehensive preparation for American Mathematics Competition Grade 8</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-academy-blue text-white">Grade 8 & Below</Badge>
                  <Badge className="bg-academy-orange text-white">33 Lectures</Badge>
                </div>
                <p className="text-sm academy-gray">Contest scheduled for late January 2026</p>
              </div>
              
              <div className="border-l-4 border-[var(--academy-orange)] pl-6">
                <h4 className="text-xl font-semibold academy-blue mb-2">AMC 10 Problem Solving</h4>
                <p className="academy-gray mb-3">Advanced contest preparation for American Mathematics Competition Grade 10</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-academy-blue text-white">Grade 10 & Below</Badge>
                  <Badge className="bg-academy-orange text-white">20 Lectures</Badge>
                </div>
                <p className="text-sm academy-gray">Analysis of past 20 years of AMC 10 exams</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Syllabi */}
        <Card className="shadow-lg mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold academy-blue mb-6 flex items-center">
              <FileText className="mr-3 h-6 w-6" />
              Course Syllabi
            </h3>
            <p className="academy-gray mb-6">
              Download detailed syllabi for our courses to understand objectives, course outlines, and grading policies.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {syllabi.map((syllabus, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold academy-blue text-sm mb-2">{syllabus.name}</h4>
                    <p className="text-xs academy-gray mb-3">{syllabus.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(syllabus.file, '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View Syllabus
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Getting Started Section */}
        <Card className="shadow-lg p-8 mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold academy-blue mb-6 text-center">Getting Started</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold academy-blue mb-4">Find Your Right Level</h4>
              <p className="academy-gray mb-4">
                To determine which class you should start with, download our Placement Evaluation and email your completed work to Dr. Gu for assessment.
              </p>
              <div className="bg-academy-gray-light p-4 rounded-lg">
                <p className="text-sm academy-gray">
                  <strong>Email:</strong> wg04txstate@gmail.com<br />
                  <strong>Subject:</strong> EVALUATION
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold academy-blue mb-4">Resources Available</h4>
              <ul className="space-y-2 academy-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academy-orange rounded-full mr-3"></div>
                  Course Map - See overall course structure
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academy-orange rounded-full mr-3"></div>
                  Syllabi - Detailed information about each class
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academy-orange rounded-full mr-3"></div>
                  Placement Evaluation - Find your starting level
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-academy-orange rounded-full mr-3"></div>
                  Registration Tab - View current semester classes
                </li>
              </ul>
            </div>
          </div>
        </Card>
        
        {/* Contact Information */}
        <Card className="bg-academy-blue text-white p-8 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-lg mb-6">
              Contact Dr. Gu for more information about our programs or to discuss your specific needs.
            </p>
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-academy-orange rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-xl font-semibold">(512) 589-3349</span>
                </div>
                <p className="text-sm opacity-90">Dr. Gu - MTY Academy</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
