import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="">
                
    <section className="bg-indigo-500 pb-8">
      <div className="container px-4 mx-auto">
        <nav className="relative flex justify-between items-center py-8">
          <a className="text-gray-600 text-2xl leading-none" href="#">
            <img className="h-8" src="plain-assets/logos/plain-light.svg" alt="" width="auto" />
          </a>
          <div className="lg:hidden">
            <button className="block navbar-burger text-indigo-50 hover:text-indigo-200 focus:outline-none">
              <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex ml-auto mr-auto items-center w-auto space-x-12">
            <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">About</a></li>
            <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">Company</a></li>
            <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">Services</a></li>
            <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">Testimonials</a></li>
          </ul>
          <ul className="hidden lg:flex items-center w-auto space-x-8">
            <li><a className="text-sm text-indigo-50 hover:text-indigo-200 font-medium" href="#">Sign in</a></li>
            <li><a onClick={() => navigate("signup")} className="inline-block px-5 py-3 text-sm text-center bg-white hover:bg-indigo-50 text-indigo-500 font-semibold border border-white hover:border-indigo-50 rounded transition duration-200">Sign up</a></li>
          </ul>
        </nav>
        <div className="max-w-xl lg:max-w-4xl mx-auto text-center mt-16 mb-24">
          <span className="text-xs font-semibold text-indigo-50 uppercase">Develop your skill</span>
          <h2 className="mb-8 mt-2 text-white text-3xl leading-tight md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight font-bold font-heading">Take care of your performance every day.</h2>
          <a className="block md:inline-block px-5 py-3 text-sm text-center bg-white hover:bg-indigo-50 text-indigo-500 font-semibold border border-white hover:border-indigo-50 rounded transition duration-200" href="#">Try for Free</a>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 flex px-4 mb-8">
            <div className="mr-6">
              <svg className="text-white w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#F1F5FB"></path>
                <circle cx="24" cy="24" r="23.5" stroke="#E1E4E8"></circle>
              </svg>
            </div>
            <div className="w-2/3 mb-4">
              <h3 className="mb-2 text-xl lg:text-2xl text-white font-bold font-heading">Quick review</h3>
              <p className="text-lg text-indigo-50">We make sure you get feedback the same day.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 flex px-4 mb-8">
            <div className="mr-6">
              <svg className="text-white w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#F1F5FB"></path>
                <circle cx="24" cy="24" r="23.5" stroke="#E1E4E8"></circle>
              </svg>
            </div>
            <div className="w-2/3 mb-4">
              <h3 className="mb-2 text-xl lg:text-2xl text-white font-bold font-heading">Easy changes</h3>
              <p className="text-lg text-indigo-50">Options settings for customers convenience</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex px-4 mb-8">
            <div className="mr-6">
              <svg className="text-white w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z" fill="#F1F5FB"></path>
                <circle cx="24" cy="24" r="23.5" stroke="#E1E4E8"></circle>
              </svg>
            </div>
            <div className="w-2/3 mb-4">
              <h3 className="mb-2 text-xl lg:text-2xl text-white font-bold font-heading">Place storage</h3>
              <p className="text-lg text-indigo-50">Store projects in easily accessible catalogs</p>
            </div>
          </div>
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
            <div className="pt-6">
    <a className="block px-5 py-3 mb-3 text-sm text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200" href="#">Sign in</a><a className="block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200" href="#">Sign up</a>
    </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2022 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
              
    <footer className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <a className="text-gray-600 text-2xl leading-none" href="#">
              <img className="h-8" src="plain-assets/logos/plain-indigo.svg" alt="" width="auto" />
            </a>
            <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div>
              <a className="inline-block h-6 mr-8" href="#">
                <img className="mx-auto" src="plain-assets/socials/facebook.svg" />
              </a>
              <a className="inline-block h-6 mr-8" href="#">
                <img className="mx-auto" src="plain-assets/socials/github.svg" />
              </a>
              <a className="inline-block h-6 mr-8" href="#">
                <img className="mx-auto" src="plain-assets/socials/instagram.svg" />
              </a>
              <a className="inline-block h-6 mr-8" href="#">
                <img className="mx-auto" src="plain-assets/socials/linkedin.svg" />
              </a>
              <a className="inline-block h-6" href="#">
                <img className="mx-auto" src="plain-assets/socials/twitter.svg" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Company</h3>
                <ul className="text-sm">
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">About Us</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Careers</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Press</a></li>
                  <li><a className="text-indigo-500 hover:text-indigo-700" href="#">Blog</a></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Pages</h3>
                <ul className="text-sm">
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Login</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Register</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Add list</a></li>
                  <li><a className="text-indigo-500 hover:text-indigo-700" href="#">Contact</a></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-lg font-bold font-heading">Legal</h3>
                <ul className="text-sm">
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Terms</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">About Us</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Team</a></li>
                  <li><a className="text-indigo-500 hover:text-indigo-700" href="#">Privacy</a></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4">
                <h3 className="mb-6 text-lg font-bold font-heading">Resources</h3>
                <ul className="text-sm">
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Blog</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Service</a></li>
                  <li className="mb-4"><a className="text-indigo-500 hover:text-indigo-700" href="#">Product</a></li>
                  <li><a className="text-indigo-500 hover:text-indigo-700" href="#">Pricing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="lg:text-center text-sm text-gray-500">All rights reserved. © Plain Inc.</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Home