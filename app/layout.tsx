import QueryProvider from '@/src/utils/QueryProvider';
import './globals.css'
import type { Metadata } from 'next'
import Provider from './_trpc/Provider';
import Navbar from '@/src/components/Navbar';
import { ThemeProvider } from '@/src/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Open_Sans, Roboto_Mono, DM_Serif_Text } from 'next/font/google'

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-opensans',
})

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})

const dm_serif = DM_Serif_Text({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dm-serif',
	weight: '400',
})

export const metadata: Metadata = {
	title: 'name',
	description: 'what we do..',
	keywords: ['A', 'B'],
	openGraph: {
		title: 'name',
		description: 'some descripiton',
		url: 'URL',
		siteName: 'search keyword',
		images: [
			{
				url: 'logo path should be absolute',
				width: 800,
				height: 600,
				alt: 'logo'
			},
			{
				url: 'logo path should be absolute',
				width: 1800,
				height: 1600,
				alt: 'logo',
			},
		],
		type: 'website',
	},

};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${openSans.variable} ${robotoMono.variable} ${dm_serif.variable} font-sans`}>
			<body >
				<Provider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="flex-flex-col text-center">
							<div className='h-20 '><Navbar /></div>
							<div >
								{children}
							</div>
						</div>
						<Toaster />
					</ThemeProvider>
				</Provider>
			</body>
		</html >
	)
}
