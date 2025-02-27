"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ShowLaunchDapps from "@/components/showLaunchDapps";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  const [showLaunchDapps, setShowLaunchDapps] = useState(false);

  const toggleLaunchDapps = () => {
    setShowLaunchDapps(!showLaunchDapps);
  };

  const closeModal = () => {
    setShowLaunchDapps(false);
  };

  return (
    <main className="relative min-h-screen text-white">
      <Navbar />

      {/* Container for content and vertical line */}
      <div className="container relative mx-auto right-28 py-16">
        {showLaunchDapps && <ShowLaunchDapps closeModal={closeModal} />}
      </div>

      {/* Vertical Line */}
      <div
        className="absolute hidden md:block" // Hide on mobile, show on medium screens and above
        style={{
          top: "250px",
          bottom: "20px",
          right: "50px",
        }}
      >
        <div className="w-px h-full bg-gradient-to-b from-[#0094FF] via-[#5643F1] to-[#A02294]"></div>
      </div>

      <div className="container relative mx-auto px-4 py-16">
        {showLaunchDapps && <ShowLaunchDapps closeModal={closeModal} />}

        {/* Headline */}
        <h1 className="mt-8 sm:mt-16 mb-20 text-center text-4xl font-bold leading-tight bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent md:text-5xl lg:text-6xl">
          We are building a safe on the <br />
          blockchain for your assets
        </h1>

        {/* About & Vision Cards - Centered */}
        <section className="flex flex-col items-center gap-8 mb-16">
          {/* About Card - Smaller */}
          <div className="relative max-w-[400px] sm:max-w-[550px] rounded-3xl overflow-hidden">
            <Image
              src="/about-card.svg"
              alt="About Card"
              width={750}
              height={200}
              layout="responsive"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 p-6 sm:p-8 bg-opacity-50 backdrop-blur-sm flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/about-custos-icon.svg"
                  alt="Custos Diretriz logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
                <h2 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-[#0094FF] via-[#5643F1] to-[#A02294] bg-clip-text text-transparent">
                  About Custos Diretriz
                </h2>
              </div>
              <p className="text-xs sm:text-lg text-[#E5E7EB] mt-4 leading-relaxed">
                At Custos Diretriz, we are dedicated to revolutionizing safety
                and security through innovative protocol platforms.
                <br />
                <br />
                Our mission is to empower individuals and communities to
                effectively address crime scene witnessing and streamline
                agreement systems.
              </p>
            </div>
          </div>

          {/* Vision Card - Larger */}
          <div className="relative w-full max-w-[500px] sm:max-w-[600px] rounded-3xl overflow-hidden">
            <Image
              src="/about-card.svg"
              alt="Vision Card"
              width={800}
              height={400}
              layout="responsive"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 p-6 sm:p-8 bg-opacity-50 backdrop-blur-sm flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/vision-icon.svg"
                  alt="Vision illustration"
                  width={48}
                  height={48}
                  className="object-cover"
                />
                <h2 className="text-lg sm:text-3xl font-semibold bg-gradient-to-r from-[#0094FF] via-[#5643F1] to-[#A02294] bg-clip-text text-transparent">
                  Our Vision
                </h2>
              </div>
              <p className="text-xs sm:text-lg text-[#E5E7EB] mt-4 leading-relaxed">
                By leveraging technology and collaboration, we strive to build a
                world where everyone feels empowered to make a difference in
                their communities.
                <br />
                <br />
                We envision a safer and more transparent society where
                individuals have the tools and resources they need to contribute
                to crime prevention and intervention efforts.
              </p>
            </div>
          </div>
        </section>

        {/* Team Cards - Centered */}
        <section className="flex flex-wrap justify-center gap-6 mb-20">
          {[
            {
              name: "Jeremiah D. Oyeniran",
              role: "Smart Contract Developer",
              image: "/jery.png",
            },
            {
              name: "Faith M. Robert",
              role: "Smart Contract Developer",
              image: "/goodness.png",
            },
            {
              name: "Goodness T. Kolapo",
              role: "Smart Contract Developer",
              image: "/faith.png",
            },
            {
              name: "New Team Member",
              role: "Smart Contract Developer",
              image: "/goodness.png",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="w-64 rounded-lg border bg-black/50 backdrop-blur-lg p-4 transform hover:scale-105 transition-transform duration-300"
              style={{
                borderImage:
                  "linear-gradient(to right, #0094FF, #5643F1, #A02294) 1",
              }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0094FF] to-[#A02294] bg-clip-text text-transparent">
                {member.name}
              </h3>
              <p className="bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent">
                {member.role}
              </p>
            </div>
          ))}
        </section>

        {/* Reach Out Section */}
        <section className="mb-20 text-center">
          <div className="mb-8">
            <h2 className="text-[30px] md:text-[50px] font-bold bg-gradient-to-r from-[#0094FF] to-[#A02294] bg-clip-text text-transparent">
              Reach out to us
            </h2>
            <p className="text-[20px] bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent">
              We paid the price to keep your videos and legal agreements safe.
            </p>
          </div>
          <button
            className="inline-flex items-center gap-2 text-white text-sm py-4 px-8 rounded-full bg-[#84c2f513] backdrop-blur-[10px] hover:bg-[#209af1] transition-colors duration-300"
            style={{
              borderImage:
                "linear-gradient(to right, #0094FF, #5643F1, #A02294) 1",
            }}
          >
            Send Us a Message
            <FaLongArrowAltRight />
          </button>
        </section>
      </div>
    </main>
  );
};

export default About;
