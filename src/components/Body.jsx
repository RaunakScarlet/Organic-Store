
import CustomerReviewsSection from "./CustomerReviewsSection";
import FreshSection from './FreshSection';
import MainContent from './MainContent';
import SellingBanner from './SellingBanner';
import ShippingSection from './ShippingSection';
const Body = () => {
    return <div>
        <MainContent />
        <ShippingSection />
        <SellingBanner />
        <FreshSection />
        <CustomerReviewsSection/>
  </div>;
}

export default Body
