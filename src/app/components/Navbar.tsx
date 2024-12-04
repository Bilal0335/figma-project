import { Inter } from "next/font/google";
import Link from "next/link";
const interFont = Inter({
  subsets: ["latin"]
});
const Navbar = () => {
  const navItems = [
    {
      name: "works",
      link: "#"
    },
    {
      name: "blog",
      link: "#"
    },
    {
      name: "contact",
      link: "#"
    }
  ];
  return (
    <div>
      <ul
        className={`${interFont.className} flex items-center justify-end h-[24] m-[66px] capitalize text-[20px] font-medium space-x-6`}
      >
        {navItems.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
        {/* <li>works</li>
        <li>blog</li>
        <li>contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
