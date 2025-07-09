import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Book, Trophy, Lightbulb, Heart, Star } from "lucide-react";
import mtyLogo from "@assets/mty_top-removebg-preview_1751644676336.png";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 bg-academy-blue bg-opacity-70" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="mb-8">
            <img 
              src={mtyLogo} 
              alt="MTY Academy" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Excellence in <span className="text-green-400">Mathematics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Inspiring a lifelong passion for mathematics through comprehensive enrichment programs for grades 5-12
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/classes">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-transform">
                Explore Classes
              </Button>
            </Link>
            <Link href="/registration">
              <Button variant="outline" className="h-10 border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors bg-[#17a34a]">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-academy-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold academy-blue mb-8">About MTY Academy</h2>
            <p className="text-lg academy-gray mb-12 leading-relaxed">
              At MTY Academy, we are dedicated to inspiring a lifelong passion for mathematics in our students. 
              Through our comprehensive enrichment programs, we strive to create a supportive and engaging learning environment 
              where students from 5th grade to high school can build a strong mathematical foundation. Our goal is to help students 
              excel academically, develop critical thinking skills, and foster a love for the subject.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-academy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold academy-blue mb-2">Expert Math Instruction</h3>
                <p className="academy-gray">Meticulously designed course materials by Dr. Gu to build strong mathematical foundations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-academy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold academy-blue mb-2">Flexible Learning Options</h3>
                <p className="academy-gray">Regular enrichment classes, self-paced options, and AMC contest preparation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-academy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold academy-blue mb-2">Proven Results</h3>
                <p className="academy-gray">Helping students build confidence and excel in mathematics from grades 5-12</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold academy-blue mb-4">Our Math Programs</h2>
            <p className="text-lg academy-gray max-w-2xl mx-auto">
              Discover our comprehensive math enrichment programs designed to inspire and challenge students from grades 5-12
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Regular Classes */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="Regular math classes" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold academy-blue mb-2">Regular Enrichment Classes</h3>
                <p className="academy-gray mb-4">Structured math programs for grades 5-12 during Fall, Spring, and Summer semesters</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm academy-gray">Grades 5-12</span>
                  <Link href="/classes">
                    <Button variant="link" className="academy-orange hover:text-orange-600 font-medium p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Self-Paced Classes */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="Self-paced learning" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold academy-blue mb-2">Self-Paced Classes</h3>
                <p className="academy-gray mb-4">Flexible learning option for students who need personalized scheduling and pace</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm academy-gray">All Grades</span>
                  <Link href="/classes">
                    <Button variant="link" className="academy-orange hover:text-orange-600 font-medium p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* AMC Contest Prep */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="AMC contest preparation" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold academy-blue mb-2">AMC Contest Prep</h3>
                <p className="academy-gray mb-4">Specialized preparation for AMC 8 and AMC 10 mathematics competitions</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm academy-gray">Grade 8 & 10</span>
                  <Link href="/classes">
                    <Button variant="link" className="academy-orange hover:text-orange-600 font-medium p-0">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/classes">
              <Button className="bg-academy-blue hover:bg-blue-800 text-white px-8 py-3">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
