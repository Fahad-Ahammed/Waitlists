"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

// NavBar component
type NavBarProps = {
  isOpen: boolean;
};

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`absolute left-0 top-0 h-[65px] w-full bg-[#F8FAFC] ${isOpen ? "border-b overflow-visible" : "overflow-hidden"} py-[15px] duration-[500ms] ease-in-out md:relative md:left-[unset] md:top-[unset] md:flex md:h-screen md:w-[230px] md:flex-col md:border-none md:p-0`}
      >
        <div className="max-md:mx-auto max-md:w-[90%] max-md:max-w-[1300px]">
          <div className="flex items-center max-md:flex">
            <Logo isOpen={isOpen} />
            {/* hamburger start*/}
            <button
              onClick={toggleSidebar}
              aria-expanded={isOpen}
              aria-controls="navigation menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="relative z-[2] ml-auto h-[24px] w-[24px] border-none bg-transparent md:hidden"
            >
              <span
                className={`block h-[2px] w-[24px] bg-black transition-transform duration-300 ease-in-out ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              ></span>
              <span
                className={`mt-[6px] block h-[2px] w-[24px] bg-black transition-opacity duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`mt-[6px] block h-[2px] w-[24px] bg-black transition-transform duration-300 ease-in-out ${
                  isOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              ></span>
            </button>
            {/* hamburger end*/}
          </div>
        </div>
        <NavBar isOpen={isOpen} />
      </header>
    </>
  );
};

const Logo: React.FC<NavBarProps> = ({ isOpen }) => {
  return (
    <div
      className={`${isOpen ? "max-md:invisible" : ""} flex items-center gap-x-[4px] lg:gap-x-[8px]`}
    >
      {/*front.desk logo */}
      <svg
        className="h-[32px] w-[32px] shrink-0 lg:h-[22px] lg:w-[22px]"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.48 0H3.52001C1.57596 0 0 1.57596 0 3.52001V18.48C0 20.424 1.57596 22 3.52001 22H18.48C20.424 22 22 20.424 22 18.48V3.52001C22 1.57596 20.424 0 18.48 0Z"
          fill="#262626"
        />
        <path
          d="M17.7627 12.9381C18.8596 12.9381 19.7488 12.047 19.7488 10.9479C19.7488 9.84878 18.8596 8.95776 17.7627 8.95776C16.6658 8.95776 15.7766 9.84878 15.7766 10.9479C15.7766 12.047 16.6658 12.9381 17.7627 12.9381Z"
          fill="white"
        />
        <path
          d="M4.17823 12.9578C5.27512 12.9578 6.16433 12.0668 6.16433 10.9677C6.16433 9.86856 5.27512 8.97754 4.17823 8.97754C3.08134 8.97754 2.19214 9.86856 2.19214 10.9677C2.19214 12.0668 3.08134 12.9578 4.17823 12.9578Z"
          fill="white"
        />
        <path
          d="M6.12525 8.10188C7.22214 8.10188 8.11135 7.21086 8.11135 6.11173C8.11135 5.0126 7.22214 4.12158 6.12525 4.12158C5.02836 4.12158 4.13916 5.0126 4.13916 6.11173C4.13916 7.21086 5.02836 8.10188 6.12525 8.10188Z"
          fill="white"
        />
        <path
          d="M10.97 6.15157C12.0669 6.15157 12.9561 5.26055 12.9561 4.16142C12.9561 3.06229 12.0669 2.17126 10.97 2.17126C9.87309 2.17126 8.98389 3.06229 8.98389 4.16142C8.98389 5.26055 9.87309 6.15157 10.97 6.15157Z"
          fill="white"
        />
        <path
          d="M15.8165 8.10188C16.9134 8.10188 17.8026 7.21086 17.8026 6.11173C17.8026 5.0126 16.9134 4.12158 15.8165 4.12158C14.7196 4.12158 13.8304 5.0126 13.8304 6.11173C13.8304 7.21086 14.7196 8.10188 15.8165 8.10188Z"
          fill="white"
        />
        <path
          d="M15.8165 17.6546C16.9134 17.6546 17.8026 16.7636 17.8026 15.6645C17.8026 14.5653 16.9134 13.6743 15.8165 13.6743C14.7196 13.6743 13.8304 14.5653 13.8304 15.6645C13.8304 16.7636 14.7196 17.6546 15.8165 17.6546Z"
          fill="white"
        />
        <path
          d="M10.97 19.7244C12.0669 19.7244 12.9561 18.8334 12.9561 17.7343C12.9561 16.6352 12.0669 15.7441 10.97 15.7441C9.87309 15.7441 8.98389 16.6352 8.98389 17.7343C8.98389 18.8334 9.87309 19.7244 10.97 19.7244Z"
          fill="white"
        />
        <path
          d="M6.12525 17.6546C7.22214 17.6546 8.11135 16.7636 8.11135 15.6645C8.11135 14.5653 7.22214 13.6743 6.12525 13.6743C5.02836 13.6743 4.13916 14.5653 4.13916 15.6645C4.13916 16.7636 5.02836 17.6546 6.12525 17.6546Z"
          fill="white"
        />
      </svg>
      <h2
        className={`${poppins.className} relative w-fit text-center text-[28px] leading-[32px] text-[#262626] lg:text-[18px] lg:leading-[24px]`}
      >
        <span
          className={`after:[""] relative mr-[7px] after:absolute after:right-[-6px] after:top-[51%] after:h-[5px] after:w-[5px] after:translate-y-[-50%] after:rounded-full after:bg-[#262626] lg:mr-[7px] after:lg:right-[-6px] lg:after:top-[53%] after:lg:h-[4px] after:lg:w-[4px]`}
        >
          Front
        </span>
        <span>Desk</span>
      </h2>
    </div>
  );
};

const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  const navStyles =
    "flex gap-x-[5px] mb-[10px] py-[5px] text-[#334155] items-center font-[500] text-[20px] leading-[28px]";
  return (
    <>
      <nav
        className={`absolute left-0 top-[65px] flex-grow md:relative md:left-[unset] md:top-[unset] ${isOpen ? "translate-0 visible" : "invisible translate-x-[-100%]"} w-full bg-[#F8FAFC] pt-[20px] duration-300 ease-in-out md:pt-0`}
      >
        <div className="mx-auto w-[90%] md:h-full md:w-full">
          {/* needs to add timezone section here */}
          <div className="flex min-h-[calc(100vh-65px)] flex-col justify-between pb-[70px] min-[600px]:flex-row md:h-full md:min-h-[unset] md:flex-col md:pb-0">
            <ul className="px-[15px]">
              <li>
                <Link href={"#"} className={navStyles}>
                  <svg
                    className="h-[22px] w-[22px] md:h-[24px] md:w-[16px]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link href={"#"} className={navStyles}>
                  <svg
                    className="h-[22px] w-[22px] md:h-[24px] md:w-[16px]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_12388)">
                      <path
                        d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z"
                        stroke="#334155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11"
                        stroke="#334155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.6875 8.625L6.1875 10.125L9.1875 7.125"
                        stroke="#334155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_12388">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Subscription</span>
                </Link>
              </li>
              <li>
                <Link href={""} className={navStyles}>
                  <svg
                    className="h-[22px] w-[22px] md:h-[24px] md:w-[16px]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6666 1.33337V4.00004"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33337 1.33337V4.00004"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 6.66663H14"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33337 9.33337H5.34004"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 9.33337H8.00667"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6666 9.33337H10.6733"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33337 12H5.34004"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 12H8.00667"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6666 12H10.6733"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Calendar</span>
                </Link>
              </li>
              <li>
                <Link href={"#"} className={navStyles}>
                  <svg
                    className="h-[22px] w-[22px] md:h-[24px] md:w-[16px]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Waitlist</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className={`px-[15px] ${navStyles}`} href={"#"}>
                  <svg
                    className="h-[22px] w-[22px] md:h-[24px] md:w-[16px]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66667 2H2V8H6.66667V2Z"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 2H9.33337V5.33333H14V2Z"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 8H9.33337V14H14V8Z"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Dashboard</span>
                  <svg
                    className="ml-auto h-[22px] w-[22px] md:h-[24px] md:w-[16px]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 2H14V6"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66663 9.33333L14 2"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <button
                  aria-label="Admin profile"
                  className="mb-[2px] flex w-full items-center gap-x-[8px] rounded-[6px] bg-white px-[8px] py-[10px] shadow-[0px_1px_rgba(100,116,139,0.05)]"
                >
                  <Image
                    className="shrink-0 rounded-full"
                    src={"/user.png"}
                    width={32}
                    height={32}
                    alt="User avatar"
                  />
                  <div className="text-left text-[18px] leading-[28px]">
                    <span className="block font-[500] text-[#0F172A]">
                      Admin name
                    </span>
                    <span className="block font-[400] text-[#64748B]">
                      adminname@mail.com
                    </span>
                  </div>
                  <svg
                    className="ml-auto h-[22px] w-[22px] md:h-[24px] md:w-[16px]"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#334155"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li
                tabIndex={0}
                role="note"
                className="flex items-center gap-x-[10px] px-[10px] py-[6px]"
                aria-label="Help Center information"
              >
                <svg
                  className="h-[26px] w-[26px] md:h-[24px] md:w-[16px]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_12438)">
                    <path
                      d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
                      stroke="#475569"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.05994 5.99989C6.21667 5.55434 6.52604 5.17863 6.93324 4.93931C7.34044 4.7 7.8192 4.61252 8.28472 4.69237C8.75024 4.77222 9.17248 5.01424 9.47665 5.37558C9.78083 5.73691 9.94731 6.19424 9.9466 6.66656C9.9466 7.99989 7.9466 8.66656 7.9466 8.66656"
                      stroke="#475569"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 11.3333H8.00667"
                      stroke="#475569"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12438">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex flex-col text-[18px] leading-[28px]">
                  <span className="font-[400] text-[#334155]">Help Center</span>
                  <span className="text-[16px] leading-[20px] text-[#64748B]">
                    @2024 Omnify.Inc.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
