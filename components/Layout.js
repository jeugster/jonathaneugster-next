import Nav from '@components/Nav'
import Footer from '@components/Footer'

// Wrapper for design
export default function Layout({ children }) {
    return (
        <main className="flex-auto w-full h-full">
            <div className="overlay backdrop-blur"></div>
            <Nav />
            <div className="">{children}</div>
            <Footer />
        </main>
    )
}
