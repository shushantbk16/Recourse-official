import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container" style={{ height: "23px" }}>
          <div className="logo">
            <Link href="/">
              <TitleLogo title="Recourse" caption="" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "text-black"}
            >
              Home
            </Link>

            <Link
              href="/services"
              className={
                activeLink == "/services" ? "activeLink" : "text-black"
              }
            >
              Services
            </Link>
            <Link
              href="/about"
              className={activeLink == "/about" ? "activeLink" : "text-black"}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "text-black"}
            >
              Contact
            </Link>
          </nav>
          <button className="button-hidden" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
