
import { useEffect, useState } from "react";
import CaseStudies from "../../../components/case studies/CaseStudies";
import MainHeading from "../../../components/common/MainHeading";
import Searchbar from "../../../components/case studies/Searchbar";
import Pagination from "../../../components/common/Pagination";
import FilterButtons from "../../../components/case studies/FilterButtons";
import usePageTitle from "../../../hooks/usePageTitle";
const categories = [
    "All",
    "Finance",
    "Telecommunication",
    "Automotive",
    "Market Research",
    "Manufacturing",
    "Legal",
    "Aviation",
    "Consulting",
    "Anyone using email and CRM",
];

export default function CaseStudiesPage() {

usePageTitle("Case Studies | Dot it")

    const [page, setPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState("");

    const [activeCategory, setActiveCategory] = useState("All");



    const handleClick = (category) => {
        setActiveCategory(category);
        onChange(category); // pass value to parent
    };

    return (
        <>
            <section className="bg-[#FAFAFA] mt-[71px] py-20">
                <div className="container">
                    <MainHeading BeforeColoredtext="Success stories powered by " coloredText="dot.it"
                        desc="See how leading teams streamline their sales workflows with dot.it. Discover real success stories from companies transforming their inbox into a powerful CRM hub."
                        headingStyle="max-w-[500px] text-center"
                        descStyle="text-center"
                        className="max-w-[663px]"
                    />


                </div>
            </section>
            <section className="py-8 sm:py-20">
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap gap-y-4">
                        <h2 className="text-2xl md:text-4xl font-semibold leading-7 md:leading-11">Read by Industry</h2>
                        <Searchbar placeholder="Search for case studies"
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm} />
                    </div>

                    <FilterButtons
                        categories={categories}
                        handleClick={handleClick}
                        activeCategory={activeCategory}
                    />

                    <CaseStudies
                        activeCategory={activeCategory}
                        searchTerm={searchTerm}
                    />

                    <Pagination
                        currentPage={page}
                        totalPages={10}
                        onPageChange={setPage}
                    />



                </div>
            </section>
        </>
    )
}