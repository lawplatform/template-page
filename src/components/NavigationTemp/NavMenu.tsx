import { Button } from "@/components/ui/button";
import Link from "next/link";
interface NavMenuProps {
	toggle: () => void;
}
export default function NavMenu({ toggle }: NavMenuProps) {
	return (
		<>
			<div className="w-full h-20 bg-emerald-800 sticky top-0">
				<div className="container mx-auto px-4 h-full">
					<div className="flex justify-between items-center h-full">
						<p>logo</p>
						<ul className="hidden md:flex gap-x-6 text-white">
							<li>
								<Link href="/about">
									<p>About Us</p>
								</Link>
							</li>
							<li>
								<Link href="/services">
									<p>Services</p>
								</Link>
							</li>
							<li>
								<Link href="/contacts">
									<p>Contacts</p>
								</Link>
							</li>
						</ul>
						<div className="hidden md:block">
							<Button onClick={toggle} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
