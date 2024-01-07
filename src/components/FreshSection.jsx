import basilLeaf from "../assets/basil-leaf.png";
import lemon from "../assets/product11-free-img.jpg";
import pulse from "../assets/product17-free-img.jpg";
import cabbage from "../assets/product13-free-img.jpg";

const FreshSection = () => {
    return (
        <div className="w-full  relative bg-[#F8F6F2] flex flex-col items-center mt-20 ">
            <img
                src={basilLeaf}
                alt="basilLeaf"
                className="absolute -top-10  w-[12rem]"
            />
            <div className="py-28 flex gap-8">
                <div className="bg-white w-[23rem] h-[23rem] rounded-md shadow-md  flex flex-col relative overflow-hidden py-8 px-10">
                    <div className="relative z-10">
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
                        className=" absolute w-72 right-4 top-0   "
                    />
                </div>
                <div className="bg-white w-[23rem] h-[23rem] rounded-md shadow-md  flex flex-col relative overflow-hidden py-8 px-10">
                    <div className="relative z-10">
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
                        className=" absolute w-72 right-4 top-0   "
                    />
                </div>
                <div className="bg-white w-[23rem] h-[23rem] rounded-md shadow-md  flex flex-col relative overflow-hidden py-8 px-10">
                    <div className="relative z-10">
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
                        className=" absolute w-72 right-4 top-0   "
                    />
                </div>
            </div>
            <div className="w-full h-44 px-32 bg-black flex justify-between items-center ">
                <h2 className="text-4xl text-white">
                    Get 25% Off On Your First Purchase!
                </h2>
                <button className="bg-[#60a610] w-40 h-12  text-white rounded">
                    <span className="">SHOP NOW</span>
                    <i className="fa-solid fa-arrow-right ml-4"></i>
                </button>
            </div>
            <div className="w-full h-24 flex items-center justify-center bg-white" >
                <h1 className="text-3xl font-bold text-black">
                    Try It For Free. No Registration Needed.
                </h1>
            </div>
        </div>
    );
}

export default FreshSection
