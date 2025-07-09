import { Link } from "wouter";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-academy-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            
            <p className="text-gray-400">
              Dedicated to inspiring a lifelong passion for mathematics through comprehensive enrichment programs for grades 5-12.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/"><span className="hover:text-white transition-colors">Home</span></Link></li>
              <li><Link href="/classes"><span className="hover:text-white transition-colors">Programs</span></Link></li>
              <li><Link href="/registration"><span className="hover:text-white transition-colors">Registration</span></Link></li>
              <li><Link href="/teachers"><span className="hover:text-white transition-colors">Faculty</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Math Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">Regular Enrichment Classes</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Self-Paced Classes</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">AMC 8 Prep</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">AMC 10 Prep</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (512) 589-3349</li>
              <li>Email: wg04txstate@gmail.com</li>
              <li>Dr. Gu - MTY Academy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 MTY Academy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">Privacy Policy</span>
            <span className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
