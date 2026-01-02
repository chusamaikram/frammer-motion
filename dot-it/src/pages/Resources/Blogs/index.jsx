import Searchbar from "../../../components/case studies/Searchbar";
import MainHeading from "../../../components/common/MainHeading";
import Blogs from "../../../assets/images/blogs.webp";
import blog2 from "../../../assets/images/blog2.webp";
import { Link } from "react-router-dom"
import Pagination from "../../../components/common/Pagination";
import { useEffect, useState } from "react";
import FilterButtons from "../../../components/case studies/FilterButtons";
import BlogsPage from "../../../components/blogs/Blogs";
import usePageTitle from "../../../hooks/usePageTitle";


const Filters = [
    "All",
    "AI/Technology",
    "Intelligence",
    "Automation",
    "Sales",
    "Productivity",
    "Engagement",
    "Strategy",
    "Data"
]
export default function Blogspage() {
        usePageTitle("Blogs | Dot it")

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
   


    const handleClick = (category) => {
        setActiveCategory(category);
        onChange(category); // pass value to parent
    };

    return (
        <>
            <section className="mt-[71px] py-20 bg-[#F5F5F5]">
                <div className="container">
                    <MainHeading coloredText="dot.it" AfterColoredtext="News & Insights"
                        desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
                        className="max-w-[560px]"
                        descStyle="text-center" />
                    <div className="mt-8 flex items-center justify-center">
                        <form className="flex items-center gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input type="email"
                                className="py-2 px-4 w-[318px] h-[48px] bg-white rounded-2xl text-base leading-6 text-[#ABAFB1] outline-none"
                                placeholder="Enter your email "
                            />
                            <button className="py-3.5 px-5 bg-[#0160C9] rounded-full text-white text-sm font-medium cursor-pointer " type="submit">Subscribe</button>

                        </form>

                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center justify-between ">
                        <h2 className="text-2xl sm:text-4xl leading-7 sm:leading-11 font-semibold">Featured Articles</h2>
                        <Searchbar placeholder="Search for news or articles" />
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-[minmax(100px,592px)_minmax(100px,664px)] gap-6">
                        <Link className="w-full" to="" aria-label="blog card">
                            <div className="h-[460px] p-3 group rounded-xl border border-[#EDEDED] transition-all duration-400 hover:shadow-[0_0_3px_6px_#EAF4FF] hover:border-[#0160C9] flex flex-col items-center gap-4">
                                <div className="w-full overflow-hidden rounded-lg">
                                    <img className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-400 " src={Blogs} alt="" width={568} height={240} loading="lazy" />
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <div className="text-sm font-semibold leading-5 text-[#0160C9] flex items-center gap-1">
                                        <span >dot.it</span>
                                        <span className="w-1 h-1 rounded-full bg-[#0160C9]"></span>
                                        <time datetime="29 October 2025">29 October 2025</time>
                                    </div>
                                    <div className="flex flex-col items-start text-start gap-2 w-full">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-lg font-medium leading-7 text-[#101828] group-hover:text-[#0160C9] ">The Transformative Power of Artificial Intelligence in Today’s World</h3>
                                            <svg className="stroke-[#181D27] group-hover:stroke-[#0160C9]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>
                                        <p className="text-sm leading-5 text-start text-[#475467]">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                    </div>
                                    <div className="">
                                        <span className="rounded-md px-1.5 py-0.5 border border-[#F3F3F3] text-sm font-medium leading-5 text-[#535862]">#Sales</span>
                                        <span className="ms-[85px] rounded-md px-1.5 py-0.5 border border-[#F3F3F3] text-sm font-medium leading-5 text-[#535862]">#technology</span>
                                    </div>
                                </div>

                            </div>
                        </Link>
                        <div className="flex flex-col items-center gap-6 h-[460px]">
                            <Link className="w-full" to="" aria-label="blog card">
                                <div className="group w-full p-3 rounded-xl border border-[#EDEDED] transition-all duration-400 hover:shadow-[0_0_3px_6px_#EAF4FF] hover:border-[#0160C9] grid grid-cols-[minmax(100px,204px)_minmax(100px,420px)] gap-4 items-center">
                                    <div className="overflow-hidden w-full rounded-lg">
                                        <img className="w-full  h-full object-cover group-hover:scale-105  transition-all duration-400" src={blog2} alt="" width={204} height={194} loading="lazy" />
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="text-sm font-semibold leading-5 text-[#0160C9] flex items-center gap-1">
                                            <span >dot.it</span>
                                            <span className="w-1 h-1 rounded-full bg-[#0160C9]"></span>
                                            <time datetime="29 October 2025">18 September 2025</time>
                                        </div>
                                        <div className="flex flex-col items-start text-start gap-2 w-full">
                                            <div className="flex items-start justify-between gap-4">
                                                <h3 className="text-lg font-medium leading-7 text-[#101828] group-hover:text-[#0160C9] line-clamp-2">The Transformative Power of Artificial Intelligence in Today’s World </h3>
                                                <span>
                                                    <svg className="stroke-[#181D27] group-hover:stroke-[#0160C9]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>

                                            </div>
                                            <p className="text-sm leading-5 text-start text-[#475467] line-clamp-2">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                        </div>
                                        <span className="rounded-md px-1.5 py-0.5 border border-[#F3F3F3] text-sm font-medium leading-5 text-[#535862]">#technology</span>

                                    </div>

                                </div>
                            </Link>
                            <Link className="w-full" to="" aria-label="blog card">
                                <div className="group w-full p-3 rounded-xl border border-[#EDEDED] transition-all duration-400 hover:shadow-[0_0_3px_6px_#EAF4FF] hover:border-[#0160C9] grid grid-cols-[minmax(100px,204px)_minmax(100px,420px)] gap-4 items-center">
                                    <div className="overflow-hidden w-full rounded-lg">
                                        <img className="w-full  h-full object-cover group-hover:scale-105  transition-all duration-400" src={blog2} alt="" width={204} height={194} loading="lazy" />
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="text-sm font-semibold leading-5 text-[#0160C9] flex items-center gap-1">
                                            <span >dot.it</span>
                                            <span className="w-1 h-1 rounded-full bg-[#0160C9]"></span>
                                            <time datetime="29 October 2025">18 September 2025</time>
                                        </div>
                                        <div className="flex flex-col items-start text-start gap-2 w-full">
                                            <div className="flex items-start justify-between gap-4">
                                                <h3 className="text-lg font-medium leading-7 text-[#101828] group-hover:text-[#0160C9] line-clamp-2">The Transformative Power of Artificial Intelligence in Today’s World </h3>
                                                <span>
                                                    <svg className="stroke-[#181D27] group-hover:stroke-[#0160C9]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>

                                            </div>
                                            <p className="text-sm leading-5 text-start text-[#475467] line-clamp-2">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                        </div>
                                        <span className="rounded-md px-1.5 py-0.5 border border-[#F3F3F3] text-sm font-medium leading-5 text-[#535862]">#technology</span>

                                    </div>

                                </div>
                            </Link>
                        </div>

                    </div>
                    <Pagination
                        currentPage={page}
                        totalPages={10}
                        onPageChange={setPage}
                    />
                </div>
            </section>
            <section className="py-10">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <h2 className="text-4xl font-semibold leading-11 text-[#141219]">Blogs</h2>
                        <Searchbar
                            searchTerm={search}
                            setSearchTerm={setSearch}
                            placeholder="Search for blogs or tags" />
                    </div>
                    <FilterButtons
                        categories={Filters}
                        handleClick={handleClick}
                        activeCategory={activeCategory}
                    />
                    <BlogsPage
                        activeCategory={activeCategory}
                        searchTerm={search}
                    />
                    <Pagination
                        currentPage={page}
                        totalPages={10}
                        onPageChange={setPage} />


                </div>
            </section>
        </>
    )
}