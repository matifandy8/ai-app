import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Navbar/Footer'
import './globals.scss'

export const metadata = {
    title: 'DevCoachAI',
    description: 'The AI powered coding mentor'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Navbar />
            <body>{children}</body>
            <Footer />
        </html>
    )
}
