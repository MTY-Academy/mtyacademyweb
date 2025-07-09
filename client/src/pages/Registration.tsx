import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, FileText, Users, Shield, Clock, CheckCircle, ExternalLink, Phone, Mail, BookOpen, Download } from "lucide-react";
import courseMapPdf from "@assets/course_map_1751583311315.pdf";
import fall05AlgebraEval from "@assets/05Fall_Evaluation_1751583749369.pdf";
import spring05AlgebraEval from "@assets/05Spring_Evaluation_1751583749400.pdf";
import fall06AlgebraEval from "@assets/06Fall_Evaluation_1751583749400.pdf";
import summer05PreAlgebraEval from "@assets/05Summer_Evaluation_1751583749400.pdf";
import spring06AlgebraEval from "@assets/06Spring_Evaluation_1751583749400.pdf";
import fall07AlgebraEval from "@assets/07Fall_Evaluation_1751583749400.pdf";
import spring09PreCalEval from "@assets/09Spring_Evaluation_1751583749400.pdf";
import fall09PreCalEval from "@assets/09Fall_Evaluation_1751583749401.pdf";
import spring08AlgebraEval from "@assets/08Spring_Evaluation_1751583749401.pdf";
import fall08AlgebraEval from "@assets/08Fall_Evaluation_1751583749401.pdf";
import spring07AlgebraEval from "@assets/07Spring_Evaluation_1751583749401.pdf";

export default function Registration() {
  const handleGoogleFormClick = () => {
    // This would link to the actual Google Forms URL
    window.open('https://forms.google.com/d/e/1FAIpQLSdExampleFormID/viewform', '_blank');
  };

  const evaluations = [
    { name: "05 Fall Algebra", file: fall05AlgebraEval, level: "Grade 5" },
    { name: "05 Spring Algebra", file: spring05AlgebraEval, level: "Grade 5" },
    { name: "05 Summer PreAlgebra", file: summer05PreAlgebraEval, level: "Grade 5" },
    { name: "06 Fall Algebra", file: fall06AlgebraEval, level: "Grade 6" },
    { name: "06 Spring Algebra", file: spring06AlgebraEval, level: "Grade 6" },
    { name: "07 Fall Algebra", file: fall07AlgebraEval, level: "Grade 7" },
    { name: "07 Spring Algebra", file: spring07AlgebraEval, level: "Grade 7" },
    { name: "08 Fall Algebra", file: fall08AlgebraEval, level: "Grade 8" },
    { name: "08 Spring Algebra", file: spring08AlgebraEval, level: "Grade 8" },
    { name: "09 Fall PreCal", file: fall09PreCalEval, level: "Grade 9" },
    { name: "09 Spring PreCal", file: spring09PreCalEval, level: "Grade 9" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold academy-blue mb-4">Registration</h1>
          <p className="text-lg academy-gray max-w-3xl mx-auto">
            Join MTY Academy and start your mathematical journey with us. Registration is required for all students.
          </p>
          <p className="text-sm academy-gray mt-4 italic">
            This page last updated on Nov. 4, 2024
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Course Map PDF */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold academy-blue mb-6 flex items-center">
                <BookOpen className="mr-3 h-6 w-6" />
                Course Map
              </h3>
              <p className="academy-gray mb-6">
                View our comprehensive course map to understand the progression of our mathematics programs from grades 5-12.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <iframe
                  src={courseMapPdf}
                  width="100%"
                  height="600"
                  title="MTY Academy Course Map"
                  className="rounded border"
                />
              </div>
            </CardContent>
          </Card>

          {/* Placement Evaluations */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold academy-blue mb-6 flex items-center">
                <FileText className="mr-3 h-6 w-6" />
                Placement Evaluations
              </h3>
              <p className="academy-gray mb-6">
                Review these placement evaluation samples to understand the academic level and expectations for each grade. Contact Dr. Gu for personalized placement assessment.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {evaluations.map((evaluation, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold academy-blue text-sm">{evaluation.name}</h4>
                        <span className="text-xs bg-academy-gray-light academy-gray px-2 py-1 rounded">
                          {evaluation.level}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => window.open(evaluation.file, '_blank')}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        View Evaluation
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Information */}
            <Card className="bg-academy-gray-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold academy-blue mb-6">Registration Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="academy-orange text-xl mr-4 mt-1 h-6 w-6" />
                    <div>
                      <h4 className="font-semibold academy-blue mb-2">Registration Required</h4>
                      <p className="academy-gray">
                        Every student needs to register for the class he/she would take at MTY Academy. If you attended MTY Academy Math class in Fall 2024, you should register for a class in Spring 2025 at the same level.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="academy-orange text-xl mr-4 mt-1 h-6 w-6" />
                    <div>
                      <h4 className="font-semibold academy-blue mb-2">Class Continuity</h4>
                      <p className="academy-gray">
                        For example, if you took Fall 2024: 06-Algebra, you should register for the Spring 2025 06-Algebra class. By clicking the "register" link on the row showing the class, you will be redirected to the Google classroom for registration.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="academy-orange text-xl mr-4 mt-1 h-6 w-6" />
                    <div>
                      <h4 className="font-semibold academy-blue mb-2">Fees and Payments</h4>
                      <p className="academy-gray">
                        Fees for each class are listed in the class description page. A full payment is expected upon approval of registration. An incomplete registration is subject to be revoked at the discretion of MTY Academy. Registration is not complete until the requested payment is received and processed by MTY Academy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="academy-orange text-xl mr-4 mt-1 h-6 w-6" />
                    <div>
                      <h4 className="font-semibold academy-blue mb-2">Payment Instructions</h4>
                      <p className="academy-gray">
                        To make your payment, please follow the payment instruction posted in the classwork section of a Google classroom and then submit a copy of the payment in the classroom for an online record.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Registration Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold academy-blue mb-6">Registration Process</h3>
                
                <div className="space-y-6">
                  <p className="academy-gray">
                    After joining the Google classroom, you need to fill out the registration form and submit it in the Google classroom.
                  </p>
                  
                  <Card className="bg-academy-gray-light">
                    <CardContent className="p-6">
                      <h4 className="font-semibold academy-blue mb-4">Registration Steps:</h4>
                      <ol className="list-decimal list-inside space-y-2 academy-gray">
                        <li>Find your appropriate class level from the course map</li>
                        <li>Click the "register" link for your desired class</li>
                        <li>Join the Google classroom for that class</li>
                        <li>Complete the registration form in the classroom</li>
                        <li>Submit the form and wait for approval</li>
                        <li>Follow payment instructions in the classwork section</li>
                        <li>Submit payment confirmation to complete registration</li>
                      </ol>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
                      <p className="text-yellow-700 text-sm">
                        For placement evaluation and academic guidance, please contact Dr. Gu directly at (512) 589-3349 or wg04txstate@gmail.com before registering.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-center space-x-6 text-center">
                      <div>
                        <Shield className="academy-orange text-2xl mb-2 h-8 w-8 mx-auto" />
                        <p className="text-sm academy-gray">Secure Process</p>
                      </div>
                      <div>
                        <Users className="academy-orange text-2xl mb-2 h-8 w-8 mx-auto" />
                        <p className="text-sm academy-gray">Google Classroom</p>
                      </div>
                      <div>
                        <CheckCircle className="academy-orange text-2xl mb-2 h-8 w-8 mx-auto" />
                        <p className="text-sm academy-gray">Easy Registration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Self-Paced Classes Registration */}
          <Card className="shadow-lg mt-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold academy-blue mb-6 flex items-center">
                <Clock className="mr-3 h-6 w-6" />
                Self-Paced Classes Registration
              </h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold academy-blue mb-4">What is a Self-Paced Class?</h4>
                <p className="academy-gray mb-4">
                  A self-paced class is a class with a single student and no instructor running it. Before registering a self-paced class, its pros and cons must be carefully evaluated.
                </p>
                <p className="academy-gray mb-6">
                  To facilitate the variety needs in taking a self-paced class, we provide the materials and services in terms of Packages.
                </p>
              </div>

              <h4 className="text-xl font-semibold academy-blue mb-6">Packages and Fees</h4>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-academy-blue border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold academy-blue">Base Package</h5>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Required</span>
                    </div>
                    <div className="text-2xl font-bold academy-blue mb-4">$80</div>
                    <ul className="space-y-2 text-sm academy-gray">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Lecture notes with homework assignments
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Answer keys for all materials
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Quiz sets with solutions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Review materials and answer keys
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Final exam
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold academy-blue">Video Package</h5>
                    </div>
                    <div className="text-2xl font-bold academy-blue mb-4">$90</div>
                    <ul className="space-y-2 text-sm academy-gray">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Class recordings conducted by Dr. Gu
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Access to all video lectures
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Self-paced learning support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold academy-blue">Tutoring Package</h5>
                    </div>
                    <div className="text-2xl font-bold academy-blue mb-4">$240</div>
                    <ul className="space-y-2 text-sm academy-gray">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        4 one-hour tutoring sessions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Qualified MTY Academy tutor
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Personalized assistance
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-academy-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        Flexible scheduling
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h5 className="font-semibold text-yellow-800 mb-3">Important Notes:</h5>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Registration for a self-paced class is treated as a request for joining a Google classroom. MTY Academy makes no guarantee on fulfilling requests.</li>
                  <li>• Students are required to read each lesson, complete homework assignments and quizzes, and check their work against provided keys.</li>
                  <li>• After completing all lessons, students must take the final exam and submit it for grading.</li>
                  <li>• The class is complete when the final is graded or failed to submit after 6 months from registration date.</li>
                  <li>• A 4-tutoring session consists of 4 one-hour tutoring sessions with a qualified MTY Academy tutor.</li>
                </ul>
              </div>

              <div className="text-center">
                <Button className="bg-academy-blue hover:bg-blue-800 text-white px-8 py-3">
                  Register for Self-Paced Class
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="bg-academy-blue text-white p-8 mt-12">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help with Registration?</h3>
              <p className="text-lg mb-6">
                Contact Dr. Gu for placement evaluations, academic guidance, and assistance with the registration process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  className="bg-white text-[var(--academy-blue)] hover:bg-gray-100 px-6 py-3 font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Dr. Gu: (512) 589-3349
                </Button>
                <Button 
                  className="bg-academy-orange hover:bg-orange-600 text-white px-6 py-3 font-semibold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  wg04txstate@gmail.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
