function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              we are team filled with sigma guys called each other bhau ( khushi bhau, kirti bhau( birthday girl),  aditya bhau ), so buy our product now... 
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                 about us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                 buy now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>pune,maharashra,India</p>
            <p>412216</p>
            <p>Email: dev@teamSigma.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <p className="text-center text-xs pt-8">
          © 2025 TeamSigma. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;