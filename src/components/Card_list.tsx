/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Xx6DE3L
 */
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function Card_list() {
	return (
		<div className="bg-red-100 w-full">
			<section className=" py-12 md:py-24 lg:py-32">
				<div className="container flex flex-col items-center gap-8 px-1 ">
					<div className="flex flew-row w-full bg-zinc-300 justify-between">
						<h1 className="text-2xl font-bold tracking-tighter text-start">이롭게 하는 교육상담 </h1>
						<button onClick={() => console.log("click")}>
							<Star />
						</button>
					</div>
					<img
						alt="Sneaker Image"
						className="mx-auto p-2 aspect-[1/1] object-cover object-center border-2 rounded-lg"
						height="100"
						src="/temp/temp.svg"
						width="300"
					/>
					<div className="space-y-6 bg-blue-100">

						<div className="bg-green-100 h-screen">
							<p className="text-base text-zinc-500 dark:text-zinc-400">
								These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
								high-quality materials, they are designed to last.
							</p>
						</div>
						<div className="flex  items-center justify-end bg-green-100">
							<div className="ml-4 space-y-1">
								<p className="text-sm font-medium leading-none text-start">Olivia Martin</p>
								<p className="text-sm text-muted-foreground text-start">교육전문</p>

							</div>
							<span className="relative flex shrink-0 overflow-hidden rounded-full h-14 w-14">
								<img className="aspect-square h-full w-full" alt="Avatar" src="/profile/avatar.png" />
							</span>



						</div>
					</div>
					<p className="text-1 text-start font-semibold text-zinc-900 dark:text-zinc-50">￦2500 / 30분 </p>
					<Button className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
						신청하기
					</Button>
					<p className="text-xs text-zinc-500 dark:text-zinc-400">
						Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
					</p>
				</div >
			</section >
		</div >
	)
}

