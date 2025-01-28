import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

import Logo from "/public/logo.png";
import Leaf from "/public/leaf.png";

import { RiDashboard2Line } from "react-icons/ri";
import { FaBookOpen, FaCog, FaTasks,FaUsers } from "react-icons/fa";



const SideBar = ({ isOpen }) => {

  const pathname = usePathname();

  return (
    <div className={`bg-slate-100 h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} hidden lg:block`}>
      <div className="flex flex-col h-full py-4">

        <div className="p-4">
          <Link href="/dashboard" className={`w-full flex items-center gap-4 p-2 rounded ${isOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="mx-auto flex items-center justify-center rounded-lg ">
              {isOpen ? <Image src={Logo} alt="logo" width={170} priority /> : <Image src={Leaf} alt="logo" width={32} height={35} priority />}
            </div>
          </Link>
        </div>

        {/* Sidebar Links */}
        <nav className="overflow-y-auto
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
          <Link
            href="/dashboard"
            className={clsx(
              'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
              {
                'border-l-4 border-green-500 text-green-500': pathname === '/dashboard',
                'text-slate-500': pathname !== '/dashboard',
                'justify-start': isOpen,
                'bg-customPurple rounded-lg justify-center': !isOpen,
              }
            )}
          >
            <div className="flex items-center justify-center text-center rounded-lg">
              <RiDashboard2Line
                className={clsx(
                  'text-base',
                  {
                    'text-green-500': pathname === '/dashboard',
                    'text-slate-500': pathname !== '/dashboard',
                    'text-lg': !isOpen,
                  }
                )}
              />
            </div>
            {isOpen && (
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Dashboard</span>
              </div>
            )}
          </Link>

          <Link href="/dashboard/activities" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/activities',
              'text-slate-500': pathname !== '/dashboard/activities',
              'justify-start': isOpen,
              'bg-customPurple rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaTasks className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/activities',
                  'text-slate-500': pathname !== '/dashboard/activities',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Activities</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/employees" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/employees',
              'text-slate-500': pathname !== '/dashboard/employees',
              'justify-start': isOpen,
              'bg-customPurple rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaUsers className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/employees',
                  'text-slate-500': pathname !== '/dashboard/employees',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Employees</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/settings" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/settings',
              'text-slate-500': pathname !== '/dashboard/settings',
              'justify-start': isOpen,
              'bg-customPurple rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaCog className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/settings',
                  'text-slate-500': pathname !== '/dashboard/settings',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Settings</span>
              </div>
            }
          </Link>
        </nav>

        <div className="p-1">
          <Link href="/dashboard/documentation" className={`mt-auto bg-customPurple w-4/5 text-white rounded shadow-lg flex items-center gap-4 mx-auto mb-2 p-2 ${isOpen ? 'justify-start' : 'bg-customPurple rounded-lg justify-center'}`}>
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaBookOpen className={`text-2xl  ${isOpen ? 'text-2xl' : 'text-3xl text-white'}`} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Documentation</span>
              </div>
            }
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
