import Link from 'next/link'

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Lechuga Romana',
      price: '$2.99',
      image: '/api/placeholder/300/200',
      description: 'Crujiente y dulce, perfecta para ensaladas'
    },
    {
      id: 2,
      name: 'Lechuga Iceberg',
      price: '$1.99',
      image: '/api/placeholder/300/200',
      description: 'Fresca y acuosa, ideal para sandwiches'
    },
    {
      id: 3,
      name: 'Lechuga Orgánica',
      price: '$3.49',
      image: '/api/placeholder/300/200',
      description: 'Cultivada sin pesticidas, 100% natural'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-100 from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frescura que Sabe a 
            <span className="text-green-200"> Campo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Lechugas orgánicas recién cosechadas, entregadas directamente desde nuestra granja a tu hogar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/productos" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
            >
              Ordenar Ahora
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Conocer Más
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega en 24h</h3>
              <p className="text-gray-600">Recibe tu lechuga fresca al día siguiente de tu pedido</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">100% Orgánico</h3>
              <p className="text-gray-600">Cultivado sin pesticidas ni productos químicos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Máxima Frescura</h3>
              <p className="text-gray-600">Cosechado el mismo día del envío para garantizar frescura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Nuestras Lechugas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-green-200 flex items-center justify-center">
                  <span className="text-6xl">🥬</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/productos" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}