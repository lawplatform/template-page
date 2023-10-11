"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import Card_list from "@/src/components/Card_list";
import Slide_Logo from "@/src/components/Slide_Logo/Slide_Logo";
import Card_Profile from "@/src/components/Card_Profile";
import Card_Profile_h from "@/src/components/Card_Profile_h";
import Parallax from "@/src/components/parallax/Parallax";
import Gallery_anime from "@/src/components/Gallery_anime";

export default function Home() {

	const getTodos = trpc.getTodos.useQuery();
	const getImages = trpc.getImages.useQuery();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<div>is images loading?</div>
			{JSON.stringify(getImages.data)}
			<div className="flex flex-col  items-center">
				<p className="bg-conssul-100 dark:bg-red-100">
					hello. ... my name ..?
				</p>
				<Gallery_anime></Gallery_anime>
				<div className="h-fit w-3/4">
					<Slide_Logo direction="right" speed={"st"}>
						<Card_Profile />
						<Card_Profile />
						<Card_Profile />
						<Card_Profile />
						<Card_Profile />
						<Card_Profile />
						<Card_Profile />
					</Slide_Logo>
				</div>
				<div className="w-3/4">
					<Slide_Logo direction="left" speed={"slow"}>
						<Card_Profile_h />
						<Card_Profile_h />
						<Card_Profile_h />
						<Card_Profile_h />
						<Card_Profile_h />
						<Card_Profile_h />
						<Card_Profile_h />
					</Slide_Logo>
				</div>
				<Card_list />
			</div>
		</div>
	);
}
