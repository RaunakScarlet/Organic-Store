
const ShippingSection = () => {
    return (
        <div className="bg-[#111111] w-full h-52 mb-12 flex gap-6 p-4 justify-center items-center">
            <div className="bg-[#303030] w-72 rounded h-32 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-truck text-2xl text-[#8BC24A] "></i>
                    <p className="text-2xl text-white">Free Shipping</p>
                </div>
                <div className="down">
                    <p className="text-md text-white">Above $5 only</p>
                </div>
            </div>
            <div className="bg-[#303030] w-72 rounded h-32 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-address-book text-2xl text-[#8BC24A]"></i>

                    <p className="text-xl text-white">Certified Organic</p>
                </div>
                <div className="down">
                    <p className="text-md text-white">100% Guarantee</p>
                </div>
            </div>
            <div className="bg-[#303030] w-72 rounded h-32 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-money-bill text-2xl text-[#8BC24A] "></i>

                    <p className="text-2xl text-white">Huge Savings</p>
                </div>
                <div className="down">
                    <p className="text-md text-white">Lowest Price</p>
                </div>
            </div>
            <div className="bg-[#303030] w-72 rounded h-32 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-recycle text-2xl text-[#8BC24A] "></i>

                    <p className="text-2xl text-white">Easy Returns</p>
                </div>
                <div className="down">
                    <p className="text-md text-white">No Questions </p>
                </div>
            </div>
        </div>
    );
}

export default ShippingSection
