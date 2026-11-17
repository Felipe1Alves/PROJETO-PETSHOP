import './styles.css'
import petshopImage from '../../assets/petshop.jpg'

export default function Clientes() {
    return (
        <section className="welcome-section">
            <div className="welcome-card">
                <div className="welcome-copy">
                    <span className="welcome-label">Dmarks Rações · Salvador/BA</span>
                    <h1>O cuidado que seu pet merece começa aqui.</h1>
                    <p>
                        Somos uma loja de rações em Salvador, Bahia, dedicada a ajudar você
                        a cuidar bem do seu pet. Aqui, seu companheiro é tratado com carinho
                        e atenção.
                    </p>
                    <span className="welcome-highlight">Carinho e atenção em cada visita.</span>
                </div>
                <div className="welcome-image">
                    <img src={petshopImage} alt="Logotipo da Dmarks Rações com ilustrações de um gato e um cachorro" />
                </div>
            </div>
        </section>
    )
}