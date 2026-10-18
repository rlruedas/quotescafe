import React from "react";
import Link from "next/link";
import { HiStar } from "react-icons/hi";
import { useRouter } from "next/router";

function Desktop() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const navLinks = [
    { name: "get quotes", href: "/quotes" },
    { name: "about", href: "/about" },
    { name: "suggestions", href: "/suggestions" },
  ];

  return (
    <nav className="flex items-center gap-1 sm:gap-2 font-Vollkorn">
      {navLinks.map((link) => {
        const isActive = router.pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[16px] tracking-wide transition-all duration-200 px-3 py-1 rounded-full ${
              isActive
                ? "bg-[#855D49]/25 text-[#2c170b] font-bold"
                : isHome
                ? "text-[#3e2415] hover:text-[#1a0c05] hover:bg-[#855D49]/15 font-medium"
                : "text-[#5c3c2b] hover:text-[#2c170b] hover:bg-[#855D49]/10 font-medium"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      <a
        href="https://github.com/rlruedas/quotescafe.git"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[14px] font-medium text-[#3e2415] bg-[#855D49]/15 hover:bg-[#855D49]/25 hover:text-[#1a0c05] px-2.5 py-1 rounded-full border border-[#855D49]/25 transition-all duration-200 shadow-xs group ml-1"
        title="Star on GitHub"
      >
        <HiStar className="text-[16px] text-[#a8741a] group-hover:scale-110 transition-transform" />
        <span>Star</span>
      </a>
    </nav>
  );
}

export default Desktop;
