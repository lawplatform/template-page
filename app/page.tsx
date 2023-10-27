"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import { Nanum } from "./font";
import { signIn, signOut, useSession } from "next-auth/react";
import C_info from "@/src/components/card/C_info";
import { CircleDollarSign, Heart, User } from "lucide-react";
import Ch_line from "@/src/components/chart/Ch_line";
import Write from "@/src/components/form/write";

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();
	const getImages = trpc.getImages.useQuery();
	const [isOpen, setIsOpen] = useState(false);
	const { data: session } = useSession();
	return (
		<div className="mx-auto max-w-5xl justify-items-start text-start">
			<h1 className=" text-start font-noto text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
				정보
			</h1>
			<span className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
				각종 정보 표시
			</span>

			<Write></Write>
			<section>
				<h1 className="mb-2 text-2xl">일정</h1>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<div className="rounded-xl border bg-card text-card-foreground shadow">
						오늘 일정{" "}
					</div>
					<div className="rounded-xl border bg-card text-card-foreground shadow">
						목표{" "}
					</div>
				</div>
			</section>
			<section>
				<h1 className="text-2xl">통계</h1>
				<div className="sm:grid-cols2 grid grid-cols-1">
					<div className="rounded-xl border bg-card text-card-foreground shadow">
						{" "}
						<Ch_line />{" "}
					</div>
					<div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
						<C_info title={"수익"} number={2500} des={"수익"} color={"#FF8080"}>
							<CircleDollarSign />
						</C_info>
						<C_info title={"상담"} number={2500} des={"수익"} color={"#FFCF96"}>
							<User />
						</C_info>
						<C_info
							title={"선호"}
							number={2500}
							des={"좋아요"}
							color={"#F6FDC3"}
						>
							<Heart />
						</C_info>
						<C_info title={"수익"} number={2500} des={"수익"} color={"#CDFAD5"}>
							<CircleDollarSign />
						</C_info>
					</div>
				</div>
			</section>
			<section>
				<h1 className="text-2xl">관리</h1>
				<div className="gird grid-cols-1 sm:grid-cols-2">
					<div className="h-24 rounded-xl border bg-card text-card-foreground shadow">
						{" "}
						현재 상품{" "}
					</div>
					<div className="rounded-xl border bg-card text-card-foreground shadow">
						{" "}
						별점{" "}
					</div>
					<div className="rounded-xl border bg-card text-card-foreground shadow">
						{" "}
						댓글 - 리스트{" "}
					</div>
				</div>
			</section>
		</div>
	);
}
