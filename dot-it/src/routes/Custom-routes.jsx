import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import WhyDotPage from "../pages/whydot";
import RequestDemo from "../pages/Resources/request-a-demo";
import PricePage from "../pages/Resources/pricing";
import ContactUs from "../pages/Resources/contact";
import CaseStudiesPage from "../pages/Resources/case studies/CaseStudyPage";
import CaseStudyDetail from "../pages/Resources/case studies/CaseStudyDetails";
import Blogspage from "../pages/Resources/Blogs";
import BlogsDetailPage from "../pages/Resources/Blogs/BlogsDetailPage";
import Careers from "../pages/career";
import TermsConditions from "../pages/terms-&-conditions";
import PrivaceyPolicey from "../pages/privacy-policy/indec";


export default function CustomRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/why-dot-it" element={<WhyDotPage />} />
                <Route path="/request-a-demo" element={<RequestDemo />} />
                <Route path="/pricing" element={<PricePage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/blogs" element={<Blogspage />} />
                <Route path="/blogs/:slug" element={<BlogsDetailPage />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/terms-of-services" element={<TermsConditions />} />
                <Route path="/privacy-policey" element={<PrivaceyPolicey />} />
            </Routes>
        </>
    )
} 