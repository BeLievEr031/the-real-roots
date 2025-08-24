import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import LogoImg from "../assets/logo.svg"
import AppStore from "../assets/appstore.png"
import PlayStore from "../assets/googleplay.png"
import LinkItem from "../components/Link";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-[#e9f4ef] px-6 md:px-16 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                {/* Left section */}
                <div>
                    <div className="flex items-center space-x-2 mb-6">
                        <img src={LogoImg} alt="RealRoots Logo" className="w-40" />
                        {/* <span className="font-bold text-lg">realroots</span> */}
                    </div>
                    <h2 className="text-4xl font-dm-sans mb-2">Stay in <span className="italic font-normal font-playfair inline-block">touch</span></h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Not ready to commit, but want to stay in touch? Sign up for our mailing list
                        and we’ll keep you updated on new city launches, series dates, and more.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
                        Subscribe
                    </button>
                </div>

                {/* Middle links */}
                <div className="md:pl-28 grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="space-y-2 text-[18px]">
                        <p>
                            <LinkItem label="Join in your city" href="#" />
                        </p>
                        <p>
                            <LinkItem label="Become a guide" href="become-a-guide" />
                        </p>
                        <p>
                            <LinkItem label="Request new city" href="request-new-city" />
                        </p>
                    </div>
                    <div className="space-y-2 pl-15 text-[18px]">
                        <p>
                            <LinkItem label="FAQ" href="faq" />
                        </p>
                        <p>
                            <LinkItem label="About us" href="about" />
                        </p>
                        <p>
                            <LinkItem label="Gift cards" href="https://app.cardivo.com/giftcards/realroots" />
                        </p>
                    </div>
                </div>

                {/* Right side - Socials & App Links */}
                <div className="flex flex-col items-start md:items-end space-y-4">
                    <div className="flex space-x-4 text-2xl text-gray-700">
                        <Link to="https://www.instagram.com/realrootsgals/">
                            <FaInstagram />
                        </Link>
                        <Link to="https://www.tiktok.com/@realrootsgals"><FaTiktok /></Link>
                        <Link to="https://www.linkedin.com/company/therealroots/"><FaLinkedin /></Link>
                    </div>
                    <div className="space-y-3 mt-10">
                        <img src={AppStore} alt="App Store" className="w-28" />
                        <img src={PlayStore} alt="Google Play" className="w-28" />
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-300 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                <p>© 2025 RealRoots. All rights reserved.</p>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <a href="#">Contact us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}
