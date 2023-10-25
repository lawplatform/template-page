"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import Parallax from "@/src/components/parallax/Parallax";
import Gallery_anime from "@/src/components/Gallery_anime";
import Card_Mini from "@/src/components/Card_Mini";
import Gallery_basic from "@/src/components/Gallery_basic";
import { TiltSquare } from "@/src/components/background";
import Article_With_Scroll from "@/src/page/Article_with_Scroll";
import Login from "@/src/components/login";
import Login_basic from "@/src/components/Login_basic";
import C_Flip_3d from "@/src/components/card/C_Flip_3d.tsx";

export default function Home() {

	const getTodos = trpc.getTodos.useQuery();
	const getImages = trpc.getImages.useQuery();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<C_Flip_3d />
			<Login_basic />
			<Article_With_Scroll />
			{JSON.stringify(getTodos.data)}
			<div>is images loading?</div>
			{JSON.stringify(getImages.data)}
			<div className="flex flex-col  items-center">
				<p className="bg-conssul-100 dark:bg-red-100">
					hello. ... my name ..?
				</p>
				<TiltSquare />
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
