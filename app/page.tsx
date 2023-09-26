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
import Divider from '@/src/components/Divider';
import Card_list from '@/src/components/Card_list';

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<div className='flex flex-col  items-center'>
				<p>hello...? </p>
				<Card_list></Card_list>
			</div>
		</div>
	)
}
