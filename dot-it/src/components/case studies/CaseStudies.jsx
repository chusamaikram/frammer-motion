import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const CaseStudies = ({ activeCategory = "All", searchTerm = "", limit = "8" }) => {



    const [caseStudies, setCaseStudies] = useState([]);
    useEffect(() => {
        fetch("/data/caseStudies.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setCaseStudies(data.caseStudies);
            })
            .catch((err) => {
                console.error("Failed to load case studies", err);
            });
    }, []);


    //search and industry based filtering 

    const filteredCaseStudies = caseStudies.filter((card) => {
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
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleCaseStudies.map((card) => (
                <Link key={card.id} to={`/case-studies/${card.slug}`}>
                    <div className="h-[432px] group p-3 rounded-xl border border-[#EDEDED] transition-all duration-400 hover:shadow-[0_0_3px_6px_#EAF4FF] hover:border-[#0160C9] flex flex-col items-start justify-between gap-4">
                        <div className="w-full overflow-hidden rounded-lg">
                            <img className=" object-cover w-full h-auto group-hover:scale-105 transition-all duration-400" src={card.thumbnail} alt={card.slug} width={277} height={240} loading="lazy" />
                        </div>
                        <div className="mb-1 flex items-center justify-between w-full text-sm font-semibold leading-5 text-[#0160c9]" >
                            <span >{card.industry}</span>
                            <time datetime={card.publishedAt} >{card.publishedAt}</time>

                        </div>
                        <div className="flex flex-col items-start gap-2 w-full">

                            <h3 className="text-lg font-medium leading-7 text-[#101828] line-clamp-2">{card.title}</h3>
                            <p className="text-sm leading-5 text-[#475467] line-clamp-2 ">{card.shortDescription}</p>
                            <Link to={`/case-studies/${card.slug}`} className="mt-1 flex items-center gap-1 text-sm font-semibold leading-5 text-[#0160C9]">
                                Read more
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0160C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default CaseStudies
