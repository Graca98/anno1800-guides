import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Usefull links",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Production Chains",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Layouts",
    url: "https://www.annolayouts.de/1800/index.htm",
    icon: Search,
    newTab: true,
  },
  {
    title: "Stamps",
    url: "https://annostamps.com/",
    icon: Settings,
    newTab: true,
  },
]

export function AppSidebar() {
    
  return (
    <Sidebar className="">
      <SidebarContent className="">
        <SidebarGroup className="">
          <SidebarGroupLabel className="">Anno 1800</SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem className="" key={item.title}>
                  <SidebarMenuButton className="" tooltip="" asChild>
                    <a href={item.url} target={item.newTab ? "_blank" : "_self"}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}