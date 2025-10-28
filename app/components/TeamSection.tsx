"use client";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "IHIRWE IRENE SHINGIRO Arthur",
    position: "CEO & Founder",
    bio: "Visionary leader  in tech. Passionate about Rwanda's digital transformation.",
    image: "/images/team/Arthur.jpeg", // Replace with actual team photo
    linkedin: "#",
    twitter: "#",
    github: "#",
    expertise: ["Leadership", "Strategy", "Business Development"]
  },
  {
    id: 2,
    name: "Didier IMANIRAHARI",
    position: "CTO & Co-Founder",
    bio: "Full-stack expert specializing in scalable systems and cloud architecture.",
    image: "/images/team/Didier.jpeg", // Replace with actual team photo
    linkedin: "#",
    twitter: "#",
    github: "#",
    expertise: ["System Architecture", "Cloud Solutions", "DevOps"]
  },
  {
    id: 3,
    name: "Jean D Amour NIYOKWIZERA",
    position: "Lead Backend Developer",
    bio: "Python specialist building robust APIs and database solutions for African businesses.",
    image: "/images/team/jean.JPG", // Replace with actual team photo
    linkedin: "https://linkedin.com/in/brojeid",
    twitter: "https://x.com/brojeid",
    github: "https://github.com/jeid12",
    expertise: ["Python", "PostgreSQL", "API Design"]
  },
  {
    id: 4,
    name: "Ismael MUKEZI",
    position: "Lead Frontend Developer",
    bio: "React expert creating beautiful, responsive interfaces that users love.",
    image: "/images/team/Ismael.JPG", // Replace with actual team photo
    linkedin: "#",
    twitter: "#",
    github: "#",
    expertise: ["React", "Next.js", "UI/UX"]
  },
  {
    id: 5,
    name: "Brave INKINDI",
    position: "AI Specialist    ",
    bio: "Machine learning enthusiast driving innovation with AI solutions.",
    image: "/images/team/Ismael.JPG", // Replace with actual team photo
    linkedin: "#",
    twitter: "#",
    github: "#",
    expertise: ["Flutter", "React Native", "iOS/Android"]
  },
  
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F69B19] text-center mb-2">
          Meet Our Team
        </h2>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 border-b-2 border-[#F69B19] relative flex items-center justify-center">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full border-2 border-[#F69B19] bg-white" />
          </div>
        </div>
        <p className="text-center text-lg text-gray-600 mb-12 font-serif max-w-3xl mx-auto">
          The talented individuals behind Beyond Tech. Our diverse team brings together expertise, passion, and commitment to deliver exceptional technology solutions.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-[#F6A019] to-[#e67c00] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#F6A019] hover:bg-[#F6A019] hover:text-white transition-all duration-300"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#F6A019] hover:bg-[#F6A019] hover:text-white transition-all duration-300"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <FaTwitter className="text-xl" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#F6A019] hover:bg-[#F6A019] hover:text-white transition-all duration-300"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#F6A019] font-serif font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-sm text-gray-700 font-serif mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-serif"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#F6A019] to-[#e67c00] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-lg md:text-xl text-white mb-6 font-serif opacity-90 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation. Check out our open positions or send us your resume!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-[#F6A019] hover:bg-gray-100 font-serif text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-bold"
            >
              Get in Touch
            </a>
            <a
              href="mailto:careers@beyondtech.com"
              className="border-2 border-white text-white hover:bg-white hover:text-[#F6A019] font-serif text-lg px-8 py-3 rounded-lg transition-all duration-300 font-bold"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
