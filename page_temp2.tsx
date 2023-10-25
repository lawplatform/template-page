"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import { Nanum } from "./font"
import { signIn, signOut, useSession } from "next-auth/react";
import C_info from "@/src/components/card/C_info";
import { CircleDollarSign, Heart, User } from "lucide-react";
import Article_With_Scroll from "@/src/page/Article_with_Scroll";
import Ch_line from "@/src/components/chart/Ch_line";
import Write from "@/src/components/wirte";
import I_line from "@/src/components/info/i_line";
export default function Home() {
	const getTodos = trpc.getTodos.useQuery();
	const getImages = trpc.getImages.useQuery();
	const [isOpen, setIsOpen] = useState(false);
	const { data: session } = useSession();
	return (
		<div className="mx-auto mt-5 flex h-screen w-full flex-col px-1 sm:ml-2 sm:px-36">
			<Write></Write>
			<h3 className="mb-3   w-80 bg-black font-noto text-6xl text-white">Dashboard</h3>
			<span>info</span>
			<div className="grid h-full w-full grid-cols-1  gap-3 md:grid-cols-2">
				<div className="h-full w-full"><I_line /></div>

				<div className="grid grid-cols-3 gap-2  rounded-xl border bg-card text-card-foreground shadow">
					<C_info title={"수익"} number={2500} des={"이번달 수익"}>
						<CircleDollarSign className="h-20 w-20" />
					</C_info>
					<C_info title={"상담"} number={34} des={"이번달 수익"}>
						<User className="h-20 w-20" />
					</C_info>
					<C_info title={"선호"} number={120} des={"많은 분들이 좋아해주셨어요!"}>
						<Heart className="h-20 w-20" />
					</C_info>
				</div>
			</div>

			<div>
				메모 is not my memo
			</div>
			<div>
				정보 - 총방문 , 수익, 좋아요
			</div>
			<div>약속 </div>

			<button onClick={() => signIn()}>
				Sign In
			</button>

			<button onClick={() => signOut()}>
				Sign Out
			</button>
			{session?.user ? (
				<>
					<img
						className="h-8 w-8 rounded-full"
						src={session.user.image || ""}
					/>
					<p className="text-sky-600"> {session.user.email}</p>
				</>) : (
				<div> you shold login this stage</div>
			)
			}
		</div >


	)
}
