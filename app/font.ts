import { Nanum_Gothic, Noto_Sans } from "next/font/google"

export const Nanum = Nanum_Gothic({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nanum',
	weight: '400',
	style: 'normal'
})

export const notoSans = Noto_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-noto-sans',
	weight: '200',
	style: 'normal'
})


