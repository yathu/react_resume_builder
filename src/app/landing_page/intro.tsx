import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <div className="h-full bg-teal-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight text-teal-800 mb-6">
              Stand out in seconds
              <br />
              Get hired faster
              {/* <span className="font-medium inline-block mt-4"></span>  */}
            </h1>
            <p className="text-base text-gray-500 mb-10 leading-normal">
              Create a beautiful, job-winning resume in minutes.
              <br />
              Clean design, ATS-optimized, and ready to impress.
            </p>

            <a href="#builderSection" className="w-fit flex group items-center justify-center gap-2 bg-teal-500 rounded-full text-white px-8 py-4 h-full hover:bg-teal-600 transition-colors">
              Build My Resume
              <ArrowRight className="transition duration-500 group-hover:translate-x-3" size={18} />
            </a>

            {/* Email Form with Button Inside */}
            <div className="mb-16 hidden">
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
              <Image
                src="/img/sample_logo.png"
                alt="Partner Logo 1"
                width={150}
                height={40}
                className="h-[50px] w-auto rounded"
              />
              <Image
                src="/img/sample_logo.png"
                alt="Partner Logo 1"
                width={150}
                height={40}
                className="h-[50px] w-auto rounded"
              />
              <Image
                src="/img/sample_logo.png"
                alt="Partner Logo 1"
                width={150}
                height={40}
                className="h-[50px] w-auto rounded"
              />
            </div>
          </div>

          {/* Right Column - Etsy Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md overflow-hidden rounded-lg max-h-[600px]">
              <Image
                src="/img/CV_sample_full.png"
                alt="Resume Template"
                width={800}
                height={1000}
                className="h-full transition-all duration-500 w-auto hover:rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
