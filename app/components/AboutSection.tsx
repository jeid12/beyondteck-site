import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#f6fafc] py-16 px-2 md:px-12"
      aria-labelledby="about-beyond-tech"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          id="about-beyond-tech"
          className="text-4xl md:text-5xl font-serif font-bold text-[#F69B19] text-center mb-2"
        >
          About Beyond Tech
        </h2>
        <div className="flex justify-center mb-7">
          <div className="h-1 w-16 border-b-2 border-[#F69B19] relative flex items-center justify-center">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full border-2 border-[#F69B19] bg-[#f6fafc]" />
          </div>
        </div>
        <p className="text-center text-xl md:text-2xl font-serif mb-12 text-black font-medium max-w-3xl mx-auto">
          We are a leading technology partner dedicated to empowering businesses and individuals with innovative solutions.
        </p>
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Vision and Mission */}
          <div className="flex flex-col gap-8">
            {/* Vision */}
            <div className="bg-white rounded-xl shadow border border-[#F69B19] p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <FaRegEye className="text-4xl text-[#F69B19]" />
                <span className="text-[#F69B19] font-serif text-2xl font-semibold">
                  Our Vision
                </span>
              </div>
              <p className="text-lg font-serif text-black mt-2 leading-relaxed">
                To be a leading technology partner that empowers businesses and individuals with scalable, high-performance solutions built around exceptional user experiences.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-white rounded-xl shadow border border-[#27b755] p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <GiTargetPrize className="text-4xl text-[#27b755]" />
                <span className="text-[#27b755] font-serif text-2xl font-semibold">
                  Our Mission
                </span>
              </div>
              <ul className="text-lg font-serif text-black mt-2 pl-4 space-y-1 list-disc">
                <li>Deliver scalable software systems that grow with our clients.</li>
                <li>Build high-performance applications that are reliable, secure, and efficient.</li>
                <li>Design intuitive, user-centered experiences that simplify complexity.</li>
                <li>Support businesses and individuals in achieving digital innovation and growth.</li>
                <li>Continuously evolve with emerging technologies to provide future-ready solutions.</li>
              </ul>
            </div>
          </div>
          {/* Image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-xl overflow-hidden shadow border border-gray-200 w-full h-full min-h-[300px] flex items-center">
              <Image
                src="/images/group.png"
                alt="Beyond Tech team at work"
                width={900}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}