"use client";
import { Button } from '@/components/ui/button'
import { trpc } from './_trpc/client'
import SlideShow from '@/src/components/SlideShow';
import Login from '@/src/components/login';

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();
	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<p>This is just template page.. ? nope</p>
			<Button variant="outline">Button</Button>
			<SlideShow ></SlideShow>
			<div className='w-1/2 mx-auto'>
				<Login />
			</div>
		</div>
	)
}
