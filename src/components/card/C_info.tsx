import NumberAnimation from "../effect/NumberAnimation";
interface C_infoProps {
	title: string;
	number: number;
	des: string;
	color: string;
	children: React.ReactNode;

}
export default function C_info({ title, number, des, children, color }: C_infoProps) {
	const style = {
		background: color
	}
	return (
		<div className="my-2 flex flex-row rounded  p-4 shadow-md">
			<div style={style} className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
				{children}
			</div>
			<div className="ml-4 flex flex-grow flex-col">
				<div className="text-md font-bold text-gray-500">{title}</div>
				<div className="text-lg font-bold">
					<NumberAnimation value={number} />
				</div>
			</div>
		</div>
	)
}
