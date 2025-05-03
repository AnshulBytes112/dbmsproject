import { Link } from 'react-router-dom'
import { FiHeart, FiUser, FiUsers, FiHospital, FiArrowRight, FiCheck } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Button from '../components/common/Button'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              The Gift of Life Starts Here
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-white text-opacity-90"
            >
              Join our organ donation network to save lives. Register as a donor or recipient today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link to="/donor/register">
                <Button 
                  variant="accent" 
                  size="lg" 
                  icon={<FiHeart />}
                  className="w-full sm:w-auto"
                >
                  Become a Donor
                </Button>
              </Link>
              <Link to="/recipient/register">
                <Button 
                  variant="outline"
                  size="lg"
                  icon={<FiUser />}
                  className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary-600"
                >
                  Register as Recipient
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
            <path fill="#fff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,122.7C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How LifeLink Works</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our platform connects organ donors, recipients, and hospitals in a simple, secure process designed to save lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donor process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center p-8"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="text-2xl text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Donors</h3>
              <p className="text-neutral-600 mb-6">
                Register as a donor, complete your medical profile, and indicate which organs you wish to donate. Our system will handle matching you with recipients in need.
              </p>
              <Link to="/donor/register" className="text-primary-500 inline-flex items-center font-medium hover:text-primary-600">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            {/* Recipient process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center p-8"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUser className="text-2xl text-secondary-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Recipients</h3>
              <p className="text-neutral-600 mb-6">
                Register as a recipient, provide your medical history, and specify your organ needs. Our matching algorithm will connect you with compatible donors.
              </p>
              <Link to="/recipient/register" className="text-secondary-500 inline-flex items-center font-medium hover:text-secondary-600">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            {/* Hospital process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card text-center p-8"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHospital className="text-2xl text-accent-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Hospitals</h3>
              <p className="text-neutral-600 mb-6">
                Hospitals can register to access our donor-recipient matching system, coordinate organ transplants, and manage the entire donation process.
              </p>
              <Link to="/contact" className="text-accent-400 inline-flex items-center font-medium hover:text-accent-500">
                Partner With Us <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Every organ donation can save up to 8 lives. Join thousands of donors who have already made a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">2,500+</h3>
              <p className="text-neutral-600">Registered Donors</p>
            </div>
            
            <div className="card p-8 text-center">
              <h3 className="text-4xl font-bold text-secondary-500 mb-2">1,800+</h3>
              <p className="text-neutral-600">Registered Recipients</p>
            </div>
            
            <div className="card p-8 text-center">
              <h3 className="text-4xl font-bold text-accent-400 mb-2">500+</h3>
              <p className="text-neutral-600">Successful Matches</p>
            </div>
            
            <div className="card p-8 text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">120+</h3>
              <p className="text-neutral-600">Partner Hospitals</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Life-Changing Stories</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Hear from donors and recipients whose lives have been transformed through organ donation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-neutral-500">Kidney Recipient</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "After years on dialysis, I received a kidney through LifeLink's matching system. The process was smooth, and I was kept informed at every step. I'm now living a full life again thanks to my donor and this amazing platform."
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mr-4">
                  <span className="text-secondary-600 font-bold">MS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mary Smith</h4>
                  <p className="text-sm text-neutral-500">Liver Donor</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Donating part of my liver was one of the most rewarding experiences of my life. LifeLink made the entire process transparent and straightforward. Knowing I helped save someone's life is an incredible feeling."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8">
              Whether you want to donate, need an organ, or represent a hospital, join us today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
              
              <Link to="/education">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary-600"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LifeLink</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our platform offers a comprehensive solution for organ donation management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <FiCheck className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Advanced Matching</h3>
                  <p className="text-neutral-600">
                    Our algorithm considers multiple compatibility factors to find the best donor-recipient matches.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <FiCheck className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete Privacy</h3>
                  <p className="text-neutral-600">
                    Your medical information is protected with industry-leading security protocols.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <FiCheck className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hospital Integration</h3>
                  <p className="text-neutral-600">
                    Seamless coordination with medical facilities for efficient transplant processes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <FiCheck className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
                  <p className="text-neutral-600">
                    Stay informed with notifications and status updates throughout the process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <FiCheck className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Educational Resources</h3>
                  <p className="text-neutral-600">
                    Access to comprehensive information about organ donation and transplantation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <FiCheck className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Support Services</h3>
                  <p className="text-neutral-600">
                    Dedicated support team available to assist throughout your donation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home