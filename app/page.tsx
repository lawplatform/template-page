"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import Card_list from "@/src/components/Card_list";
import C_Basic from "@/src/components/C_Basic";
import Slide_Drag from "@/src/components/Slide_Drag";
import A from "@/src/components/A";

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<div className="flex flex-col  items-center">
				<p className="bg-conssul-100 dark:bg-red-100">
					hello. ... my name ..!{" "}
				</p>
				<Slide_Drag>
					<A say="hello!" />
					<A say="hello2" />
					<A say="hello3" />
					<A say="hello4" />
					<A say="hello5" />
					<A say="hello6" />
					<A say="hello7" />
					<A say="hello8" />
					<A say="hello9" />
					<A say="hello10" />
				</Slide_Drag>
				<Card_list></Card_list>
			</div>
		</div>
	);
}
