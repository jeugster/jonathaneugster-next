import Header from '@components/Header'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function Layout({children}) {
    return (
        <div>
            <Header />
            <Nav />
            {children}
            <Footer />
        </div>
    )
}
