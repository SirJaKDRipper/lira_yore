"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { BiSolidStar } from "react-icons/bi";
import Image from "next/image";

export function Home() {
    return (
        <section id="relume">
            <div className="w-full border-none">
                <Image alt="landing_image" src="/landingImage_5.png" layout="responsive" width={1920} height={1080} className="w-full h-auto" />
            </div>
            <div className="px-[5%] pt-16 md:py-24 lg:pt-28">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        {/* <p className="mb-3 font-semibold md:mb-4">Tagline</p> */}
                        <h1 className="rb-5 mb-5 text-3xl lg:text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Elevate Your Style with Timeless Elegance
                        </h1>
                    </div>
                    <div>
                        <div className="mt-6 gap-4 md:mt-8 text-md lg:text-3xl">
                            <p>Discover the perfect blend of sophistication and modernity in our exclusive collection. Our mission is to empower individuals through fashion that speaks to their unique identity.</p>
                        </div>
                        <div className="mt-5 flex items-center gap-x-4 md:mt-10">
                            <Button
                                variant="primary"
                                size="sm"
                                className="lg:mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-xs lg:text-lg font-semibold primary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Shop Now
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="primary"
                                size="sm"
                                className="lg:mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-xs lg:text-lg font-semibold secondary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Learn More
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[5%] ">
                    <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                      <div>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                        Where Elegance Meets Distinction
                        </h1>
                        <p className="mb-6 md:mb-8 md:text-md">
                        Lira-Yore is a designer fashion brand that blends timeless elegance with modern innovation. Each piece is crafted 
                        with precision, offering exclusivity, sophistication, and a bold statement of individuality. From luxurious fabrics
                         to intricate designs, our creations embody grace, power, and prestige.  
                        </p>
                        {/* Subheading Section */}

                        {/* <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                          <div>
                            <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                              Subheading one
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Suspendisse varius enim in eros.
                            </p>
                          </div>
                          <div>
                            <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                              Subheading two
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Suspendisse varius enim in eros.
                            </p>
                          </div>
                        </div> */}
                        <div className="mt-8 flex items-center gap-x-4 md:mt-10">
                            <Button
                                variant="primary"
                                size="sm"
                                className="mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-lg font-semibold primary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Shop Now
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="primary"
                                size="sm"
                                className="mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-lg font-semibold secondary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Learn More
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                      </div>
                      <div>
                        <Image
                          src="/landingDesignImage_1.jpg"
                          alt="Relume placeholder image"
                          width={600}
                          height={300}
                          className="w-full h-300 rounded-image object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div>
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Discover the essence of luxury with our exclusive clothing
              collection.
            </h2>
          </div>
          <div>
            <p className="mt-8 md:text-xl text-justify">
              Our brand is committed to sustainability, using eco-friendly
              materials that respect the planet. Each piece is crafted with
              meticulous attention to detail, ensuring a unique style that
              stands out. Experience the perfect blend of fashion and
              responsibility with every purchase.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                width={48}
                height={48}
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Crafted from sustainable materials for a stylish and eco-conscious
              wardrobe.
            </h3>
            <p>Join us in making a difference through fashion.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button
                                variant="primary"
                                size="sm"
                                className="mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-lg font-semibold secondary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Learn More
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                width={48}
                height={48}
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Explore unique designs that redefine modern elegance and personal
              expression.
            </h3>
            <p>
              Our designs are inspired by art and culture, ensuring exclusivity.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button
                                variant="primary"
                                size="sm"
                                className="mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-lg font-semibold secondary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Shop Now
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                width={48}
                height={48}
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Limited editions that elevate your wardrobe to new heights of
              sophistication.
            </h3>
            <p>
              Don&#39;t miss out on our exclusive collections that are truly
              one-of-a-kind.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button
                                variant="primary"
                                size="sm"
                                className="mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-lg font-semibold secondary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Sign Up
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div>
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Customer Testimonials
          </h1>
          <p className="md:text-md">
            I absolutely love the quality and design of these clothes!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              &quot;Wearing this brand makes me feel confident and stylish. The fit
              is perfect!&quot;
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  width={56}
                  height={56}
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">Jane Doe</p>
                <p>Fashion Blogger</p>
              </div>
              {/* <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div> */}
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              &quot;These pieces are a game changer for my wardrobe. I get
              compliments every time I wear them!&quot;
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  width={56}
                  height={56}
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">John Smith</p>
                <p>Creative Director</p>
              </div>
              {/* <div className="hidden w-px self-stretch bg-black md:block" />
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
     <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
          <div>
            <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Stay Ahead with Exclusive Offers
                </h2>
                <p className="md:text-md">
                  Join our newsletter for the latest trends and exclusive updates on
                  our new collections.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button
                                variant="primary"
                                size="sm"
                                className="mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-lg font-semibold primary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Sign Up
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
                  <Button
                                variant="primary"
                                size="sm"
                                className="mt-8 flex items-center gap-2 rounded-full px-6 py-4 text-lg font-semibold secondary-button shadow-sm transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Learn More
                                <RxChevronRight className="h-5 w-5" />
                            </Button>
                </div>
              </div>
              <div>
                <Image
                  src="/landingDesignImage_2.jpg"
                  alt="Relume placeholder image"
                  width={600}
                  height={300}
                  className="w-full rounded-image object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        </section>
        
    );
}
