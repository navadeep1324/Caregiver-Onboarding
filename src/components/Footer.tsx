import logo from "@/assets/Pulseboard-02-02.png";

const Footer = () => {
  return (
    <footer className="bg-[#fff]">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-[25%_20%_20%_35%] gap-x-4 gap-y-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div>
              <img src={logo} alt="PulseBoard" className="h-14 md:h-16 w-auto" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-[#003D82] text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-semibold text-[#003D82] text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Book Demo */}
          <div className="col-span-2 md:col-span-1 pt-4 md:pt-0">
            <button
              className="w-auto px-6 py-2.5 bg-[#10B2E6] hover:bg-[#0EA1D5] text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg button-item button-item-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#10B2E6] py-3">
        <div className="container px-4">
          <p className="text-center text-white text-sm">
            © 2025 PulseBoard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
