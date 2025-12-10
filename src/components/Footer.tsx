import logo from "@/assets/Pulseboard-02-02.png";

const Footer = () => {
  return (
    <footer className="bg-[#fff]">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[30%_15%_15%_15%_25%] gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <img src={logo} alt="PulseBoard" className="h-14 md:h-16 w-auto mb-3" />
              <p className="text-sm text-gray-600 leading-relaxed">
                AI-powered conversational platform <br></br>for modern businesses
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
          <div>
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

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-[#003D82] text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-[#10B2E6] transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Product Demos */}
          <div>
            <h3 className="font-semibold text-[#003D82] text-sm mb-4">Product Demos</h3>
            <button
              className="px-6 py-2.5 bg-[#10B2E6] hover:bg-[#0EA1D5] text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg button-item button-item-2"
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
