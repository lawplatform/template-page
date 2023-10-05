import { useEffect, useRef, useState } from "react";
import './Slide_Drag.css'
export default function Slide_Drag({ children }) {
	const slideArray = [1, 2, 3, 4, 5, 6]
	const [width, setWidth] = useState(0);
	const dragSlider = useRef();

	useEffect(() => {
		const tabs = document.querySelectorAll(".scrollable-tabs-container a");
		const rightArrow = document.querySelector(
			".scrollable-tabs-container .right-arrow svg"
		);

		const leftArrow = document.querySelector(
			".scrollable-tabs-container .left-arrow svg"
		);
		const tabsList = document.querySelector(".scrollable-tabs-container ul");
		const leftArrowContainer = document.querySelector(
			".scrollable-tabs-container .left-arrow"
		);
		const rightArrowContainer = document.querySelector(
			".scrollable-tabs-container .right-arrow"
		);

		const removeAllActiveClasses = () => {
			tabs.forEach((tab) => {
				tab.classList.remove("active");
			});
		};

		tabs.forEach((tab) => {
			tab.addEventListener("click", () => {
				removeAllActiveClasses();
				tab.classList.add("active");
			});
		});

		const manageIcons = () => {
			if (tabsList && tabsList.scrollLeft >= 20) {
				leftArrowContainer?.classList.add("active");
			} else {
				leftArrowContainer?.classList.remove("active");
			}

			if (tabsList !== null) {
				let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
				console.log("scroll width: ", tabsList.scrollWidth);
				console.log("client width: ", tabsList.clientWidth);

				if (tabsList.scrollLeft >= maxScrollValue) {
					rightArrowContainer?.classList.remove("active");
				} else {
					rightArrowContainer?.classList.add("active");
				}
			}
		};
		if (rightArrow && tabsList && leftArrow) {
			rightArrow.addEventListener("click", () => {
				tabsList.scrollLeft += 200;
				manageIcons();
			});

			leftArrow.addEventListener("click", () => {
				tabsList.scrollLeft -= 200;
				manageIcons();
			});

			tabsList.addEventListener("scroll", manageIcons);

			let dragging = false;

			const drag = (e: any) => {
				if (!dragging) return;
				tabsList.classList.add("dragging");
				tabsList.scrollLeft -= e.movementX;
			};

			tabsList.addEventListener("mousedown", () => {
				dragging = true;
			});

			tabsList.addEventListener("mousemove", drag);

			document.addEventListener("mouseup", () => {
				dragging = false;
				tabsList.classList.remove("dragging");
			});
		}
	}, []);

	return (
		<div className="scrollable-tabs-container">
			<div className="left-arrow">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 19.5L8.25 12l7.5-7.5"
					/>
				</svg>
			</div>

			<ul>
				<li>
					<a href="#" className="active">All</a>
				</li>

				<li>
					<a href="#">Music</a>
				</li>

				<li>
					<a href="#">Chess</a>
				</li>

				<li>
					<a href="#">Live</a>
				</li>

				<li>
					<a href="#">Gaming</a>
				</li>

				<li>
					<a href="#">Editing</a>
				</li>

				<li>
					<a href="#">Mixing console</a>
				</li>

				<li>
					<a href="#">Comedy</a>
				</li>

				<li>
					<a href="#">Computer Hardware</a>
				</li>

				<li>
					<a href="#">News</a>
				</li>

				<li>
					<a href="#">Computer Programming</a>
				</li>

				<li>
					<a href="#">Video Editing Software</a>
				</li>

				<li>
					<a href="#">Sports</a>
				</li>
			</ul>

			<div className="right-arrow active">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</div>
		</div>
	)
}
