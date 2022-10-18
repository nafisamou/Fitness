import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
        <div className="text-center shadow-xl w-96 m-auto">
        <h1 className="text-3xl font-mono bg-indigo-600 text-white w-96 m-auto text-center p-3 rounded-full mt-5">Interview Questions</h1>
        </div>
      <div className="bg-indigo-400 p-5 m-4 rounded-md mt-12 mb-12 shadow-xl">
        <div className="shadow-2xl p-5 bg-white">
          <p>
            <span className="font-bold text-2xl block">
              1. How does react Work?
            </span>
            <li>
              React uses a declarative paradigm that makes it easier to reason
              about your application and aims to be both efficient and flexible.{" "}
            </li>{" "}
            <li>
              It designs simple views for each state in your application, and
              React will efficiently update and render just the right component
              when your data changes.{" "}
            </li>
            <li>
              A React application is made of multiple components, each
              responsible for rendering a small, reusable piece of HTML.
              Components can be nested within other components to allow complex
              applications to be built out of simple building blocks. A
              component may also maintain an internal state for example, a
              TabList component may store a variable corresponding to the
              currently open tab.
            </li>
            <li>
              {" "}
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. ReactJS is an open-source,
              component-based front end library responsible only for the view
              layer of the application. It is maintained by Facebook.
            </li>
          </p>
        </div>
        <div className="shadow-2xl p-5 bg-white mt-5">
          <p>
            <span className="font-bold text-2xl block">
              2. Difference between props & state?
            </span>
            <li>
              The state is an updatable structure that is used to contain data
              or information about the component and can change over time. The
              change in state can happen as a response to user action or system
              event. It is the heart of the react component which determines the
              behavior of the component and how it will render. A state must be
              kept as simple as possible. It represents the component's local
              state or information. It can only be accessed or modified inside
              the component or by the component directly.{" "}
            </li>{" "}
            <li>
              Props are read-only components. It is an object which stores the
              value of attributes of a tag and work similar to the HTML
              attributes. It allows passing data from one component to other
              components. It is similar to function arguments and can be passed
              to the component the same way as arguments passed in a function.
              Props are immutable so we cannot modify the props from inside the
              component.
            </li>
          </p>
        </div>
        <div className="shadow-2xl p-5 bg-white mt-5">
          <p>
            <span className="font-bold text-2xl block">
              2. Without loading data, What are the rest purposes of using UseEffect hook in react?
            </span>
            <li>
             If we pass dependencies to useEffect hook, then useEffect will executed every time when the variables which we passed to dependency array .
            </li>{" "}
            <li>
            We should useEffect, when your component depends on the outside world data, and we can not guarantee that data will come or not (maybe the server is down there).  So, Instead of throwing errors and stop other components from being rendered, move them into useEffect hook.
            </li>{" "}
            <li>
            If we pass an empty array to useEffect then our component will be rendered for first time when a component is rendered. To re-call useEffect hook we have to refresh our page.
            </li>
            <li>
            With useEffect, you can handle lifecycle events directly inside function components. Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount.
            </li>
          </p>
        </div>
      </div>
      <footer className="footer p-10 bg-base-300 mt-6 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a href="./" className="link link-hover">
            Branding
          </a>
          <a href="./" className="link link-hover">
            Design
          </a>
          <a href="./" className="link link-hover">
            Marketing
          </a>
          <a href="./" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="./" className="link link-hover">
            About us
          </a>
          <a href="./" className="link link-hover">
            Contact
          </a>
          <a href="./" className="link link-hover">
            Jobs
          </a>
          <a href="./" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="./">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="./">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
