import { Calendar, ChevronDown, Home, Inbox, Search, Settings, ExternalLink  } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Usefull links",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Production Chains",
    url: "/production-chains",
    icon: Calendar,
  },
  {
    title: "Prod. Layouts",
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
      {/* <SidebarGroupLabel className="">Anno 1800</SidebarGroupLabel> */}
      <SidebarGroupContent className="">
        <SidebarMenu className="">

          {/* Collapsible 1: Tvoje položky */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem className="">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="" tooltip="test">
                  <span className="flex items-center gap-2">
                    <span>Anno 1800</span>
                  </span>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="">
                  {items.map((item) => {

                    // 💡 Nový collapsible pro "Layouts"
                    if (item.title === "Prod. Layouts") {
                      return (
                        <SidebarMenuSubItem key={item.title} className="p-0">
                          <Collapsible className="group w-full">
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton className="w-full text-left" tooltip="Layouts submenu">
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.title}</span>
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub className="pl-4">
                                <SidebarMenuSubItem className="">
                                  <SidebarMenuButton className="" tooltip="test" asChild>
                                    <a
                                      href="https://anno1800.fandom.com/wiki/Production_layouts"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary underline-offset-4 hover:underline"
                                    >
                                      <span>Wiki</span>
                                      <ExternalLink className="h-4 w-4 opacity-60" />
                                    </a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem className="">
                                  <SidebarMenuButton className="" tooltip="" asChild>
                                    <a
                                      href="https://www.annolayouts.de/1800/index.htm"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary underline-offset-4 hover:underline"
                                    >
                                      <span>Layouts (de)</span>
                                      <ExternalLink className="h-4 w-4 opacity-60" />
                                    </a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </Collapsible>
                        </SidebarMenuSubItem>
                      );
                    }

                    // Pokud je to "Stamps", vykresli Collapsible submenu
                    if (item.title === "Stamps") {
                      return (
                        <SidebarMenuSubItem key={item.title} className="p-0">
                          <Collapsible defaultOpen className="group w-full">
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton className="w-full text-left" tooltip="Stamps submenu">
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.title}</span>
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub className="pl-4">
                                <SidebarMenuSubItem className="">
                                  <SidebarMenuButton className="" tooltip="" asChild>
                                    <a
                                      href="https://annostamps.com"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary underline-offset-4 hover:underline"
                                    >
                                      <span>Main Page</span>
                                      <ExternalLink className="h-4 w-4 opacity-60" />
                                      </a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>

                                {/* Old World */}
                                <SidebarMenuSubItem className="">
                                  <SidebarMenuButton className="" tooltip="" asChild>
                                    <a
                                      href="https://annostamps.com/stamps?region=old%20world"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary underline-offset-4 hover:underline"
                                    >
                                      <span>Old World</span>
                                      <ExternalLink className="h-4 w-4 opacity-60" />
                                      </a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                                
                                {/* New World */}
                                <SidebarMenuSubItem className="">
                                  <SidebarMenuButton className="" tooltip="" asChild>
                                    <a
                                      href="https://annostamps.com/stamps?region=new%20world"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary underline-offset-4 hover:underline"
                                    >
                                      <span>New World</span>
                                      <ExternalLink className="h-4 w-4 opacity-60" />
                                      </a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                                
                                {/* Arctic */}
                                <SidebarMenuSubItem className="">
                                  <SidebarMenuButton className="" tooltip="" asChild>
                                    <a
                                      href="https://annostamps.com/stamps?region=arctic"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary underline-offset-4 hover:underline"
                                    >
                                      <span>The Arctic</span>
                                      <ExternalLink className="h-4 w-4 opacity-60" />
                                      </a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                                
                                {/* Enbessa */}
                                <SidebarMenuSubItem className="">
                                  <SidebarMenuButton className="" tooltip="" asChild>
                                    <a
                                      href="https://annostamps.com/stamps?region=enbesa"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary underline-offset-4 hover:underline"
                                    >
                                      <span>Enbessa</span>
                                      <ExternalLink className="h-4 w-4 opacity-60" />
                                      </a>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </Collapsible>
                        </SidebarMenuSubItem>
                      );
                    }

                    // Ostatní položky v items
                    return (
                      <SidebarMenuSubItem key={item.title} className="">
                        <SidebarMenuButton className="" tooltip="" asChild>
                          <a
                            href={item.url}
                            target={item.newTab ? "_blank" : "_self"}
                            rel={item.newTab ? "noopener noreferrer" : undefined}
                          >
                            <item.icon className="mr-2 h-4 w-4" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          {/* Collapsible 2: Test */}
          <Collapsible className="group/collapsible">
            <SidebarMenuItem className="">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="" tooltip="">
                  <span className="flex items-center gap-2">
                    <span>Other game</span>
                  </span>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
                
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="">

                  <SidebarMenuSubItem className="">
                    <SidebarMenuButton className="" tooltip="" asChild>
                      <a href="/test-page">
                        <span>Testovací stránka</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>

                  <SidebarMenuSubItem className="">
                    <SidebarMenuButton className="" tooltip="" asChild>
                      <a href="/něco-jiného">
                        <span>Něco jiného</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                  
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>

  )
}