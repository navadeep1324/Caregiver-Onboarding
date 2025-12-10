import { useState } from "react";
import { Phone } from "lucide-react";
import contactBg from "@/assets/contact-bg.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      id="contact"
      style={{
        backgroundColor: '#D4F5F5',
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative waves */}
      {/* <div className="absolute inset-0 opacity-20">
        <svg className="absolute left-0 bottom-0 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#10B2E6" 
            d="M45.7,-77.6C58.9,-69.3,69.4,-56.8,76.8,-42.4C84.2,-28,88.5,-11.7,88.3,4.7C88.1,21.1,83.4,37.6,74.8,51.2C66.2,64.8,53.7,75.5,39.4,81.3C25.1,87.1,9,88,3.4,82.1C-2.2,76.2,-4.4,63.5,-14.3,55.8C-24.2,48.1,-41.8,45.4,-54.8,37.4C-67.8,29.4,-76.2,16.1,-79.1,1.4C-82,-13.3,-79.4,-29.4,-71.3,-42.2C-63.2,-55,-49.6,-64.5,-35.4,-72.4C-21.2,-80.3,-6.4,-86.6,7.2,-97.3C20.8,-108,32.5,-85.9,45.7,-77.6Z" 
            transform="translate(100 100)" 
          />
        </svg>
        <svg className="absolute right-0 top-0 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#7FFFD4" 
            d="M41.7,-71.3C54.9,-63.2,67.4,-53.6,74.8,-40.4C82.2,-27.2,84.5,-10.4,83.3,5.9C82.1,22.2,77.4,38,68.4,50.8C59.4,63.6,46.1,73.4,31.4,78.8C16.7,84.2,0.6,85.2,-15.3,82.4C-31.2,79.6,-46.9,73,-59.4,62.4C-71.9,51.8,-81.2,37.2,-84.8,21.4C-88.4,5.6,-86.3,-11.4,-78.9,-25.2C-71.5,-39,-58.8,-49.6,-44.8,-57.4C-30.8,-65.2,-15.4,-70.2,-0.2,-69.9C15,-69.6,28.5,-79.4,41.7,-71.3Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div> */}

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003D82]">
              Get in <span className="text-[#10B2E6]">Touch</span>
            </h2>
            <p className="text-base md:text-lg text-gray-800">
              Talk to us to see how real-time visibility can transform your business.

            </p>
            <p className="text-base md:text-lg text-gray-800">
              Schedule a demo now!
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#0058A5]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F2F2F7] border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#0058A5]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F2F2F7] border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50"
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-[#0058A5]">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 bg-[#F2F2F7] border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50"
                    />
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10B2E6]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-[#0058A5]">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F2F2F7] border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50"
                  />
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-[#0058A5]">
                    Schedule Demo Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F2F2F7] border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-[#0058A5]">
                    Schedule Demo Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F2F2F7] border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#0058A5]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F2F2F7] border-0 rounded-lg text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#10B2E6]/50"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-12 py-3 bg-[#10B2E6] hover:bg-[#0EA1D5] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl button-item button-cf"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
