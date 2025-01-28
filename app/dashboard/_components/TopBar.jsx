import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from "next/image";
import Logo from "/public/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaBookOpen, FaCog } from "react-icons/fa";
import clsx from "clsx";
import { RiDashboard2Line } from "react-icons/ri";

// import { VisuallyHidden } from "@reach/visually-hidden"; // Import VisuallyHidden component
// import { VisuallyHidden } from "radix-ui";

import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SidebarTrigger } from "@/components/ui/sidebar";


const TopBar = ({ isSidebarOpen, toggleSidebar }) => {
  // Track the active link (you can replace this with your actual route logic)
  const [activeLink, setActiveLink] = React.useState("/dashboard");

  // Function to handle link clicks and close the sheet
  const handleLinkClick = (href) => {
    setActiveLink(href);
    // Close the SheetContent after clicking the link
    document.querySelector('button[data-state="open"]').click(); // Close the sheet by simulating a click on the open button
  };


  return (
    <div className="w-full bg-customPurple p-4 flex items-center justify-between">
      {/* Toggle Button */}
      {/* <button className="hidden lg:block text-white" onClick={toggleSidebar}> */}
        {/* {isSidebarOpen ? 'Collapse' : 'Expand'} */}
        {/* {isSidebarOpen ? '☰' : '☰'} */}
      {/* </button> */}
      <SidebarTrigger className="text-white" />



      <div className="lg:hidden">
        {/* <Sheet>
          <SheetTrigger asChild>
            <button className="text-white">
              <RxHamburgerMenu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col h-full py-4">
            <VisuallyHidden>
              <DialogTitle>Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <div className="p-4">
              <Link href="/dashboard" className="w-full flex items-center gap-4 p-2">
                <div className="mx-auto flex items-center justify-center rounded-lg ">
                  <Image src={Logo} alt="logo" className="w-full" width={140} sizes="100vw" />
                </div>
              </Link>
            </div>


            <nav className="flex flex-col overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

              <Link
                onClick={() => handleLinkClick("/dashboard")}
                href="/dashboard"
                className={clsx(
                  'w-full flex items-center gap-4 mx-auto mb-2 p-2',
                  activeLink === "/dashboard" && 'text-green-500 border-l-2 border-green-500'
                )}
              >
                <div className="flex items-center justify-center rounded-lg">
                  <RiDashboard2Line className="text-2xl" />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-semibold capitalize">Dashboard</span>
                </div>
              </Link>


              <Link
                onClick={() => handleLinkClick("/dashboard/settings")}
                href="/dashboard/settings"
                className={clsx(
                  'w-full flex items-center gap-4 mx-auto mb-2 p-2',
                  activeLink === "/dashboard/settings" && 'text-green-500 border-l-2 border-green-500'
                )}
              >
                <div className="flex items-center justify-center rounded-lg">
                  <FaCog className="text-2xl" />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-semibold capitalize">settings</span>
                </div>
              </Link>




            </nav>

            <div className="p-4">
              <Link href="/dashboard/documentation" className='bg-green-600 text-white w-full flex items-center gap-4 mx-auto mb-2 p-2'>
                <div className="flex items-center justify-center rounded-lg ">
                  <FaBookOpen className='text-2xl' />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-semibold capitalize">Documentation</span>
                </div>
              </Link>
            </div>

          </SheetContent>
        </Sheet> */}
      </div>


      {/* <div className="flex items-center space-x-2 ml-auto text-white">
        <span className="hidden md:inline">Admin</span>
        <div className="h-10 w-10 rounded-full text-xs text-center p-3 bg-white/20">img</div>
      </div> */}

    </div>
  );
};

export default TopBar;


