import basilLeaf from "../assets/basil-leaf.png";
import lemon from "../assets/product11-free-img.jpg";
import pulse from "../assets/product17-free-img.jpg";
import cabbage from "../assets/product13-free-img.jpg";

const FreshSection = () => {
    return (
        <div className="w-full relative bg-[#F8F6F2] flex flex-col items-center mt-20  ">
            <img
                src={basilLeaf}
                alt="basilLeaf"
                className="absolute -top-10  w-[12rem]"
            />
            <div className="py-28 grid  grid-cols-1 md:grid-cols-3 items-center  gap-8 md:gap-8 mx-4">
                <div className="bg-white w-auto    h-[23rem] rounded-md shadow-md  flex flex-col  overflow-hidden border-2 relative ">
                    <div className="p-4 relative z-10  ">
                        <h3 className="font-bold text-3xl  py-2 ">
                            Farm Fresh Fruits
                        </h3>
                        <p>
                            Ut sollicitudin quam vel purus tempus, vel eleifend
                            felis varius.
                        </p>
                        <button className="bg-[#60a610] w-40 h-12 mt-6 text-white rounded">
                            <span className="">SHOP NOW</span>
                            <i className="fa-solid fa-arrow-right ml-4"></i>
                        </button>
                    </div>
                    <img
                        src={lemon}
                        alt="lemon"
                        className=" absolute w-72 right-4 top-2 md:top-20 lg:top-0 "
                    />
                </div>
                <div className="bg-white w-auto  h-[23rem] rounded-md shadow-md  flex flex-col  overflow-hidden  border-2 relative ">
                    <div className="p-4 relative z-10  ">
                        <h3 className="font-bold text-3xl  py-2 ">
                            Fresh Vegetables
                        </h3>
                        <p>
                            Aliquam porta justo nibh, id laoreet sapien sodales
                            vitae justo.
                        </p>
                        <button className="bg-[#60a610] w-40 h-12 mt-6 text-white rounded">
                            <span className="">SHOP NOW</span>
                            <i className="fa-solid fa-arrow-right ml-4"></i>
                        </button>
                    </div>
                    <img
                        src={cabbage}
                        alt="cabbage"
                        className=" absolute w-72 right-4 top-2 md:top-20 lg:top-0 "
                    />
                </div>

                <div className="bg-white w-auto  h-[23rem] rounded-md shadow-md  flex flex-col  overflow-hidden  border-2 relative  ">
                    <div className="p-4 relative z-10  ">
                        <h3 className="font-bold text-3xl  py-2 ">
                            Organic Legume
                        </h3>
                        <p>
                            Phasellus sed urna mattis, viverra libero sed,
                            aliquam est.
                        </p>
                        <button className="bg-[#60a610] w-40 h-12 mt-6 text-white rounded">
                            <span className="">SHOP NOW</span>
                            <i className="fa-solid fa-arrow-right ml-4"></i>
                        </button>
                    </div>
                    <img
                        src={pulse}
                        alt="pulse"
                        className=" absolute w-72 right-4 top-2 md:top-20 lg:top-0 "
                    />
                </div>

               
            </div>
            <div className="w-full min-h-32  px-4 sm:px-10 md:px-16  bg-black flex justify-between items-center ">
                <h2 className="md:text-2xl lg:text-4xl text-white">
                    Get 25% Off On Your First Purchase!
                </h2>
                <button className="bg-[#60a610] w-40 h-8 sm:h-12  text-white rounded">
                    <span className="text-xs sm:text-xl">SHOP NOW</span>
                    <i className="fa-solid fa-arrow-right ml-4 text-xs sm:text-xl"></i>
                </button>
            </div>
            <div className="w-full h-24 flex items-center justify-center bg-white">
                <h1 className="text-md sm:text-lg md:text-2xl lg:text-3xl  font-bold text-black">
                    Try It For Free. No Registration Needed.
                </h1>
            </div>
        </div>
    );
}

export default FreshSection
