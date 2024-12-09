import React from "react";
import Header from "@/components/custom/Header";
import { UserButton } from "@clerk/clerk-react";
import { AtomIcon, Edit, Share2 } from "lucide-react";

// Reusable FeatureCard Component
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className=" rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10 flex flex-col items-center">
      <Icon className="h-8 w-8 text-purple-600" />
      <h2 className="mt-4 text-xl font-bold text-black text-center">{title}</h2>
      <p className="mt-1 text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

function Home() {
  return (
    <div>
      <Header />

      <section className="z-50 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white py-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-7xl">
            Build Your Resume <span className="text-yellow-400">With AI</span>
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
            Effortlessly craft a standout resume with our AI-powered Resume
            builder.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="font-bold text-3xl">How it Works?</h2>
        <p className="text-md text-gray-500 mt-2">
          Just 3 simple steps to craft your resume
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={AtomIcon}
            title="Write Prompt for Your Form"
            description="Quickly create prompts to tailor your resume content with precision."
          />
          <FeatureCard
            icon={Edit}
            title="Edit Your Form"
            description="Modify and enhance your resume forms to suit your needs effortlessly."
          />
          <FeatureCard
            icon={Share2}
            title="Share & Start Accepting Responses"
            description="Share your resume and receive instant feedback from others."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
