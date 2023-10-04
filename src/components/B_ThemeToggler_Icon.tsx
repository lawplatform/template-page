"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import { useState } from "react"

export function B_ThemeToggler_Icon() {
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
		<Button size="icon" variant="outline" onClick={handleClick} className="border-slate-100">
			{lightMode ?
				(<Sun color="blue" />) :
				(<Moon />)}
		</Button>
	)
}

