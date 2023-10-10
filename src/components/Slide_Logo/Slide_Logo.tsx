import React from 'react';
import { useEffect } from 'react'
import './Slide_Logo.css'


interface Slide_LogoProps {
	children: React.ReactNode;
}
const Slide_Logo: React.FC<Slide_LogoProps> = ({ children }) => {
	//export default function Slide_Logo({ children }): React.FC<Slide_LogoProps> {
	const childItems =
		React.Children.map(children, (child, index) => (<li key={index}>{child}</li>));
	useEffect(() => {

		const scrollers = document.querySelectorAll(".scroller");
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
		function addAnimation() {
			scrollers.forEach((scroller) => {
				scroller.setAttribute("data-animated", "true")
				const Inner = scroller.querySelector(".scroller_inner");
				if (Inner != null) {
					const Content = Array.from(Inner.children);
					Content.forEach((item) => {
						const duplicatedItem = item.cloneNode(true) as HTMLElement;
						duplicatedItem.setAttribute("aria-hidden", "true");
						Inner.appendChild(duplicatedItem);
					})
				}

			})
		}
	}, [])
	return (
		<div className=" scroller my-5 w-full overflow-x-hidden" data-speed="slow">
			<ul className="tag-list scroller_inner mx-auto flex flex-row justify-center gap-3">
				{children}
			</ul>
		</div>
	)
}

export default Slide_Logo;
