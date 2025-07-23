import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider open={undefined} onOpenChange={undefined} className={undefined} style={undefined}>
      <AppSidebar />
      <main>
        <SidebarTrigger className="" onClick="" />
        {children}
      </main>
    </SidebarProvider>
  )
}