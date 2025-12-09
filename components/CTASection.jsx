export default function CTASection() {
  return (
    <section className="bg-blue-700 text-white py-20 text-center px-6 rounded-3xl shadow-lg">
      
      <h2 className="text-3xl md:text-4xl font-bold">
        Want Similar Results?
      </h2>

      <p className="max-w-3xl mx-auto mt-3 text-lg text-blue-100">
        Partner with Panel Focus for precise insights, global reach, and trusted research.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-blue-100 transition">
          Contact Us
        </button>

        <button className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-950 transition">
          Get a Free Quote
        </button>
      </div>

    </section>
  );
}
