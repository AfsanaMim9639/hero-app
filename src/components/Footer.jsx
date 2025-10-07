import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 py-8">
      {/* Grid container for 4 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">HERO.IO</h2>
          <p className="text-gray-400">
            HERO.IO is a creative platform to explore apps, installation guides,
            and contribute to open-source projects. Stay connected with us!
          </p>
        </div>

        {/* Column 2: Quick Links */}
<div className="md:ml-4">
  <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
  <ul className="space-y-1">
    <li><a href="/" className="hover:text-white transition">Home</a></li>
    <li><a href="/apps" className="hover:text-white transition">Apps</a></li>
    <li><a href="/installation" className="hover:text-white transition">Installation</a></li>
    <li><a href="https://github.com/AfsanaMim9639" target="_blank" className="hover:text-white transition">GitHub</a></li>
  </ul>
</div>


        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="/docs" className="hover:text-white transition">Documentation</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/support" className="hover:text-white transition">Support</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://github.com/AfsanaMim9639" target="_blank" className="hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" className="hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com/your-facebook" target="_blank" className="hover:text-white transition">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} HERO.IO. All rights reserved.
      </div>
    </footer>
  );
}
