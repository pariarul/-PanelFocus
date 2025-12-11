"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";

const Globe3D = dynamic(() => import("../../components/Globe3D"), {
  ssr: false,
});

export default function HomeHero() {
  const [openJoinModal, setOpenJoinModal] = useState(false);

  return (
    <>
      <section className="w-full py-10 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:mt-25">

          {/* LEFT SECTION */}
          <div className="space-y-6 text-center md:text-left mt-[100px]  ">
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 leading-tight ">
              Welcome to <span className="text-blue-900">Panel Focus</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
              Expert Market Research, Tailored for Impact
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mx-auto md:mx-0 max-w-xl">
              Gain trusted, high-quality insights from over 40 countries fast,
              precise, and secure. At Panel Focus, we connect you with verified,
              hard to reach audiences across B2C, B2B, and Healthcare sectors,
              delivering data that empowers confident decisions and drives
              business growth.
            </p>

<div className="flex justify-center md:justify-start">
  <Link
    href="/join-panel"
    className="px-5 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:scale-105 hover:bg-blue-800 transform transition block text-center"
  >
    Join Our Panel
  </Link>
</div>


          </div>

          {/* RIGHT SECTION: 3D GLOBE */}
          <div className="w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px]">
            <Globe3D />
          </div>
        </div>
      </section>


    </>
  );
}
