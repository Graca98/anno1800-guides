import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
  
  export function AppSidebar() {
    return (
      <Sidebar className="">
        <SidebarHeader className="" />
        <SidebarContent className="">
          <SidebarGroup className="" />
          <SidebarGroup className="" />
        </SidebarContent>
        <SidebarFooter className="" />
      </Sidebar>
    )
  }