"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import patternCurve from "../public/images/pattern-curve.svg";
import patterComma from "../public/images/pattern-quotes.svg";
import model1 from "../public/images/image-tanya.jpg";
import model2 from "../public/images/image-john.jpg";
import patternBg from "../public/images/pattern-bg.svg";
import buttonLeft from "../public/images/icon-prev.svg";
import buttonRight from "../public/images/icon-next.svg";
import Image from "next/image";

const contents = [
  {
    text: "&ldquo; I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. &ldquo;",
    author: "Tanya Sinclair",
    role: "UX Designer",
    image: model1.src,
  },
  {
    text: "&ldquo; If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.  &ldquo;",
    author: "Tarkpor",
    role: "Junior Front-end Developer",
    image: model2.src,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "John Doe",
    role: "Web Developer",
    image: "https://via.placeholder.com/150",
  },
  // Add more content objects as needed
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="relative bg-white text-black h-screen flex justify-center items-center">
      <div className="relative flex text-4xl font-light w-[60%]">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            className="flex flex-col w-[70%] text-darkBlue gap-12 z-20"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: contents[currentIndex].text,
              }}
            />
            <span className="font-bold text-2xl">
              {contents[currentIndex].author}{" "}
              <span className="text-grayishBlue font-medium">
                {contents[currentIndex].role}
              </span>
            </span>
          </motion.p>
        </AnimatePresence>
        <div className="absolute flex flex-col z-10 -top-44 -right-24 w-[60%] h-full">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="shadow-2xl"
            style={{ width: "100%", height: "auto" }}
          >
            <Image
              src={contents[currentIndex].image}
              alt="model"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>
          <div className="bg-white flex justify-between max-w-[20%] py-4 px-6 rounded-full shadow-2xl relative -top-4 -right-32">
            <Image
              src={buttonLeft.src}
              alt="button"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={handlePrev}
            />
            <Image
              src={buttonRight.src}
              alt="button"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
        <div className="absolute -right-44 -top-[100%]">
          <Image
            src={patternBg.src}
            alt="pattern"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Image
          src={patterComma.src}
          width={100}
          height={100}
          alt="quotes"
          className="-top-6 left-24 absolute"
        />
      </div>

      <Image
        width={100}
        height={100}
        src={patternCurve.src}
        alt="pattern"
        className="absolute bottom-0 w-[1000px] left-0"
      />
    </main>
  );
}
