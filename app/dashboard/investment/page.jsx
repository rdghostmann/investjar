import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Investment & Desposit
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Investment</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="text-sm/5 mb-2 bg-white shadow-md p-4 rounded-lg">            <h2 className="text-purple-600 font-bold text-xl">Investment Plans</h2>
            <p className="text-slate-700">Investment that Guarantee Wealth</p>
          </div>

          <div className="w-full lg:w-1/3 space-y-6 basis-0">
            <div className="mb-2 bg-white shadow-md p-4 rounded-lg">
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Current Balance</p>
                    <input
                      placeholder="$0"
                      type="number"
                      className="bg-transparent p-2 rounded w-full"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Select Investment Plan:</p>
                    <select className="bg-transparent p-2 rounded w-full">
                      <option>Plan 1</option>
                      <option>Plan 2</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Current Balance</p>
                    <input
                      placeholder="Enter Investment Amount Here"
                      type="number"
                      className="bg-transparent p-2 rounded w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Buy Button */}
              <button className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-6">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
