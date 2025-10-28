import { FaMapMarkerAlt, FaCheckCircle, FaMobileAlt, FaGlobe, FaHandshake, FaAward } from "react-icons/fa";

export default function TrustSignalsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f6fafc] to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F69B19] text-center mb-2">
          Why Choose Beyond Tech in Rwanda
        </h2>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 border-b-2 border-[#F69B19] relative flex items-center justify-center">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full border-2 border-[#F69B19] bg-[#f6fafc]" />
          </div>
        </div>
        <p className="text-center text-lg text-gray-600 mb-12 font-serif max-w-3xl mx-auto">
          As Rwanda's trusted technology partner, we combine local expertise with international standards to deliver world-class solutions.
        </p>

        {/* Trust Signals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Local Presence */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#F6A019] bg-opacity-10 flex items-center justify-center">
                <FaMapMarkerAlt className="text-2xl text-[#F6A019]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">Based in Kigali</h3>
            </div>
            <p className="font-serif text-gray-700 leading-relaxed">
              Proudly based in Rwanda's capital with deep understanding of the local market, business culture, and digital transformation needs.
            </p>
          </div>

          {/* Government Aligned */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#27b755] bg-opacity-10 flex items-center justify-center">
                <FaCheckCircle className="text-2xl text-[#27b755]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">RDB Registered</h3>
            </div>
            <p className="font-serif text-gray-700 leading-relaxed">
              Officially registered with Rwanda Development Board, supporting Rwanda's vision for a digital economy and innovation-driven growth.
            </p>
          </div>

          {/* Local Payment */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#F6A019] bg-opacity-10 flex items-center justify-center">
                <FaMobileAlt className="text-2xl text-[#F6A019]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">Local Payments</h3>
            </div>
            <p className="font-serif text-gray-700 leading-relaxed">
              We accept MTN Mobile Money, Airtel Money, and local bank transfers, making it easy for Rwandan businesses to work with us.
            </p>
          </div>

          {/* Language Support */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#27b755] bg-opacity-10 flex items-center justify-center">
                <FaGlobe className="text-2xl text-[#27b755]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">Multilingual Team</h3>
            </div>
            <p className="font-serif text-gray-700 leading-relaxed">
              Our team communicates in English, French, and Kinyarwanda, ensuring clear understanding and smooth collaboration with all clients.
            </p>
          </div>

          {/* Local Impact */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#F6A019] bg-opacity-10 flex items-center justify-center">
                <FaHandshake className="text-2xl text-[#F6A019]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">Community Impact</h3>
            </div>
            <p className="font-serif text-gray-700 leading-relaxed">
              Training local talent, supporting startups, and contributing to Rwanda's tech ecosystem through mentorship and knowledge sharing.
            </p>
          </div>

          {/* Quality Standards */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#27b755] bg-opacity-10 flex items-center justify-center">
                <FaAward className="text-2xl text-[#27b755]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900">International Standards</h3>
            </div>
            <p className="font-serif text-gray-700 leading-relaxed">
              Delivering world-class solutions using international best practices, security standards, and cutting-edge technologies.
            </p>
          </div>
        </div>

        {/* Featured Badge */}
        <div className="bg-gradient-to-r from-[#F6A019] to-[#e67c00] rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Partnering with Rwanda's Digital Future
            </h3>
            <p className="text-lg md:text-xl text-white mb-6 font-serif">
              From Kigali to the world — we're committed to making Rwanda a global tech hub. Join us in driving innovation and digital transformation across East Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <p className="text-3xl font-bold text-[#F69B19]">50+</p>
                <p className="text-sm font-serif text-black">Rwandan Clients</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <p className="text-3xl font-bold text-[#F69B19]">94%</p>
                <p className="text-sm font-serif text-black">Satisfaction Rate</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <p className="text-3xl font-bold text-[#F69B19]">1+</p>
                <p className="text-sm font-serif text-black">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
