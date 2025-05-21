import Image from "next/image";
import { FaFigma, FaSketch, FaGithub, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { RiUserSettingsLine, RiSearchLine, RiCodeLine, RiLayout2Line } from "react-icons/ri";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-5 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-gray-600 transition-colors">Work</a>
          <a href="#process" className="hover:text-gray-600 transition-colors">Process</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>
        <MobileMenu />
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            UI/UX Designer Creating Meaningful Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Transforming complex problems into intuitive digital solutions that users love.
          </p>
          <div className="pt-4">
            <a href="#portfolio" className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-colors">
              View My Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative h-[400px] w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src="/next.svg" 
              alt="Design showcase" 
              width={300} 
              height={200} 
              className="dark:invert"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/30 rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto">
              <Image 
                src="/My self.png" 
                alt="UI/UX Designer" 
                width={256} 
                height={256} 
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate UI/UX designer with over 5 years of experience creating user-centered designs for web and mobile applications. My approach combines aesthetics with functionality to deliver intuitive and engaging user experiences.
            </p>
            <h3 className="text-xl font-semibold">Tools I Use</h3>
            <div className="flex space-x-6 text-gray-700 dark:text-gray-300">
              <div className="flex flex-col items-center">
                <FaFigma className="text-3xl" />
                <span className="mt-2">Figma</span>
              </div>
              <div className="flex flex-col items-center">
                <SiAdobexd className="text-3xl" />
                <span className="mt-2">Adobe XD</span>
              </div>
              <div className="flex flex-col items-center">
                <FaSketch className="text-3xl" />
                <span className="mt-2">Sketch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <RiLayout2Line className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-3">UI Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating beautiful, intuitive interfaces that align with brand identity and user expectations.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <RiUserSettingsLine className="text-4xl mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-3">UX Research</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Conducting user research to understand behavior, needs, and motivations to inform design decisions.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <RiSearchLine className="text-4xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-3">Prototyping</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building interactive prototypes to test and validate concepts before development.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <RiCodeLine className="text-4xl mb-4 text-orange-500" />
            <h3 className="text-xl font-semibold mb-3">Design Systems</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating scalable design systems with reusable components to ensure consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/30 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-16">My Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 bg-gray-200 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Redesign</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A complete redesign of an e-commerce platform focused on improving conversion rates.
              </p>
              <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 bg-gray-200 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Finance App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A mobile banking application designed to simplify personal finance management.
              </p>
              <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 bg-gray-200 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Travel Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A travel booking platform with a focus on unique experiences and destination discovery.
              </p>
              <a href="#" className="text-blue-500 hover:underline font-medium flex items-center">
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Client Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden mr-4">
                <div className="flex items-center justify-center h-full text-gray-500">
                  <span>AB</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Alex Brown</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">CEO, TechStart</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "The UI/UX design transformed our application completely. User engagement increased by 40% within the first month of launch."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden mr-4">
                <div className="flex items-center justify-center h-full text-gray-500">
                  <span>SJ</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Product Manager, FinTech</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Working with this designer was a fantastic experience. They took our complex financial data and turned it into an intuitive interface."
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden mr-4">
                <div className="flex items-center justify-center h-full text-gray-500">
                  <span>MT</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Michael Thomas</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Founder, TravelPal</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "The research-driven approach to UX design helped us understand our users better. The final design exceeded our expectations."
            </p>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/30 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-16">My Design Process</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-500 font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-2">Discover</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Research and understand the problem, users, and business goals.
            </p>
          </div>
          
          {/* Connector */}
          <div className="hidden md:block w-24 h-0.5 bg-gray-300 dark:bg-gray-700 mt-8"></div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-purple-500 font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-2">Define</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Define user personas, journey maps, and project requirements.
            </p>
          </div>
          
          {/* Connector */}
          <div className="hidden md:block w-24 h-0.5 bg-gray-300 dark:bg-gray-700 mt-8"></div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-500 font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-2">Design</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Create wireframes, mockups, and interactive prototypes.
            </p>
          </div>
          
          {/* Connector */}
          <div className="hidden md:block w-24 h-0.5 bg-gray-300 dark:bg-gray-700 mt-8"></div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-orange-500 font-bold text-xl">4</span>
            </div>
            <h3 className="font-semibold mb-2">Deliver</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Test with users, refine designs, and deliver final assets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-black/80 dark:hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out if you have any questions or want to discuss your project. I'm always open to new opportunities.
            </p>
            <div className="flex space-x-6 text-2xl">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <FaDribbble />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaBehance />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold mb-4 md:mb-0">Portfolio</div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
              <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-gray-600 transition-colors">Work</a>
              <a href="#process" className="hover:text-gray-600 transition-colors">Process</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex justify-center space-x-6 text-xl mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <FaDribbble />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <FaBehance />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <FaGithub />
            </a>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} UI/UX Designer Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
