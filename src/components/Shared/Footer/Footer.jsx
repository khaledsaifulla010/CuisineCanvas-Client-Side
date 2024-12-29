import logo from "../../../assets/images/logo.png";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 rounded-xl mb-2 font-2">
      <footer className="footer text-base-content p-10">
        <aside className="text-white text-center">
          <img className="w-12 rounded-xl ml-[125px]" src={logo} />
          <p className="font-semibold text-2xl">
            CuisineCanvas
            <br />
            <span className="text-base">
              Where Flavors Become Culinary Art.
            </span>
          </p>
          <div className="flex items-center mx-auto gap-8 text-2xl">
            <FaSquareFacebook />
            <FaSquareTwitter />
            <FaYoutubeSquare />
          </div>
        </aside>
        <nav>
          <h6 className="text-slate-300 font-bold text-lg">Services</h6>
          <a className="link link-hover text-white font-semibold">Branding</a>
          <a className="link link-hover text-white font-semibold">Design</a>
          <a className="link link-hover text-white font-semibold">Marketing</a>
          <a className="link link-hover text-white font-semibold">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="text-slate-300 font-bold text-lg">Company</h6>
          <a className="link link-hover text-white font-semibold">About us</a>
          <a className="link link-hover text-white font-semibold">Contact</a>
          <a className="link link-hover text-white font-semibold">Jobs</a>
          <a className="link link-hover text-white font-semibold">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-slate-300 font-bold text-lg">Legal</h6>
          <a className="link link-hover text-white font-semibold">
            Terms of use
          </a>
          <a className="link link-hover text-white font-semibold">
            Privacy policy
          </a>
          <a className="link link-hover text-white font-semibold">
            Cookie policy
          </a>
        </nav>
        <form>
          <h6 className="text-slate-300 font-bold text-lg">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white font-semibold">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item font-bold text-base">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="divider divider-neutral p-8"></div>
      <p className="text-white font-semibold text-center p-4 -mt-4">
        Copyright © {new Date().getFullYear()} - All right reserved by
        CuisineCanvas Company Ltd.
      </p>
    </div>
  );
};

export default Footer;
