import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
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
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
