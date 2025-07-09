import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import mtyLogo from "@assets/mty_top-removebg-preview_1751644676336.png";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/classes" },
    { name: "Registration", href: "/registration" },
    { name: "Faculty", href: "/teachers" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src={mtyLogo} 
              alt="MTY Academy" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className={`transition-colors font-medium ${
                  isActive(item.href) 
                    ? "academy-blue border-b-2 border-[var(--academy-blue)] pb-1" 
                    : "academy-gray hover:academy-blue"
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
            
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 academy-blue" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span 
                      className={`block py-2 px-3 rounded-md transition-colors ${
                        isActive(item.href) 
                          ? "academy-blue font-medium bg-academy-gray-light" 
                          : "academy-gray hover:academy-blue"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
