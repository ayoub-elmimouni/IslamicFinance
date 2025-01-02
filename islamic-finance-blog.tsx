import React from 'react';
import { Menu, BookOpen, Calculator, MessageSquare, TrendingUp, Book, Users } from 'lucide-react';

const IslamicFinanceBlog = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('tous');

  const articles = [
    {
      title: "L'Importance du Sukuk dans le Financement des Projets",
      category: "Finance",
      preview: "Cet article explore le rôle du Sukuk, souvent appelé l'obligation islamique, dans le financement des grands projets d'infrastructure...",
      color: "bg-orange-50 border-l-4 border-orange-500",
      tag: "Sukuk"
    },
    {
      title: "Le Rôle du Wakf dans le Développement Économique",
      category: "Développement",
      preview: "Le Wakf, une dotation perpétuelle à des fins caritatives, joue un rôle clé dans le développement social et économique...",
      color: "bg-blue-50 border-l-4 border-blue-500",
      tag: "Philanthropie"
    },
    {
      title: "Les Financements Islamiques pour les Startups",
      category: "Innovation",
      preview: "Avec la montée de l'entrepreneuriat dans le monde musulman, de nombreux entrepreneurs cherchent des financements compatibles avec la finance islamique...",
      color: "bg-orange-50 border-l-4 border-orange-500",
      tag: "Startups"
    },
    {
      title: "L'Assurance Takaful : Une Protection Solidaire",
      category: "Assurance",
      preview: "L'assurance Takaful est une alternative islamique aux assurances conventionnelles. Ce système repose sur la solidarité...",
      color: "bg-blue-50 border-l-4 border-blue-500",
      tag: "Takaful"
    }
  ];

  const categories = ["tous", "Finance", "Développement", "Innovation", "Assurance"];

  const featuredArticle = {
    title: "L'Importance du Sukuk dans le Financement des Projets",
    description: "Une Alternative Éthique aux Obligations",
    image: "/api/placeholder/800/400",
    tag: "Article à la une"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              {/* Logo Ennea */}
              <img 
                src="/api/placeholder/150/50" 
                alt="Ennea Logo" 
                className="h-12"
              />
            </div>
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu />
            </button>
            
            <div className="hidden md:flex space-x-6">
              {categories.map((cat) => (
                <a key={cat} href="#" className="hover:text-orange-200 transition-colors">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((cat) => (
                <a key={cat} href="#" className="block px-3 py-2 hover:bg-blue-600">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">
                {featuredArticle.tag}
              </span>
              <h1 className="text-4xl font-bold mb-4">{featuredArticle.title}</h1>
              <p className="text-xl mb-6">{featuredArticle.description}</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Lire l'article
              </button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={featuredArticle.image} alt="Featured" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === category 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles
            .filter(article => activeTab === 'tous' || article.category === activeTab)
            .map((article, index) => (
              <article 
                key={index} 
                className={`${article.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.preview}</p>
                <button className="text-blue-600 hover:text-orange-500 font-medium transition-colors">
                  Lire la suite →
                </button>
              </article>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              {/* Logo dans le footer */}
              <img 
                src="/api/placeholder/150/50" 
                alt="Ennea Logo" 
                className="h-12 mb-4"
              />
              <p className="text-gray-300">Votre source d'information sur la finance islamique</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>AAOIFI</li>
                <li>IFSB</li>
                <li>Banque Islamique de Développement</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">Posez vos questions à nos experts</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 mb-2"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IslamicFinanceBlog;
