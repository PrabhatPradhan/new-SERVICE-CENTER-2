import {
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaLinkedinIn,
  FaBehance,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c3f] text-white px-6 mt-8 py-12 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Contact */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="https://newtackserviceplatform.com/public/front/images/flogo.webp"
              alt="Fixhero Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <a href="tel:+6390137479" className="block">
              <div className="hover:bg-orange-500 bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative cursor-pointer">
                <FaPhoneAlt className="text-xl mt-1 text-white" />
                <div>
                  <p className="font-bold text-lg text-white truncate w-[180px]">
                    6390137479
                  </p>
                </div>
              </div>
            </a>

            <a href="mailto:info@newtackserviceplatform.com" className="block">
              <div className="hover:bg-orange-500 bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative cursor-pointer">
                <FaEnvelope className="text-xl mt-1 text-white" />
                <div>
                  <p className="font-bold text-white truncate w-[180px]">
                    info@newtackservice.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps?q=2972+Westheimer+96+Rd"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="hover:bg-orange-500 bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative cursor-pointer">
                <FaMapMarkerAlt className="text-xl mt-1 text-white" />
                <div>
                  <p className="font-bold text-lg text-white truncate w-[180px]">
                    2972 Westheimer 96 Rd.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
              { icon: <FaTimes />, href: "https://x.com/" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
              { icon: <FaBehance />, href: "https://behance.net" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:shadow-2xl hover:bg-orange-500 hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* About Company */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">
            About Company
          </h3>
          <ul className="space-y-2 text-gray-300">
            {[
              ["About", "/about"],
              ["Company History", "/company-history"],
              ["Our Team", "/our-team"],
              ["Our Projects", "/our-projects"],
              ["Work Process", "/work-process"],
              ["Pricing Plan", "/pricing-plan"],
            ].map(([label, path], idx) => (
              <li key={idx}>
                <Link
                  href={path}
                  className="hover:text-white transition truncate block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Information */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">
            Useful Information
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition truncate block"
              >
                Contact Us
              </Link>
            </li>
            <li className="truncate">Our Team</li>
            <li className="truncate">Cost Calculator</li>
            <li className="truncate">Testimonials</li>
            <li className="truncate">Pricing Plan</li>
            <li>
              <Link
                href="/faq"
                className="hover:text-white transition truncate block"
              >
                Faq
              </Link>
            </li>
            <li>
              <Link
                href="/privacyPolicyPage"
                className="hover:text-white transition truncate block"
              >
                PrivacyPolicy
              </Link>
            </li>
          </ul>
        </div>

        {/* Additional Links */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">
            Additional Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/home-appliance-service-kolkata">
                <button className="w-full px-2 py-2 bg-blue-950 hover:bg-orange-500 text-white rounded-md text-base hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative cursor-pointer truncate">
                  <span className="font-semibold truncate block">
                    Home appliance service Kolkata
                  </span>
                </button>
              </Link>
            </li>
            <li className="truncate">Latest News</li>
            <li className="truncate">Our Services</li>
            <li className="truncate">General Repairs</li>
            <li className="truncate">Our Projects</li>
            <li className="truncate">Work Process</li>
            <li className="truncate">Service Area</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-gray-400 text-sm mt-8 text-center md:text-left md:flex md:justify-between">
        <p>© 2025 . Designed By webidea.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <span>Sitemap</span>
          <span>•</span>
          <span>
            <Link
              href="/privacyPolicyPage"
              className="hover:text-white transition"
            >
              PrivacyPolicy
            </Link>
          </span>
          <span>•</span>
          <span>Terms of use</span>
        </div>
      </div>
    </footer>
  );
}
