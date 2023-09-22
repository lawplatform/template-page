"use client";
import { Button } from '@/components/ui/button'
import { trpc } from './_trpc/client'
import SlideShow from '@/src/components/SlideShow';
import Login from '@/src/components/login';
import Card_gallery from '@/src/components/Card_gallery';
import ToggleMenuViaSize from '@/src/components/ToggleMenuViaSize';
import Drawer from '@/src/components/Drawer';
import { useState } from 'react';
import Card_Mini from "@/src/components/Card_Mini";

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<p>This is just template page...!</p>
			<Button variant="outline">Button</Button>
			<SlideShow ></SlideShow>
			<div className='w-1/2 mx-auto'>
				<Login />
			</div>
			<div>
				<ToggleMenuViaSize />
			</div>
			<div>
				<Card_Mini></Card_Mini>
			</div>


		</div>
	)
}
