import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+$/.test(email)) {
      errors.email = "Invalid email";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (password !== repeatPassword) {
      errors.passwordConfirm = "Passwords do not match";
    }
    if (Object.keys(errors).length > 0) {
      // Form is invalid, show the errors
      alert(JSON.stringify(errors));
      return;
    }

    // Nu har vi ingen riktig autentisering,
    // så för att simulera kör vi en kort timeout
    // och sedan navigerar användaren
    setTimeout(() => navigate("/success"), 2000);
  };

  return (
    <div>
      <nav className="px-10 py-10 bg-indigo-500">
        <div className="flex justify-between items-center">
          <button>
            <svg
              className="block text-indigo-50 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <a className="text-white text-2xl leading-none" href="#">
            <img
              className="h-8"
              src="plain-assets/logos/plain-light.svg"
              alt=""
              width="auto"
            />
          </a>
          <button className="block navbar-burger text-indigo-50 hover:text-indigo-200 focus:outline-none">
            <svg
              className="h-4 w-4"
              fill="currentColor "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-12">
              <a
                className="mr-auto text-2xl font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-8"
                  src="plain-assets/logos/plain-indigo.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 cursor-pointer hover:text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    Company
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-5 py-3 mb-3 text-sm text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  className="block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                  href="#"
                >
                  Sign up
                </a>
              </div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2022 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </nav>

      <section className="relative py-20">
        <div className="absolute top-0 left-0 lg:bottom-0 h-96 lg:h-auto w-full lg:w-8/12 bg-indigo-500"></div>
        <div className="relative container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2 className="mb-6 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading text-white">
                  Lorem ipsum dolor sit amet consectutar domor at elis
                </h2>
                <p className="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-indigo-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:max-w-md p-6 bg-gray-50 text-center rounded-lg">
                <form onSubmit={handleSubmit}>
                  <span className="text-sm text-gray-500 font-semibold uppercase">
                    Sign Up
                  </span>
                  <h3 className="mb-8 text-2xl font-bold font-heading">
                    Create new account
                  </h3>
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="E-mail address"
                  />
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    type="password"
                    placeholder="Repeat password"
                  />
                  <label className="inline-block mb-4">
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      value="1"
                    />
                    <span className="text-sm text-gray-500">
                      By signing up, you agree to our{" "}
                      <a className="font-bold hover:underline" href="#">
                        Terms, Data Policy
                      </a>{" "}
                      and{" "}
                      <a className="font-bold hover:underline" href="#">
                        Cookies Policy
                      </a>
                      .
                    </span>
                  </label>
                  <input
                    type="submit"
                    title="Sign up"
                    className="block w-full px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <a className="text-gray-600 text-2xl leading-none" href="#">
                <img
                  className="h-8"
                  src="plain-assets/logos/plain-indigo.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <p className="mt-5 mb-6 max-w-xs text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div>
                <a className="inline-block h-6 mr-8" href="#">
                  <img
                    className="mx-auto"
                    src="plain-assets/socials/facebook.svg"
                  />
                </a>
                <a className="inline-block h-6 mr-8" href="#">
                  <img
                    className="mx-auto"
                    src="plain-assets/socials/github.svg"
                  />
                </a>
                <a className="inline-block h-6 mr-8" href="#">
                  <img
                    className="mx-auto"
                    src="plain-assets/socials/instagram.svg"
                  />
                </a>
                <a className="inline-block h-6 mr-8" href="#">
                  <img
                    className="mx-auto"
                    src="plain-assets/socials/linkedin.svg"
                  />
                </a>
                <a className="inline-block h-6" href="#">
                  <img
                    className="mx-auto"
                    src="plain-assets/socials/twitter.svg"
                  />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <div className="flex flex-wrap justify-between">
                <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                  <h3 className="mb-6 text-lg font-bold font-heading">
                    Company
                  </h3>
                  <ul className="text-sm">
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Press
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                  <h3 className="mb-6 text-lg font-bold font-heading">Pages</h3>
                  <ul className="text-sm">
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Login
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Register
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Add list
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
                  <h3 className="mb-6 text-lg font-bold font-heading">Legal</h3>
                  <ul className="text-sm">
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Terms
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 lg:w-1/4">
                  <h3 className="mb-6 text-lg font-bold font-heading">
                    Resources
                  </h3>
                  <ul className="text-sm">
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Service
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-indigo-500 hover:text-indigo-700"
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8">
            <p className="lg:text-center text-sm text-gray-500">
              All rights reserved. © Plain Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
