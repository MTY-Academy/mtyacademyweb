import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, FlaskConical, Pen, Code, Palette, Users, Lightbulb, Heart, Star } from "lucide-react";

export default function Teachers() {
  const faculty = [
    {
      name: "Dr. May Wang",
      subject: "Mathematics Instructor",
      bio: "Dr. May Wang has a PH.D degree in Mathematics and has over 20 years of experience in teaching mathematics and working with students at various levels.",
      education: "Ph.D. in Mathematics",
      achievement: "20+ years of teaching experience",
      icon: <GraduationCap className="h-4 w-4" />
    },
    {
      name: "Dr. Weizhen Gu",
      subject: "Founder of MTY Academy",
      bio: "Founder of MTY Academy and Math Professor of Texas State University (retired). Dr. Gu has designed all course materials and leads the academy's mathematical education philosophy.",
      education: "Math Professor, Texas State University (retired)",
      achievement: "Curriculum Designer & Academy Founder",
      icon: <GraduationCap className="h-4 w-4" />,
      contact: "(512) 589-3349",
      email: "wg04txstate@gmail.com"
    },
    {
      name: "Mrs. Joyce Cen",
      subject: "Mathematics Instructor",
      bio: "Mrs. Joyce Cen holds a bachelor degree from Zhejiang University and a Master degree from UT Southwestern Medical Center at Dallas. She is the mother of 3 children and has years of working experience in Academia, pharmaceutical industry and state agency. As the previous winner in the Chinese National Math Competition, she would love to share her passion for math with the community.",
      education: "Bachelor's from Zhejiang University, Master's from UT Southwestern Medical Center at Dallas",
      achievement: "Chinese National Math Competition Winner",
      icon: <Award className="h-4 w-4" />
    }
  ];

  return (
    <div className="py-20 bg-academy-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold academy-blue mb-4">Our Faculty</h1>
          <p className="text-lg academy-gray max-w-3xl mx-auto">
            Meet our dedicated team of mathematics educators who bring decades of experience and passion for mathematical excellence to help every student reach their full potential.
          </p>
        </div>
        
        {/* Faculty Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {faculty.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-academy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    {member.icon && <div className="text-white text-2xl">{member.icon}</div>}
                  </div>
                  <h3 className="text-2xl font-bold academy-blue mb-2">{member.name}</h3>
                  <p className="academy-orange font-semibold text-lg mb-4">{member.subject}</p>
                </div>
                
                <p className="academy-gray mb-6 leading-relaxed text-sm">{member.bio}</p>
                
                <div className="space-y-3 text-sm academy-gray mb-6">
                  <div className="flex items-center">
                    <GraduationCap className="mr-3 academy-blue h-5 w-5" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="mr-3 academy-blue h-5 w-5" />
                    <span>{member.achievement}</span>
                  </div>
                </div>
                
                {member.contact && member.email && (
                  <div className="bg-academy-gray-light p-4 rounded-lg">
                    <h4 className="font-semibold academy-blue mb-2">Contact Information</h4>
                    <div className="space-y-1 text-sm academy-gray">
                      <p><strong>Phone:</strong> {member.contact}</p>
                      <p><strong>Email:</strong> {member.email}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        

      </div>
    </div>
  );
}
