    export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🥬</span>
                </div>
                <span className="text-xl font-bold">Lechuga Market</span>
                </div>
                <p className="text-gray-300 mb-4">
                Frescura natural directamente del campo a tu mesa. Ofrecemos las mejores lechugas orgánicas con entrega a domicilio.
                </p>
                <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.816 3.75 13.665 3.75 12.368s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                    </svg>
                </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                {/* <li><a href="/" className="">Inicio</a></li> */}
                <li><a href="/productos" className="text-gray-300 hover:text-white transition-colors">Productos</a></li>
                <li><a href="/nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</a></li>
                <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <ul className="space-y-2 text-gray-300">
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ info@lechugamarket.com</li>
                <li>📍 Campo Verde 123, Ciudad</li>
                <li>🕒 Lun-Vie: 8:00-18:00</li>
                </ul>
            </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Lechuga Market. Todos los derechos reservados.</p>
            </div>
        </div>
        </footer>
    )
    }