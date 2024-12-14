const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>ZoneEsport</h2>
                </div>

                <div className="footer-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>

                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} SportFusion. Todos los derechos reservados.</p>
                    <p>
                        <a href="/privacy-policy">Política de privacidad</a> | <a href="/terms-of-service">Términos de servicio</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;