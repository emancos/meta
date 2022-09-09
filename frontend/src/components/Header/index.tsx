import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {

    return (
        <>
            <header>
                <div className="meta-logo-container">
                    <img src={logo} alt="Meta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://github.com/emancos/meta">@emancos</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header
