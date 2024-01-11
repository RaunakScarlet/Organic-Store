import mainLeft from "../assets/main-left.png";
import mainRightBottom from "../assets/leaves-free-img.png";
import mainRight from "../assets/main-right.png";

const MainContent = () => {
    return (
        <section className="main w-full h-[42rem] sm:h-[40rem] md:h-[36rem]   flex  bg-[#FBFAF9] items-center gap-16 md:gap-24 flex-col-reverse md:flex-row relative   ">
            <img
                src={mainRightBottom}
                alt="mainRightBottom"
                className="absolute bottom-0 right-0 lg:h-64  sm:h-48 h-36 opacity-30   sm:block hidden "
            />
            <div className="main-left md:w-1/2  ">
                <img
                    src={mainLeft}
                    alt="mainLeft"
                    className="border-2 w-60 md:w-[38rem]"
                />
            </div>
            <div className="main-right flex flex-col gap-8 items-center justify-center md:items-start md:w-1/2  ">
                <img
                    src={mainRight}
                    alt="mainRight"
                    className="w-[4rem]  sm:w-[5rem] md:w-[6rem] lg:w-[7rem]"
                />
                <p className="font-bold text-md">Best Quality Products</p>
                <h2 className="text-3xl text-center font-bold md:text-5xl md:text-left">
                    Join The Organic Movement!
                </h2>
                <p className="text-md  text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                </p>
                <button className="bg-[#8BC24A] text-white w-28 h-10 rounded ">
                    SHOP NOW
                </button>
            </div>
        </section>
    );
};

export default MainContent;
