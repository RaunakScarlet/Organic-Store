import mainLeft from "../assets/main-left.png";
import mainRightBottom from "../assets/leaves-free-img.png";
import mainRight from "../assets/main-right.png";

const MainContent = () => {
    return (
        <section className="main w-full h-auto py-10 flex bg-[#FBFAF9] items-center gap-16 px-8 ">
            <img
                src={mainRightBottom}
                alt="mainRightBottom"
                className="absolute bottom-0 right-0 h-64 opacity-30"
            />
            <div className="main-left w-1/2 ">
                <img src={mainLeft} alt="mainLeft" className="w-[45vw]" />
            </div>
            <div className="main-right flex flex-col gap-8 w-1/2">
                <img src={mainRight} alt="mainRight" className="w-[7rem]" />
                <p className="font-bold text-xl">Best Quality Products</p>
                <h2 className="text-7xl font-bold">
                    Join The Organic Movement!
                </h2>
                <p className="text-xl">
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
