import Link from 'next/link'
import { useEffect } from 'react'
import { CgDarkMode } from 'react-icons/cg'
import {useTheme} from 'next-themes'
import Image from "next/image";

const links = [
    { label: "what is blossom?", href: "#dos" },
    { label: "past days of service", href: "#past-dos" },
    { label: "faq", href: "#faq" },
]

export default function Nav() {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        console.log('Made with love @ Hack Club https://hackclub.com/')
    })
    return (
        <nav className="dark:text-white">
            <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
            <Link target='_blank' href="https://daysofservice.hackclub.com/">
            <Image
                src="/header.png"
                width={250}
                height={250}
                alt="girl scouts of greater atlanta x hack club"
                links
            /></Link>
                <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
                    {links.map(({ href, label }) => (
                        <li className="self-center" key={`${href}${label}`}>
                            <Link
                                href={href}
                                className={`links px-4 font-bold py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}>

                                {label}

                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                                document.querySelector("#theme_toggle").classList.toggle("rotate-180");
                            }}
                            className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200" id="theme_toggle">
                            <CgDarkMode size={24} />
                        </button>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}