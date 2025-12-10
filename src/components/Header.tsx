import { Button } from "@/components/ui/button";
import { Menu, Star, Headphones, CreditCard, User } from "lucide-react";
import logo from "@/assets/Pulseboard-02-02.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-gray-200 shadow-[0_4px_12px_rgba(0,88,165,0.15)]">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="PulseBoard" className="h-12 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="flex items-center gap-2 text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-sm tracking-[0.5px]">
              <Star className="w-4 h-4 text-[#0058A5]" />
              Features
            </a>
            <a href="#solutions" className="flex items-center gap-2 text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-sm tracking-[0.5px]">
              <Headphones className="w-4 h-4 text-[#0058A5]" />
              Solutions
            </a>
            <a href="#pricing" className="flex items-center gap-2 text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-sm tracking-[0.5px]">
              <CreditCard className="w-4 h-4 text-[#0058A5]" />
              Pricing
            </a>
            <a href="#signin" className="flex items-center gap-2 text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-sm tracking-[0.5px]">
              <User className="w-4 h-4 text-[#0058A5]" />
              SignIn
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="bg-[#0066FF] text-white hover:bg-[#0052CC] rounded-lg px-6 py-2 shadow-sm font-medium text-sm">
              Book Demo
            </Button>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
