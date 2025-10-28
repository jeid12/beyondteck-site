export default function StatsSection() {
  return (
    <section className="bg-[#D4851A] py-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 text-center text-white">
        <div>
          <div className="text-5xl font-serif font-normal mb-2">4+</div>
          <div className="font-serif text-lg">
            Project <br />
            Completed
          </div>
        </div>
        <div>
          <div className="text-5xl font-serif font-normal mb-2">1</div>
          <div className="font-serif text-lg">
            Project <br />
            In progress
          </div>
        </div>
        <div>
          <div className="text-5xl font-serif font-normal mb-2">94%</div>
          <div className="font-serif text-lg">
            Client <br />
            Satisfaction
          </div>
        </div>
        <div>
          <div className="text-5xl font-serif font-normal mb-2">1+</div>
          <div className="font-serif text-lg">
            Years <br />
            Experience
          </div>
        </div>
      </div>
    </section>
  );
}