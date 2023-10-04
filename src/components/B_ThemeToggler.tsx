"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function B_ThemeToggler() {
	const [lightMode, setLightMode] = useState(true);
	const { setTheme } = useTheme()
	const handleClick = () => {
		if (lightMode) {
			setTheme("dark")
		} else {
			setTheme("light")
		}
		setLightMode(!lightMode);
	}
	return (
		<div className="my-3 flex flex-row justify-between ">
			<p >
				{lightMode ?
					(<Sun />) :
					(<Moon />)}
			</p>
			<Switch id="light-mode" onCheckedChange={handleClick} className="mx-1" />
		</div>
	)
}

