import './styles.css'

export default function Footer () {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Dmarks Rações. Todos os direitos reservados.</p>
                <p>Feito com carinho em Salvador, Bahia.</p>
            </div>
        </footer>
    )
}