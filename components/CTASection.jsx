import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-blue-900 text-white py-20 text-center px-6 rounded-3xl shadow-lg">
      
      <h2 className="text-3xl md:text-4xl font-bold">
        Want Similar Results?
      </h2>

      <p className="max-w-3xl mx-auto mt-3 text-lg text-blue-100">
        Partner with Panel Focus for precise insights, global reach, and trusted research.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">

                  <Link
              href="/contact"
              className="px-4 py-2 border border-blue-900 bg-white text-blue-900 hover:bg-blue-700 hover:text-white rounded-full  transition font-medium"
            >
              Contact use
            </Link>

          <Link
              href="/get-quote"
              className="px-4 py-2 border border-white bg-blue-900 text-white rounded-full hover:bg-blue-700 transition font-medium"
            >
              Get Quote
            </Link>
      </div>

    </section>
  );
}
