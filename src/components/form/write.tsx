import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function Write() {
	return (
		<div className="flex flex-col">
			<div className="border-b-[0.5px]">
				<Input type="text" placeholder="write" />
			</div>
			<div className="flex w-full items-center justify-between">
				<Button className="">가기</Button>
			</div>
		</div>
	)
}
