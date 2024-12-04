import { Heebo } from "next/font/google";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaSquareFacebook,
  FaTwitter
} from "react-icons/fa6";
const heeboFont = Heebo({ subsets: ["latin"] });
const Footer = () => {
  return (
    <div
      className={`bg-footerBackground h-[243px] flex flex-col items-center justify-center space-y-6`}
    >
      <div className="flex gap-8">
        <Link href={""}>
          <FaSquareFacebook className="" size={"30"} />
        </Link>
        <Link href={""}>
          <FaInstagram className="" size={"30"} />
        </Link>
        <Link href={""}>
          <FaTwitter className="" size={"30"} />
        </Link>
        <Link href={""}>
          <FaLinkedinIn className="" size={"30"} />
        </Link>
      </div>
      <p
        className={`${heeboFont.className} text-center font-medium text-[22px]`}
      >
        Copyright ©2020 All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
