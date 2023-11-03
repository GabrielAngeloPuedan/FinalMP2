import React from 'react';
import SampleNews from '../assets/SampleNews.jpg';
// import { ForeignEx } from './ForeignEx';

export const NestedColumn = () => {
  return (
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">
        <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
          <div className="w-full py-3">
            <h2 className="text-gray-800 text-2xl font-bold">
              <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
              Asian
            </h2>
          </div>
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="flex-shrink max-w-full w-full px-3 pb-5">
              <div className="relative hover-img max-h-98 overflow-hidden">
                <a href="/">
                  <img
                    className="max-w-full w-full mx-auto h-auto"
                    src={SampleNews}
                    alt="/"
                  />
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <a href="/">
                    <h2 className="text-3xl font-bold capitalize text-white mb-3">
                      Amazon Shoppers Are Ditching Designer Belts for This
                      Best-Selling
                    </h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This very helpfull for
                    generate default content..
                  </p>

                  <div className="pt-2">
                    <div className="text-gray-100">
                      <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                      Europe
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
              <div className="flex flex-row sm:block hover-img">
                <a href="/">
                  <img
                    className="max-w-full w-full mx-auto"
                    src={SampleNews}
                    alt="/"
                  />
                </a>
                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    <a href="/">
                      5 Tips to Save Money Booking Your Next Hotel Room
                    </a>
                  </h3>
                  <p className="hidden md:block text-gray-600 leading-tight mb-1">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
              <div className="flex flex-row sm:block hover-img">
                <a href="/">
                  <img
                    className="max-w-full w-full mx-auto"
                    src={SampleNews}
                    alt="/"
                  />
                </a>
                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    <a href="/">
                      5 Tips to Save Money Booking Your Next Hotel Room
                    </a>
                  </h3>
                  <p className="hidden md:block text-gray-600 leading-tight mb-1">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
              <div className="flex flex-row sm:block hover-img">
                <a href="/">
                  <img
                    className="max-w-full w-full mx-auto"
                    src={SampleNews}
                    alt="/"
                  />
                </a>
                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    <a href="/">
                      5 Tips to Save Money Booking Your Next Hotel Room
                    </a>
                  </h3>
                  <p className="hidden md:block text-gray-600 leading-tight mb-1">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
              <div className="flex flex-row sm:block hover-img">
                <a href="/">
                  <img
                    className="max-w-full w-full mx-auto"
                    src={SampleNews}
                    alt="/"
                  />
                </a>
                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    <a href="/">
                      5 Tips to Save Money Booking Your Next Hotel Room
                    </a>
                  </h3>
                  <p className="hidden md:block text-gray-600 leading-tight mb-1">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
              <div className="flex flex-row sm:block hover-img">
                <a href="/">
                  <img
                    className="max-w-full w-full mx-auto"
                    src={SampleNews}
                    alt="/"
                  />
                </a>
                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    <a href="/">
                      5 Tips to Save Money Booking Your Next Hotel Room
                    </a>
                  </h3>
                  <p className="hidden md:block text-gray-600 leading-tight mb-1">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
              <div className="flex flex-row sm:block hover-img">
                <a href="/">
                  <img
                    className="max-w-full w-full mx-auto"
                    src={SampleNews}
                    alt="/"
                  />
                </a>
                <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                  <h3 className="text-lg font-bold leading-tight mb-2">
                    <a href="/">
                      5 Tips to Save Money Booking Your Next Hotel Room
                    </a>
                  </h3>
                  <p className="hidden md:block text-gray-600 leading-tight mb-1">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
