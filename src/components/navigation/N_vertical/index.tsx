import { Bell, Database, Hash, Home, Mail, Settings, User2 } from "lucide-react";
import Link from "next/link";
import { Logo_Symbol } from "../../Logo";
const NAVIGATION_ITEMS = [
	{
		title: "홈",
		icon: Home,
		link: "/manage/home",
	},
	{
		title: "프로필",
		icon: User2,
		link: "/manage/profile"
	},
	{
		title: "태그",
		icon: Hash,
		link: "/manage/tag"
	},
	{
		title: "알림",
		icon: Bell,
		link: "/manage/info"
	},
	{
		title: "메시지",
		icon: Mail,
		link: "/manage/msg"
	}, {
		title: "설정",
		icon: Settings,
		link: "/manage/setting"
	}, {
		title: "자료실",
		icon: Database,
		link: "/manage/store"
	}
];
export default function N_vertical() {
	return (
		<section className=" h-screen w-52 flex-col  px-3 py-10 shadow-md">
			<div className="ml-4">
				<Logo_Symbol color={"black"} />
			</div>
			{NAVIGATION_ITEMS.map((item, index) => (
				<Link
					className="hover:scale-102 flex items-center justify-start space-x-2  bg-white p-4 transition duration-300 ease-in-out hover:hover:bg-gray-100"
					href={item.link}
					key={item.title}
				>
					<div key={index} className="mx-1  ">
						<item.icon />
					</div>

					<div className=" font-neutral-10  font-noto ">{item.title}</div>
				</Link>
			))}
		</section>
	);
}
