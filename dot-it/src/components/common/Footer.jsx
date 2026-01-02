import { Link } from 'react-router-dom'
import FooterLogo from '../../assets/images/footer-logo.svg'
export default function Footer() {

    const FooterLinks = [
        {
            title: "Product",
            links: [
                {
                    name: "Plateform Overview",
                    path: "/product"
                },
                {
                    name: "Request a Demo",
                    path: "/request-a-demo"
                },
                {
                    name: "Why dot.it ",
                    path: "/why-dot-it"
                },
                {
                    name: "Pricing",
                    path: "/pricing"
                },

            ]
        },
        {
            title: "Company",
            links: [
                {
                    name: "Careers",
                    path: "/careers"
                },
                {
                    name: "FAQ",
                    path: "/careers#faq",
                },
            ]
        },
        {
            title: "Resources",
            links: [
                {
                    name: "Contact",
                    path: "/contact-us"
                },
                {
                    name: "Privacey Policy",
                    path: "/privacy-policey"
                },
                {
                    name: "Terms of Services",
                    path: "/terms-of-services"
                },

            ]
        },
        {
            title: "Support & Sales",
            links: [
                {
                    name: "support@gotdot.it",
                    path: "mailto:support@gotdot.it"
                },

                {
                    name: "ellew@gotdot.it",
                    path: "mailto:ellew@gotdot.it"
                },

            ]
        }
    ]
    return (
        <>
            <footer className="py-8" >
                <div className="container">
                    <div className="grid grid-cols-2 sm:sm:flex flex-wrap lg:flex-nowrap items-start gap-8 sm:gap-12.5 ">
                        <div className="col-span-2 lg:max-w-[480px] w-full flex flex-col items-start gap-4 text-[#131313]">
                            <img src={FooterLogo} alt="logo" width={102} height={36} />
                            <p className='text-base '>dot your i's and cross your t's</p>
                            <p className='text-start max-w-[200px]'> dot.it Technologies, Inc. Craig Ranch, McKinney, TX</p>
                            <a className='mt-2' href="https://www.linkdeln.com" target='blank' aria-label='linkdeln link'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#E6EFFA" />
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#B0CEEE" />
                                    <path d="M14.3618 12.125C13.9234 12.125 13.503 12.2991 13.1931 12.6091C12.8831 12.919 12.709 13.3394 12.709 13.7778C12.709 14.2161 12.8831 14.6365 13.1931 14.9465C13.503 15.2564 13.9234 15.4306 14.3618 15.4306C14.8001 15.4306 15.2205 15.2564 15.5305 14.9465C15.8404 14.6365 16.0145 14.2161 16.0145 13.7778C16.0145 13.3394 15.8404 12.919 15.5305 12.6091C15.2205 12.2991 14.8001 12.125 14.3618 12.125ZM12.8062 16.7917C12.7804 16.7917 12.7557 16.8019 12.7375 16.8201C12.7192 16.8384 12.709 16.8631 12.709 16.8889V27C12.709 27.0537 12.7525 27.0972 12.8062 27.0972H15.9173C15.9431 27.0972 15.9678 27.087 15.9861 27.0687C16.0043 27.0505 16.0145 27.0258 16.0145 27V16.8889C16.0145 16.8631 16.0043 16.8384 15.9861 16.8201C15.9678 16.8019 15.9431 16.7917 15.9173 16.7917H12.8062ZM17.8618 16.7917C17.836 16.7917 17.8112 16.8019 17.793 16.8201C17.7748 16.8384 17.7645 16.8631 17.7645 16.8889V27C17.7645 27.0537 17.8081 27.0972 17.8618 27.0972H20.9729C20.9987 27.0972 21.0234 27.087 21.0416 27.0687C21.0599 27.0505 21.0701 27.0258 21.0701 27V21.5556C21.0701 21.1688 21.2237 20.7978 21.4972 20.5244C21.7707 20.2509 22.1417 20.0972 22.5284 20.0972C22.9152 20.0972 23.2861 20.2509 23.5596 20.5244C23.8331 20.7978 23.9868 21.1688 23.9868 21.5556V27C23.9868 27.0537 24.0303 27.0972 24.084 27.0972H27.1951C27.2209 27.0972 27.2456 27.087 27.2638 27.0687C27.2821 27.0505 27.2923 27.0258 27.2923 27V20.2956C27.2923 18.4079 25.6512 16.9317 23.7729 17.102C23.1918 17.1553 22.6226 17.2991 22.0859 17.5282L21.0701 17.9638V16.8889C21.0701 16.8631 21.0599 16.8384 21.0416 16.8201C21.0234 16.8019 20.9987 16.7917 20.9729 16.7917H17.8618Z" fill="#0160C9" />
                                </svg>
                            </a>


                        </div>
                        {FooterLinks.map((section) => (
                            <div key={section.title} className='w-fit flex flex-col items-start gap-4'>
                                <h2 className='text-lg leading-6 font-semibold text-[#131313]'>{section.title}</h2>
                                <ul className='flex flex-col items-start gap-2'>
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            {section.title === "Support & Sales" ? (
                                                <a className='text-base leading-6 text-[#131313] ' href={link.path} target='_blank'>{link.name}</a>

                                            ) : (

                                                <Link className='text-base leading-6 text-[#131313] ' to={link.path}>{link.name}</Link>
                                            )}
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))}

                    </div>
                    <p className='mt-8 mb-2.5 text-base/6 -tracking-[0.32px] text-start'>dot.it | ©2025</p>
                </div>
            </footer >
        </>
    )
}