
const ShippingSection = () => {
    return (
        <div className="bg-[#111111] max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto   gap-6 p-6 justify-center items-center">
            <div className="bg-[#303030] w-full rounded h-20 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-truck text-lg text-[#8BC24A] "></i>
                    <p className="text-lg text-white">Free Shipping</p>
                </div>
                <div className="down">
                    <p className="text-sm text-white">Above $5 only</p>
                </div>
            </div>
             <div className="bg-[#303030] w-full rounded h-20 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-address-book text-lg text-[#8BC24A]"></i>

                    <p className="text-lg text-white">Certified Organic</p>
                </div>
                <div className="down">
                    <p className="text-sm text-white">100% Guarantee</p>
                </div>
            </div>
             <div className="bg-[#303030] w-full rounded h-20 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-money-bill text-lg text-[#8BC24A] "></i>

                    <p className="text-lg text-white">Huge Savings</p>
                </div>
                <div className="down">
                    <p className="text-sm text-white">Lowest Price</p>
                </div>
            </div>
             <div className="bg-[#303030] w-full rounded h-20 flex  flex-col justify-center items-center">
                <div className="up flex items-center gap-4">
                    <i className="fa-solid fa-recycle text-lg text-[#8BC24A] "></i>

                    <p className="text-lg text-white">Easy Returns</p>
                </div>
                <div className="down">
                    <p className="text-sm text-white">No Questions </p>
                </div>
            </div>
        </div>
    );
}

export default ShippingSection
