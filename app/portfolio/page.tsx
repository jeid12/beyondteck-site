import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AgriConnect Rwanda",
    category: "Mobile Development",
    client: "AgriTech Rwanda",
    year: "2024",
    duration: "4 months",
    image: "/images/group.png", // Replace with actual project screenshot
    description: "A comprehensive mobile application connecting farmers with markets, providing real-time pricing, weather updates, and agricultural advice.",
    challenge: "Rwanda's farmers lacked direct access to market information, leading to exploitation by middlemen and poor pricing decisions.",
    solution: "Developed a cross-platform mobile app using Flutter with offline capabilities, SMS integration for feature phones, and a web dashboard for administrators.",
    results: [
      "5,000+ active farmers onboarded in 6 months",
      "40% increase in farmer income",
      "Reduced post-harvest losses by 25%",
      "94% user satisfaction rating"
    ],
    technologies: ["Flutter", "Node.js", "MongoDB", "Firebase", "Twilio API"],
    testimonial: {
      text: "Beyond Tech transformed our vision into reality. The app has revolutionized how farmers in Rwanda access markets.",
      author: "Marie Uwase",
      position: "Founder, AgriTech Rwanda"
    }
  },
  {
    id: 2,
    title: "Kigali Payment Gateway",
    category: "Backend Development",
    client: "FinTech East Africa",
    year: "2024",
    duration: "3 months",
    image: "/images/image1.png", // Replace with actual project screenshot
    description: "Secure payment processing system integrating MTN Mobile Money, Airtel Money, and bank transfers for e-commerce platforms.",
    challenge: "Existing payment solutions were expensive, slow, and lacked local payment method integration for Rwandan businesses.",
    solution: "Built a robust, secure API gateway with comprehensive payment provider integrations, real-time transaction monitoring, and fraud detection.",
    results: [
      "Processing 10,000+ transactions daily",
      "99.9% uptime since launch",
      "50% reduction in payment processing costs",
      "Sub-3-second transaction times"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"],
    testimonial: {
      text: "The most reliable payment system we've worked with. Security and performance are exceptional.",
      author: "Sarah Ingabire",
      position: "Product Manager, FinTech East Africa"
    }
  },
  {
    id: 3,
    title: "EduTrack Learning Platform",
    category: "Full Stack Development",
    client: "Rwanda Digital Education",
    year: "2025",
    duration: "5 months",
    image: "/images/image2.png", // Replace with actual project screenshot
    description: "Complete learning management system for schools with online classes, assessment tools, and parent-teacher communication.",
    challenge: "Schools needed a unified digital platform for remote learning, student tracking, and performance analytics.",
    solution: "Developed a comprehensive LMS with video conferencing, assignment management, grade tracking, and AI-powered insights.",
    results: [
      "15 schools currently using the platform",
      "3,000+ students enrolled",
      "85% improvement in parent engagement",
      "Real-time performance analytics"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "WebRTC", "AWS S3"],
    testimonial: {
      text: "A game-changer for education in Rwanda. The platform is intuitive and packed with features.",
      author: "Jean Claude Nkurunziza",
      position: "Director, Rwanda Digital Education"
    }
  },
  {
    id: 4,
    title: "Tourism Rwanda App",
    category: "UI/UX Design & Development",
    client: "Rwanda Tourism Board",
    year: "2024",
    duration: "2 months",
    image: "/images/logoo.png", // Replace with actual project screenshot
    description: "Beautiful mobile app showcasing Rwanda's tourist destinations, booking experiences, and travel guides.",
    challenge: "Tourists needed an easy way to discover and book experiences across Rwanda with offline map capabilities.",
    solution: "Designed and developed a visually stunning app with interactive maps, booking integration, and multilingual support.",
    results: [
      "20,000+ downloads in 3 months",
      "4.8-star rating on app stores",
      "Increased tour bookings by 65%",
      "Featured by Rwanda Tourism Board"
    ],
    technologies: ["React Native", "Figma", "Node.js", "Google Maps API", "Stripe"],
    testimonial: {
      text: "The design is stunning and the user experience is seamless. Tourists love the app!",
      author: "Patrick Mugisha",
      position: "Marketing Director, Rwanda Tourism Board"
    }
  }
];

export default function PortfolioPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#F6A019] to-[#e67c00] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white font-serif max-w-3xl mx-auto opacity-90">
              Transforming ideas into impactful digital solutions. Explore our success stories and the results we've delivered for clients across Rwanda.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#F6A019] mb-2">4+</div>
              <div className="font-serif text-gray-700">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#F6A019] mb-2">50+</div>
              <div className="font-serif text-gray-700">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#F6A019] mb-2">94%</div>
              <div className="font-serif text-gray-700">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-[#F6A019] mb-2">100%</div>
              <div className="font-serif text-gray-700">On-Time Delivery</div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`mb-20 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-8 items-start`}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white sticky top-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[300px] md:h-[400px]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-block bg-[#F6A019] text-white px-4 py-1 rounded-full text-sm font-serif font-semibold mb-3">
                    {project.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-serif mb-4">
                    <span>Client: <strong>{project.client}</strong></span>
                    <span>•</span>
                    <span>Year: <strong>{project.year}</strong></span>
                    <span>•</span>
                    <span>Duration: <strong>{project.duration}</strong></span>
                  </div>
                  <p className="text-lg font-serif text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="bg-white rounded-lg p-6 mb-4 border border-gray-200">
                    <h3 className="font-serif font-bold text-lg text-[#F6A019] mb-2">The Challenge</h3>
                    <p className="font-serif text-gray-700 mb-4">{project.challenge}</p>
                    <h3 className="font-serif font-bold text-lg text-[#27b755] mb-2">Our Solution</h3>
                    <p className="font-serif text-gray-700">{project.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="bg-green-50 rounded-lg p-6 mb-4 border border-green-200">
                    <h3 className="font-serif font-bold text-lg text-[#27b755] mb-3">Results & Impact</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 font-serif text-gray-800">
                          <FaCheckCircle className="text-[#27b755] mt-1 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h3 className="font-serif font-bold text-sm text-gray-600 mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-serif"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-[#F6A019] shadow-md">
                    <p className="font-serif text-gray-800 italic mb-3">
                      "{project.testimonial.text}"
                    </p>
                    <div className="font-serif">
                      <p className="font-bold text-gray-900">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#F6A019] to-[#e67c00]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white font-serif mb-8 opacity-90">
              Let's create something amazing together. Get in touch to discuss your next big idea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-[#F6A019] hover:bg-gray-100 font-serif text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
              >
                Start a Project
              </Link>
              <Link 
                href="/"
                className="border-2 border-white text-white hover:bg-white hover:text-[#F6A019] font-serif text-lg px-8 py-4 rounded-lg transition-all duration-300 font-bold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
