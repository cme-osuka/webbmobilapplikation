import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="">
                
      <nav className="py-10 bg-indigo-500">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <button>
              <svg className="block text-indigo-50 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <a className="text-white text-2xl leading-none" href="#">
              <img className="h-8" src="plain-assets/logos/plain-light.svg" alt="" width="auto" />
            </a>
            <button className="block navbar-burger text-indigo-50 hover:text-indigo-200 focus:outline-none">
              <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-12">
              <a className="mr-auto text-2xl font-semibold leading-none" href="#">
                <img className="h-8" src="plain-assets/logos/plain-indigo.svg" alt="" width="auto" />
              </a>
              <button className="navbar-close">
                <svg className="h-6 w-6 cursor-pointer hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">About</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">Company</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">Services</a></li>
                <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded" href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6"><a className="block px-5 py-3 mb-3 text-sm text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200" href="#">Sign in</a><a className="block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200" href="#">Sign up</a></div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2022 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </nav>
                
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl h-64 md:h-96 mb-12 mx-auto">
            <img className="h-full w-full rounded-lg object-cover" src="plain-assets/images/indigo-600-horizontal.png" alt="" />
          </div>
          <div className="text-center">
            <span className="text-xs font-semibold text-indigo-500 uppercase">SUCCESS</span>
            <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">Good job!</h2>
            <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">If you reached this page, you managed to log in.</p>
            <div><a onClick={() => navigate("/")} className="block md:inline-block px-5 py-3 md:mr-3 mb-3 md:mb-0 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200">Return to homepage</a><a className="block md:inline-block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200" href="#">Try Again</a></div>
          </div>
        </div>
      </section>
                
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/5 flex flex-wrap">
              <div className="w-1/2 lg:w-1/4 mb-8">
                <h3 className="mb-4 text-lg font-bold font-heading">Company</h3>
                <ul className="text-sm">
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">About Us</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Careers</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Press</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Blog</a></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8">
                <h3 className="mb-4 text-lg font-bold font-heading">Pages</h3>
                <ul className="text-sm">
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Login</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Register</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Add list</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Contact</a></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8">
                <h3 className="mb-4 text-lg font-bold font-heading">Legal</h3>
                <ul className="text-sm">
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Terms</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">About Us</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Team</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Privacy</a></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8">
                <h3 className="mb-4 text-lg font-bold font-heading">Resources</h3>
                <ul className="text-sm">
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Blog</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Service</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Product</a></li>
                  <li className="mb-2"><a className="text-indigo-500 hover:text-indigo-700" href="#">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div className="order-first lg:order-last mb-10 lg:mb-0 w-full lg:w-2/5">
              <h3 className="mb-4 text-lg font-bold font-heading">Subscribe</h3>
              <p className="mb-5 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <input className="w-full lg:w-2/3 mb-4 pl-4 py-3 mr-4 border rounded" type="email" placeholder="Type your e-mail" />
              <button className="inline-block px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200">Action</button>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-16 mb-8 border-b border-indigo-50"></div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <a className="text-gray-600 text-2xl leading-none" href="#">
                <img className="h-8" src="plain-assets/logos/plain-indigo.svg" alt="" width="auto" />
              </a>
              <p className="hidden lg:block mt-3 text-sm text-gray-500">All rights reserved. © Plain Inc.</p>
            </div>
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="mb-4 flex lg:justify-end">
                <a className="inline-block mr-8" href="#">
                  <img src="plain-assets/socials/facebook.svg" />
                </a>
                <a className="inline-block mr-8" href="#">
                  <img src="plain-assets/socials/twitter.svg" />
                </a>
                <a className="inline-block mr-8" href="#">
                  <img src="plain-assets/socials/github.svg" />
                </a>
                <a className="inline-block mr-8" href="#">
                  <img src="plain-assets/socials/instagram.svg" />
                </a>
                <a className="inline-block" href="#">
                  <img src="plain-assets/socials/linkedin.svg" />
                </a>
              </div>
            </div>
            <p className="lg:hidden text-sm text-gray-500">All rights reserved. © Plain Inc.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Success