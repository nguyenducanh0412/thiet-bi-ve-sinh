"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [openBoxSearch, setOpenBoxSearch] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const handleClearSearch = () => {
    setKeyword("");
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(keyword);
    }
  };

  return (
    <>
      <nav
        // data-aos="fade"
        className="bg-red-600 text-white md:flex lg:h-[9rem] lg:items-center relative"
      >
        <div className="container mx-auto px-4 py-2">
          <div className=" flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold mr-4">
              <Image
                className="!min-w-[10rem] !w-[14rem] !lg:w-[16rem]"
                src="/home-logo.svg"
                alt="logo"
                width={160}
                height={40}
              />
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Danh mục các hãng
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                shadcn/ui
                              </div>
                              <p className="text-[1.4rem] leading-[2.1rem] text-muted-foreground">
                                Beautifully designed components built with Radix
                                UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Thiết bị vệ sinh
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Thiết bị nhà bếp
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Gạch ốp lát</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuTrigger>
                        Sản phẩm khác
                      </NavigationMenuTrigger>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Search and Icons */}
            <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setOpenBoxSearch(true)}>
                <Search className="w-[1.6rem] h-[1.6rem]" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-[1.6rem] h-[1.6rem]" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <User className="w-[1.6rem] h-[1.6rem]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/danh-muc-cac-hang" className="block py-2">
                    Danh mục các hàng
                  </Link>
                </li>
                <li>
                  <Link href="/thiet-bi-ve-sinh" className="block py-2">
                    Thiết bị vệ sinh
                  </Link>
                </li>
                <li>
                  <Link href="/thiet-bi-nha-bep" className="block py-2">
                    Thiết bị nhà bếp
                  </Link>
                </li>
                {/* Add more mobile menu items */}
              </ul>
              <div className="flex items-center relative mt-4">
                <Search className="absolute left-6 top-[1.4rem] w-[1.4rem] h-[1.4rem] text-[#7C7C7C]" />
                <div className="w-full m-4">
                  <Input
                    className="bg-[#f6f6f6] text-black pl-8"
                    placeholder="Tìm kiếm..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleSearch}
                  />
                </div>
                <X
                  className="absolute right-6 top-[1.4rem] w-[1.4rem] h-[1.4rem] text-[#7C7C7C]"
                  onClick={handleClearSearch}
                />
              </div>
              <div className="flex justify-start mt-4">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Box search on pc */}
        {openBoxSearch && (
          <div
            data-aos="fade-down"
            style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}
            className="box-search h-[8.4rem] absolute bottom-[-8.4rem] left-0 right-0 flex justify-center items-center bg-white !z-[999] gap-16"
          >
            <div className="flex items-center relative w-[60%] h-[4.4rem] bg-[#f6f6f6] rounded-[2.8rem]">
              <Search className="absolute w-[1.8rem] h-[1.8rem] left-6 top-6 text-[#7C7C7C]" />
              <input
                className=" text-black bg-[#f6f6f6] bg-none outline-none ml-20 h-[1.8rem] text-[1.4rem] w-full"
                placeholder="Tìm kiếm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={handleSearch}
              />
              <X
                className="absolute w-[1.8rem] h-[1.8rem] right-6 top-6 text-[#7C7C7C] cursor-pointer"
                onClick={handleClearSearch}
              />
            </div>
            <div>
              <p
                className="text-black text-[1.4rem] cursor-pointer select-none"
                onClick={() => setOpenBoxSearch(false)}
              >
                Đóng
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

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
            className,
          )}
          {...props}
        >
          <div className="text-[1.4rem] leading-[2.1rem] font-medium">
            {title}
          </div>
          <p className="line-clamp-2 text-[1.4rem] leading-[2.1rem] text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
