"use client"
import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,

} from "@/components/ui/sheet"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
import { AlignJustify } from "lucide-react";
import Divider_h from "./Divider_h";
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

export default function Navbar() {

	return (
		<NavigationMenu className=" flex justify-between max-w-5xl mx-auto">
			<div> <Image src="/logo/logo.png" width={150} height={250} alt="logo Image" className="my-2" /></div>
			<NavigationMenuList className=" ">
				<NavigationMenuItem className="hidden">
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent className="">
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Sheet>
						<SheetTrigger asChild>
							<AlignJustify className="w-5 mx-5 sm:hidden" />
						</SheetTrigger>
						<SheetContent side={"left"}>
							<SheetHeader>
								<SheetTitle>로그인</SheetTitle>
								<SheetDescription>
									새로운 서비스를 즐겨보세요
								</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input id="name" value="Pedro Duarte" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										Username
									</Label>
									<Input id="username" value="@peduarte" className="col-span-3" />
								</div>
							</div>
							<div> this is other </div>
							<Divider_h />
							<div> this is other section</div>
							<SheetFooter>


								<SheetClose asChild>
									<Button type="submit">Save changes</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
