"use client";
import DevpostIcon from "@/svgs/devpost.svg";
import GithubIcon from "@/svgs/github.svg";
import LinkedinIcon from "@/svgs/linkedin-square.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [section, setSection] = useState("About");
  return (
    <header className="bg-white text-tBlack font-semibold p-4 flex items-center justify-between fixed w-full z-10">
      {/* Icons on the left */}
      <div className="hidden md:flex items-center space-x-6 ">
        <Link href={"https://www.linkedin.com/in/ethanmcf/"} target={"_blank"}>
          <Image src={LinkedinIcon} alt="Icon 1" className="w-5 h-5" />
        </Link>
        <Link
          href={"https://github.com/ethanmcf"}
          target={"_blank"}
          className={"hover:"}
        >
          <Image src={GithubIcon} alt="Icon 1" className="w-5 h-5" />
        </Link>
        <Link
          href={
            "https://devpost.com/ethanmcf?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          }
          target={"_blank"}
        >
          <Image src={DevpostIcon} alt="Icon 1" className="w-5 h-5 tBlack" />
        </Link>
      </div>

      {/* Centered header links */}
      <div className="md:flex-grow">
        <nav className="flex items-center justify-center">
          <a
            onClick={() => setSection("About")}
            href="#About"
            className={`${section === "About" ? "text-primary" : "text-tBlack"} hover:text-primary w-[140px] text-center`}
          >
            {section === "About" ? "< About >" : " About "}
          </a>
          <a
            onClick={() => setSection("Projects")}
            href="#Projects"
            className={`${section === "Projects" ? "text-primary" : "text-tBlack"} hover:text-primary w-[140px] text-center`}
          >
            {section === "Projects" ? "< Projects >" : " Projects "}
          </a>
          <a
            onClick={() => setSection("Experience")}
            href="#Experience"
            className={`${section === "Experience" ? "text-primary" : "text-tBlack"} hover:text-primary w-[140px] text-center`}
          >
            {section === "Experience" ? "< Experience >" : "Experience"}
          </a>
          <a
            onClick={() => setSection("Skills")}
            href="#Skills"
            className={`${section === "Skills" ? "text-primary" : "text-tBlack"} hover:text-primary w-[140px] text-center`}
          >
            {section === "Skills" ? "< Skills >" : "Skills"}
          </a>
        </nav>
      </div>
    </header>
  );
}
