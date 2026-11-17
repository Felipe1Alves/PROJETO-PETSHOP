import './styles.css'

export default function Header () {
    return (
        <header className="site-header">
            <div className="header-content">
                <a className="brand" href="/" aria-label="Dmarks Rações - página inicial">
                    <span className="brand-mark" aria-hidden="true">D</span>
                    <span className="brand-name">Dmarks <strong>Rações</strong></span>
                </a>
                <p className="header-location">Salvador <span aria-hidden="true">•</span> Bahia</p>
            </div>
        </header>
    )
}