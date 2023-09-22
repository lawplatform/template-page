"use client";
import { useState } from "react";
import Side from "./Side";
import NavMenu from "./NavMenu";

export default function MyNav() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<NavMenu toggle={toggle}></NavMenu>
			<Side isOpen={isOpen} toggle={toggle} />
		</div>
	)
}
