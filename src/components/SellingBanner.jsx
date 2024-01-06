import twig from "../assets/main-right.png";
import coffee from "../assets/coffee-asorted-300x300.jpg";
import oil from "../assets/edible-oil-300x300.jpg";
import sanetizer from "../assets/sanitizer-300x300.jpg";
import chili from "../assets/red-chillies-300x300.jpg";

const SellingBanner = () => {
    return (
        <div className=" w-full h-screen pt-32 flex flex-col items-center">
            <h1 className="text-4xl text-center font-bold">
                Best Selling Products
            </h1>
            <img className="w-[5rem] pt-6 " src={twig} alt="twig" />
            <div className="flex gap-6 mt-10">
                <div className="flex flex-col items-center">
                    <img className="mb-4"  src={coffee} alt="coffee" />
                    <p>Groceries</p>
                    <h4 className="font-bold text-md">Assorted Coffee</h4>
                    <p className="text-2xl">✩✩✩✩✩</p>
                    <p className="font-bold text-md">$35.00</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="mb-4" src={sanetizer} alt="sanetizer" />
                    <p>Groceries</p>
                    <h4 className="font-bold text-md">Hand Sanetizer</h4>
                    <p className="text-2xl">✩✩✩✩✩</p>
                    <p className="font-bold text-md">$15.00</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="mb-4" src={chili} alt="chili" />
                    <p>Groceries</p>
                    <h4 className="font-bold text-md">
                        Hand Picked Red Chilies
                    </h4>
                    <p className="text-2xl">✩✩✩✩✩</p>
                    <p className="font-bold text-md"> $19.00</p>
                </div>

                <div className="flex flex-col items-center">
                    <img className="mb-4" src={oil} alt="oil" />
                    <p>Groceries</p>
                    <h4 className="font-bold text-md">
                        Natural Extracted Edible oil
                    </h4>
                    <p className="text-2xl">✩✩✩✩</p>
                    <div>
                        <span className="line-through text-md">
                            $34.00
                        </span>{" "}
                        <span className="font-bold text-md">$25.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellingBanner
