    'use client'

    import { useState } from 'react'
    import Link from 'next/link'

    export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-green-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">🥬</span>
                </div>
                <span className="text-white font-bold text-xl">Lechuga Market</span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-green-200 transition-colors">
                Inicio
                </Link>
                <Link href="/productos" className="text-white hover:text-green-200 transition-colors">
                Productos
                </Link>
                <Link href="/nosotros" className="text-white hover:text-green-200 transition-colors">
                Nosotros
                </Link>
                <Link href="/contacto" className="text-white hover:text-green-200 transition-colors">
                Contacto
                </Link>
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Ordenar Ahora
                </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-green-200 focus:outline-none"
                >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                </button>
            </div>
            </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700 rounded-lg mb-4">
                    <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
                    Inicio
                </Link>
                <Link href="/productos" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
                    Productos
                </Link>
                <Link href="/nosotros" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
                    Nosotros
                </Link>
                <Link href="/contacto" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
                    Contacto
                </Link>
                <button className="w-full text-left text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
                    Ordenar Ahora
                </button>
                </div>
            </div>
            )}
        </div>
        </nav>
    )
    }