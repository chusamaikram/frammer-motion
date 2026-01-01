import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SocialShare from "../case studies/SocialShare";
import BlogsPage from "../../../components/blogs/Blogs";

export default function BlogsDetailPage() {
    const { slug } = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        fetch("/data/blogs.json")
            .then(res => res.json())
            .then(data => {
                const found = data.blogs.find(
                    (item) => item.slug === slug
                );
                setBlog(found);
            });
    }, [slug]);

    if (!blog) return null;
    return (
        <>
            <section className="mt-[71px] py-10 md:py-24">
                <div className="container">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex items-center gap-2">
                            <Link to="/" aria-label="home navigation">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66667 14.1682H13.3333M9.18141 2.30492L3.52949 6.70086C3.15168 6.99471 2.96278 7.14163 2.82669 7.32563C2.70614 7.48862 2.61633 7.67224 2.56169 7.86746C2.5 8.08785 2.5 8.32717 2.5 8.8058V14.8349C2.5 15.7683 2.5 16.235 2.68166 16.5916C2.84144 16.9052 3.09641 17.1601 3.41002 17.3199C3.76654 17.5016 4.23325 17.5016 5.16667 17.5016H14.8333C15.7668 17.5016 16.2335 17.5016 16.59 17.3199C16.9036 17.1601 17.1586 16.9052 17.3183 16.5916C17.5 16.235 17.5 15.7683 17.5 14.8349V8.8058C17.5 8.32717 17.5 8.08785 17.4383 7.86746C17.3837 7.67224 17.2939 7.48862 17.1733 7.32563C17.0372 7.14163 16.8483 6.99471 16.4705 6.70086L10.8186 2.30492C10.5258 2.07721 10.3794 1.96335 10.2178 1.91959C10.0752 1.88097 9.92484 1.88097 9.78221 1.91959C9.62057 1.96335 9.47418 2.07721 9.18141 2.30492Z" stroke="#A4A7AE" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </Link>
                            <span className="text-[#535862]">/</span>
                            <Link className="text-sm font-medium leading-5 text-[#535862]" to="/blogs">blogs</Link>
                            <span className="text-[#535862]">/</span>
                            <span className="inline-block text-sm md:text-base text-[#535862] max-w-[152px] overflow-hidden text-ellipsis whitespace-nowrap">{blog.title}</span>
                        </div>
                        <h1 className="max-w-[768px] text-center text-4xl md:text-[48px] font-semibold leading-15 text-[#181D27] ">{blog.title}</h1>

                    </div>
                    <div className="md:px-8">
                        <div className="blog-detail relative rounded-lg mt-8 md:mt-16 px-8 max-w-[1216px] w-full bg-center bg-no-repeat bg-cover overflow-hidden h-[300px] md:h-[540px]" style={{
                            backgroundImage: `url(${blog.thumbnail})`,
                        }}></div>
                    </div>
                </div>

            </section>
            <section className="mb-24">
                <div className="container">
                    <div className="flex flex-col items-start justify-center gap-9.5 max-w-[720px] mx-auto">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#373940]">Challenge:</h2>
                            <p className="mt-3  text-base sm:text-lg leading-6 sm:leading-7 text-start text-[#777B8B]">{blog.content.challenge}</p>
                        </div>
                        <div className="">
                            <h2 className="text-xl font-medium text-[#373940]">Key problems included: </h2>
                            <ul className="mt-3 flex flex-col items-start gap-2 list-disc">
                                {blog.content.problems.map((problem, index) => (
                                    <li key={index} className="text-base sm:text-lg leading-6 sm:leading-7 text-[#777B8B] ms-4 ">{problem}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h2 className="text-2xl font-semibold text-[#373940]">Solutions:</h2>
                            <p className="mt-3  text-base sm:text-lg leading-6 sm:leading-7 text-start text-[#777B8B] ">{blog.content.solution}</p>

                        </div>
                        <div className="">
                            <h2 className="text-2xl font-semibold text-[#373940]">How Dot.it Helped:</h2>
                            <ul className="mt-3 flex flex-col items-start gap-2 list-disc">
                                {blog.content.howDotItHelped.map((problem, index) => (
                                    <li key={index} className="text-base sm:text-lg leading-6 sm:leading-7 text-[#777B8B] ms-4 ">{problem}</li>
                                ))}
                            </ul>

                        </div>
                        <div className="grid sm:grid-cols-3 gap-8  max-w-[791px] w-full">
                            {blog.content.results.metrics.map((card, index) => (
                                <div key={index} className="p-6 rounded-xl bg-[#FDFDFD] border border-[#F5F5F5] flex flex-col items-start gap-4 w-full">
                                    <h3 className="text-2xl font-semibold leading-8 text-[#014DA1]">{card.value}</h3>
                                    <span className="text-base leading-6 text-[#5D606D]">{card.label}</span>
                                </div>
                            ))}

                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-[#373940]">Value Added:</h2>
                            <p className="mt-3  text-base sm:text-lg leading-6 sm:leading-7 text-start text-[#777B8B] ">{blog.content.valueAdded}</p>
                        </div>
                        <div className="mt-8 ">
                            <h2 className="text-xl font-semibold text-[#373940] leading-7.5">Share Blog</h2>
                            <SocialShare caseStudy={blog} />

                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl sm:text-4xl mb-6 md:sm-10 leading-11 font-semibold text-center">Read More Blogs</h2>
                    <BlogsPage limit="3" />
                </div>
            </section>
        </>
    )
}