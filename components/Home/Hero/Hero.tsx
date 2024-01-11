import Image from "next/image";
import Link from "next/link";
import React from "react";


// high yellow - #94b4bc
// mid - #fedc80
// light-white yellow - #fff8e6
// swap colors #94b4bc to #94b4bc



/* 

“Semaglutide,the same active ingredient as weight loss drug Wegovy®Delivered overnight. Weight loss medicine Wegovy® and Ozempic® are in short supply. Get matched with a doctor who can prescribe Semaglutide if it’s right for you.”
To:
“Lose weight with GLP-1 medication.
GLP-1 medications in combination with 1:1 video coaching and lifestyle changes are the most effective for weight loss.”


*/

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-start bg-[#F7F5F1] mt-[18px]">
        <div className="px-6 py-10">
          <h2 className="text-neutral-700 lg:text-3xl text-2xl not-italic font-medium lg:leading-9 leading-8 tracking-[-0.75px] lg:w-[400px]">
          Lose weight with GLP-1 medication.{" "} 
            <span className="text-[#94b4bc] italic">
              DONE RIGHT!
            </span>{" "}
          </h2>
          <p className="text-sm text-[#94b4bc] font-medium lg:w-[350px] mt-4">
          GLP-1 medications in combination with patient care plans and lifestyle changes are the most effective for weight loss.
          </p>
          <div className="mt-6">
            <Link
              href="https://carevalidate.jotform.com/240097079958976"
              target="_blank"
            >
              {" "}
              <button className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#94b4bc]">
                <span className="uppercase text-white text-lg">
                  See if I qualify
                </span>
                <Image
                  src="/assets/right-arrow.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-full h-full flex justify-end">
          <Image
            src="/assets/overweight-male-2.png"
            width={700}
            height={500}
            alt=""
            className="w-auto max-h-[500px]"
          />
        </div>
      </div>
      {/* <div className="mt-6">
        <Image
          src="/assets/brand.png"
          width={1200}
          height={500}
          alt=""
          className="w-full"
        />
      </div> */}
    </>
  );
};

export default Hero;
