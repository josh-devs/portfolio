import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Jos Vilanculo
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Developer,Founder at{' '}
                <span className="font-semibold">Vitsol</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Software developer with a grit for business.Helping startups build intergrated,optimised and reliable products and digital solutions. 
              </p>
              
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt=" Josh Vilanculo"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Recent Blog Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="The state of the south african tech ecosystem."
              slug="style-guides-component-libraries-design-systems"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Bulding for the World Wide Web in the Third world country,Constraints."
              slug="rust"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="Imperative vs Declarative programming- What do they actualy mean?"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Read all posts'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Tools
          </h2>
          <h4 className=" text-1xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            For Web Development
          </h4>


          <div className="grid grid-cols-2 lg:grid-cols-3 gap-15">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/html.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/css.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/mongo.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">MongoDB</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/aws.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">AWS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/node.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">NodeJS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/nextjs.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">NextJS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/tailwind.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">Tailwinds</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/github1.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">GitHub</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                <Image
                alt=" Josh Vilanculo"
                height={240}
                width={240}
                src="/firebase.png"
                className="rounded-full filter grayscale"
              />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-black dark:text-white">Firebase</h3>
                </div>
              </div>
            </div>
            
            
          </div>
          
          <Subscribe />
        </div>
      </Container>
    </Suspense>
  );
}
