import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <div className="flex-1 bg-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 h-full overflow-hidden flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Column - Content */}
        <div className="w-full md:w-6/12 pt-6 lg:py-0 flex flex-col text-center lg:text-start items-center lg:items-start">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold !leading-tight text-teal-800 mb-4 lg:mb-6">
            Stand out in seconds
            <br />
            Get hired faster
            {/* <span className="font-medium inline-block mt-4"></span>  */}
          </h1>
          <p className="text-sm lg:text-base text-gray-500 mb-8 lg:mb-10 leading-normal">
            Create a beautiful, job-winning resume in minutes.
            <br />
            Clean design, ATS-optimized, and ready to impress.
          </p>

          <a
            href="#builderSection"
            className="w-fit flex group items-center justify-center gap-2 bg-teal-500 rounded-full text-white px-8 py-4 hover:bg-teal-600 transition-colors">
            Build My Resume
            <ArrowRight
              className="transition duration-500 group-hover:translate-x-3"
              size={18}
            />
          </a>

          {/* Email Form with Button Inside */}
          <div className="mb-16 mt-6 hidden">
            <div className="max-w-[475px] flex items-center bg-white border border-gray-300 p-1 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent">
              <input
                type="email"
                placeholder="Get early access"
                className="flex-grow px-4 py-3 focus:outline-none text-black"
              />
              <button className="flex items-center justify-center gap-2 bg-teal-500 rounded-lg text-white px-6 py-3 h-full hover:bg-teal-600 transition-colors">
                Notify Me
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="text-sm text-gray-400 italic mt-1 ps-4">
              No spam. We’ll only email you when it matters.
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center gap-6 hidden">
            {new Array(3).fill("1").map((i)=>(
              <Image
                key={i}
                src="/img/sample_logo.png"
                alt="Partner Logo 1"
                width={70}
                height={20}
                className="w-auto h-auto rounded"
              />
            ))}
          </div>
        </div>

        {/* Right Column - Etsy Image */}
        <div className="w-full md:w-5/12 overflow-hidden flex justify-center lg:justify-end items-center lg:h-full py-4 pt-10 lg:py-20">
          <img
            src="/img/CV_sample_full.png"
            className="h-auto w-full max-h-full max-w-full rounded-lg"
            alt="CV image"
          />
        </div>
      </div>
    </div>
  );
}
