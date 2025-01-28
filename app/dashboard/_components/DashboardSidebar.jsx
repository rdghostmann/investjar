"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, BookUp2, LineChart, PieChart, Users, CreditCard, IdCard, Settings, TvMinimal, ArrowDownFromLine, ArrowDownToLine, Coins, ChartNoAxesCombined, SquareMenu, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import clsx from "clsx";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    isActive: true,
  },
  {
    title: "Make Deposit",
    icon: ArrowDownFromLine,
    href: "/dashboard/deposit",
  },
  {
    title: "Deposit History",
    icon: TvMinimal,
    href: "/dashboard/desposit-history",
  },
  {
    title: "Investment",
    icon: Coins,
    href: "/dashboard/investment",
  },
  {
    title: "Investment History",
    icon: ChartNoAxesCombined,
    href: "/dashboard/investment-history",
  },
  {
    title: "Withdraw Funds",
    icon: ArrowDownToLine,
    href: "/dashboard/withdraw",
  },
  {
    title: "Withdraw History",
    icon: SquareMenu,
    href: "/dashboard/withdraw-history",
  },
  {
    title: "Manage Assets",
    icon: Wallet,
    href: "/dashboard/wallet",
  },
  {
    title: "KYC",
    icon: IdCard,
    href: "/dashboard/kyc",
  },
  {
    title: "Accounts",
    icon: Users,
    href: "/dashboard/accounts",
  },
  {
    title: "Bank",
    icon: Landmark,
    href: "/dashboard/bank",
  },
  {
    title: "Cards",
    icon: CreditCard,
    href: "/dashboard/cards",
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-primary" />
          <span className="font-semibold">InvestJar</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className={cn(
                  "gap-3 text-muted-foreground data-[active=true]:font-medium data-[active=true]:text-primary",
                  "[&>svg]:size-5",
                )}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    pathname === item.href ? "text-customPurple" : "text-neutral-500 ",
                    "flex items-center gap-3 p-2 rounded-md"
                  )}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="gap-3 text-muted-foreground [&>svg]:size-5">
              <Link href="/dashboard/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
