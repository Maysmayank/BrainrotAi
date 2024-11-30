"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"


export function Navbar() {
  return (
    <div className="fixed z-50 w-full h-20 bg-black flex items-center ">
      <div className="ml-20 text-3xl mr-60 flex items-center">
        <Image src={"/Brainrot_200x200_logo.webp"} className="rounded-full mr-2" width={50} alt="" height={200}></Image>
        BrainrotLang</div>

      <div className="left-container mr-40">
      <NavigationMenu className="flex items-center justify-center">
      
      <NavigationMenuList className="flex  gap-3">
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          
          <NavigationMenuTrigger className="text-xl">Getting started</NavigationMenuTrigger>
          
          <NavigationMenuContent className="bg-black">
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              
              <ListItem href="/introduction" title="Introduction">
                What is Brainrot? Why to take a first leap into learning laguage 
              </ListItem>
              <ListItem href="/docs/installation" title="Demo">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
        
          </NavigationMenuContent>
        
        </NavigationMenuItem>
        
        <NavigationMenuItem>
        
        <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Learn
            </NavigationMenuLink>
          </Link>
          <NavigationMenuContent>
            
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        
      </NavigationMenuList>
    </NavigationMenu>
      </div>
     
  

    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
