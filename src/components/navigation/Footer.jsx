import { Link } from 'react-router-dom'
import { FiHeart, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FiHeart className="mr-2 text-accent-300" />
              LifeLink
            </h3>
            <p className="text-neutral-300 mb-4">
              Connecting donors with recipients to save lives through organ donation.
              Our mission is to make the donation process transparent, efficient, and accessible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donor/register" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Become a Donor
                </Link>
              </li>
              <li>
                <Link to="/recipient/register" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Register as Recipient
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Learn About Donation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/education#faq" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/education#process" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Donation Process
                </Link>
              </li>
              <li>
                <Link to="/education#myths" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Common Myths
                </Link>
              </li>
              <li>
                <Link to="/education#statistics" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Statistics
                </Link>
              </li>
              <li>
                <Link to="/education#resources" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Additional Resources
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FiMapPin className="mr-2 mt-1 text-primary-400" />
                <span className="text-neutral-300">
                  123 Medical Center Dr.<br />
                  Suite 200<br />
                  San Francisco, CA 94143
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-primary-400" />
                <a href="tel:+18005551234" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  1-800-555-1234
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-primary-400" />
                <a href="mailto:info@lifelink-donation.org" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  info@lifelink-donation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-neutral-400">
          <p>© {currentYear} LifeLink Organ Donation. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="hover:text-primary-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer