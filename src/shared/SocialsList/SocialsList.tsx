import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";
import youtube from "images/socials/youtube.svg";
import instagram from "images/socials/instagram.svg";
import linkedin from "images/socials/linkedin.svg";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "Youtube", icon: youtube, href: "https://youtube.com/@soufcode" },
  { name: "Instagram", icon: instagram, href: "https://instagram.com/soufcode" },
  { name: "LinkedIn", icon: linkedin, href: "https://www.linkedin.com/in/soufiane-ait/" },

];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block w-6 h-6",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <img src={item.icon} alt="" />
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
