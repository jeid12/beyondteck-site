import { FaUsers } from "react-icons/fa";

export default function WhatDriveUs() {
  return (
    <section className="py-12 bg-transparent">
      <h2 className="text-center text-4xl font-serif font-bold text-[#F69B19] mb-12">
        What Drive us
      </h2>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center p-8 text-center min-h-[260px]">
          <FaUsers className="text-5xl text-[#59B9D1] mb-4" />
          <h3 className="font-serif text-3xl font-bold mb-3">User Centric</h3>
          <p className="text-lg font-serif text-gray-700">
            Designing experiences that put people first.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center p-8 text-center min-h-[260px]">
          <FaUsers className="text-5xl text-[#59B9D1] mb-4" />
          <h3 className="font-serif text-3xl font-bold mb-3">Integrity</h3>
          <p className="text-lg font-serif text-gray-700">
            Building trust through honesty, transparency, and accountability.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center p-8 text-center min-h-[260px]">
          <FaUsers className="text-5xl text-[#59B9D1] mb-4" />
          <h3 className="font-serif text-3xl font-bold mb-3">Excellence</h3>
          <p className="text-lg font-serif text-gray-700">
            Delivering high-performance, reliable, and scalable systems.
          </p>
        </div>
      </div>
    </section>
  );
}