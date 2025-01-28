"use client"

import * as React from "react"
import {
  ArrowDownFromLine,
  ArrowDownToLine,
  BookOpen,
  Bot,
  ChartNoAxesCombined,
  Coins,
  Command,
  CreditCard,
  Frame,
  IdCard,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareMenu,
  SquareTerminal,
  TvMinimal,
  Users,
  Wallet,
  WalletCards,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

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
]
const data = {
  user: {
    name: "IDAN",
    email: "idan@investjar.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/dashboard",
      isActive: true,
    },
    {
      title: "Investment & Deposit",
      icon: TvMinimal,
      isActive: true,
      items: [
        {
          title: "Make Deposit",
          url: "/dashboard/deposit",
        },
        {
          title: "Deposit History",
          url: "/dashboard/desposit-history",
        },
        {
          title: "Investment",
          url: "/dashboard/investment",
        },
        {
          title: "Investment History",
          url: "/dashboard/investment-history",
        },
      ],
    },
    {
      title: "Withdrawal",
      icon: ArrowDownToLine,
      items: [
        {
          title: "Withdraw Funds",
          url: "/dashboard/withdraw",
        },
        {
          title: "Withdraw History",
          url: "/dashboard/withdraw-history",
        },
        {
          title: "Manage Wallet",
          url: "#",
        },
      ],
    },
    {
      title: "KYC Verification",
      icon: IdCard,
      url: "/dashboard/kyc",
      isActive: true,
    },
    {
      title: "Manage Account",
      icon: WalletCards,
      url: "/dashboard/manage-wallet",
      isActive: true,
    },
    {
      title: "Bank",
      icon: Landmark,
      url: "/dashboard/bank",
          isActive: true,

    },
    {
      title: "Cards",
      icon: CreditCard,
      url: "/dashboard/cards",
          isActive: true,

    },
 
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],

  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">InvestJar</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>)
  );
}
