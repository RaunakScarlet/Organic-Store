import Logo from "../assets/Logo0.svg";
import playstore from "../assets/play-store.png";
import appstore from "../assets/app-store.png";


const Footer = () => {
    return (
        <div className="w-full h-auto pb-10 bg-[#1d3174f4] text-white pt-16">
            <div className="h-[84%] grid grid-cols-1 md:grid-cols-3 justify-between px-16 gap-20 mb-12  ">
                <div>
                    <img
                        src={Logo}
                        alt="organic-store-logo"
                        className="w-40 h-20"
                    />
                    <h3 className="text-lg pt-8 text-[#97999b]">
                        Maecenas mi justo, interdum at consectetur vel,
                        tristique et arcu. Ut quis eros blandit, ultrices diam
                        in, elementum ex. Suspendisse quis faucibus urna.
                        Suspendisse pellentesque.
                    </h3>
                </div>
                <div className="w-1/3  flex flex-col gap-12 ">
                    <div>
                        <h3 className="text-2xl"> Quick Links</h3>
                        <ul className="text-[#97999b] pt-5 text-lg">
                            <li>About</li>
                            <li>Cart</li>
                            <li>Checkout</li>
                            <li>Contact</li>
                            <li>Home</li>
                            <li>My Account</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl">Site Links</h3>
                        <ul className="text-[#97999b] pt-5 text-lg">
                            <li>Privacy Policy</li>
                            <li>Shipping Details</li>
                            <li>Offers Coupons</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-12">
                    <div>
                        <h3 className="text-2xl"> Download Our Mobile App</h3>
                        <p className="text-[#97999b] pt-5 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec aliquam gravida sollicitudin. Praesent
                            porta enim mi, non tincidunt libero interdum sit
                            amet.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Quick Links</h3>
                        <ul className="text-[#97999b] pt-5 text-lg">
                            <li>Know More About Us</li>
                            <li>Visit Store</li>
                            <li>Let’s Connect</li>
                            <li>Locate Stores</li>
                        </ul>
                        <div className="flex gap-4 mt-4 flex-col ">
                            <img
                                src={playstore}
                                alt="playstore"
                                className="w-36 h-12"
                            />
                            <img
                                src={appstore}
                                alt="appstore"
                                className="w-36 h-12"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[16%] text-[#97999b] flex justify-between px-14  gap-4 items-center border-t-2 border-opacity-20 border-slate-400">
                <h3 className="text-[#97999b] pt-5 text-lg ">
                    Copyright © 2024 | Organic Store
                </h3>
                <div className="flex gap-6  text-[#97999b] pt-5 text-lg">
                    <div>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
