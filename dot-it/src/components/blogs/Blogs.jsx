
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsPage = ({ activeCategory = "All", searchTerm = "", limit = "6" }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/data/blogs.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setBlogs(data.blogs);
            })
            .catch((err) => {
                console.error("Failed to load case blogs", err);
            });
    }, []);
    //search and industry based filtering 

    const filteredCaseStudies = blogs.filter((card) => {
        const matchesCategory =
            activeCategory === "All" || card.industry === activeCategory;

        const matchesSearch =
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.industry.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;



    });

    // Control Case study cards 
    const visibleCaseStudies = filteredCaseStudies.slice(0, limit);
    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCaseStudies.map((card) => (
                <Link key={card.id} to={`/blogs/${card.slug}`}>
                    <div className="h-100 group p-3 rounded-xl border border-[#EDEDED] transition-all duration-400 hover:shadow-[0_0_4px_6px_#EAF4FF] hover:border-[#0160C9] flex flex-col items-start justify-between gap-4">
                        <div className="w-full overflow-hidden rounded-lg">
                            <img className=" object-cover w-full h-auto group-hover:scale-105 transition-all duration-400" src={card.thumbnail} alt={card.slug} width={385} height={240} loading="lazy" />
                        </div>
                        <div className="mb-1 flex items-center justify-between w-full text-sm font-semibold leading-5 text-[#0160c9]" >
                            <span >{card.industry}</span>
                            <time datetime={card.publishedAt} >{card.publishedAt}</time>

                        </div>
                        <div className="flex flex-col items-start gap-2 w-full">
                            <div className="flex items-center justify-between gap-4 w-full">
                                <h3 className="text-lg font-medium leading-7 text-[#101828] line-clamp-2">{card.title}</h3>
                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#181D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                            </div>
                            <p className="text-sm leading-5 text-[#475467] line-clamp-2 ">{card.shortDescription}</p>
                        </div>
                        <span className="rounded-md px-1.5 py-0.5 border border-[#F3F3F3] text-sm font-medium leading-5 text-[#535862]">#{card.industry}</span>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default BlogsPage
