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
    console.log("Made with love @ Hack Club https://hackclub.com/");
  });
  return (
    <nav className="">
      <ul className="mt-6 flex flex-wrap items-start p-8 sm:mt-0 sm:items-center sm:justify-between">
        <Link target="_blank" href="https://daysofservice.hackclub.com/">
          <Image
            src="/header.png"
            width={250}
            height={250}
            alt="girl scouts of greater atlanta x hack club"
            links
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
