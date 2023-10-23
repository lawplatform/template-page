import NumberAnimation from "../effect/NumberAnimation";
interface C_infoProps {
	title: string;
	number: number;
	des: string;
	children: React.ReactNode;
}
export default function C_info({ title, number, des, children }: C_infoProps) {
	return (
		<div className="mb-10 flex translate-y-4 transform flex-col items-center gap-3 rounded-2xl border-2 border-solid border-gray-200 px-8 py-10 pb-10 shadow-xl transition duration-300 ease-in-out hover:translate-y-0">
			{children}
			<div className="text-4xl font-bold">
				<NumberAnimation value={number} />
			</div>
			<p className="text-dark-grey-900 text-2xl font-extrabold">{title}</p>
			<a className="text-1g text-gray-400" href="mailto: hello@loopple.com">{des}</a>
		</div>
	)
}
