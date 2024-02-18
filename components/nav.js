import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "what is blossom?", href: "#dos" },
  { label: "past days of service", href: "#past-dos" },
  { label: "faq", href: "#faq" },
];

export default function Nav() {
  useEffect(() => {
    console.log(
      "Made with love @ Hack Club. Come visit us @ https://hackclub.com/",
    );
  });
  return (
    <nav>
      <ul className="mx-auto flex w-full flex-col justify-center gap-5 p-8 sm:mt-0 sm:flex-row sm:flex-wrap md:w-3/4 lg:gap-0 xl:justify-between">
        <Link target="_blank" href="https://daysofservice.hackclub.com/">
          <img
            src="/header.png"
            alt="The Girl Scouts logo and the Hack Club logo next to it to symbolize a collaboration between the two organizations."
            className="mx-auto w-2/3"
          />
        </Link>
        <ul className={`mx-auto flex flex-row gap-8 sm:mx-0`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link
                href={href}
                className={`decoration-dark-pink decoration-wavy decoration-[1.5px] hover:underline`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
