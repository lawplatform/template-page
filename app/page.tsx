"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import Card_list from "@/src/components/Card_list";
import C_Basic from "@/src/components/C_Basic";
import Slide_Drag from "@/src/components/Slide_Drag";
import A from "@/src/components/A";
import Slide_Logo from "@/src/components/Slide_Logo/Slide_Logo";

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<div className="flex flex-col  items-center">
				<p className="bg-conssul-100 dark:bg-red-100">
					hello. ... my name ....?

				</p>
				<Slide_Logo >
					<li>A</li>
					<li>CSS</li>
					<li>Two</li>
					<li>Home</li>
					<li>mymymy</li>
					<li>CSS</li>
					<li>Two</li>
					<li>Home</li>
					<li>CSS</li>
					<li>Two</li>
					<li>Last</li>
				</Slide_Logo>
				<Card_list />
			</div>
		</div>
	);
}
