"use client";
import { Button } from '@/components/ui/button'
import { trpc } from './_trpc/client'
import SlideShow from '@/src/components/SlideShow';

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();
	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<p>This is just template page.. di?</p>
			<Button variant="outline">Button</Button>
			<SlideShow ></SlideShow>
		</div>
	)
}
