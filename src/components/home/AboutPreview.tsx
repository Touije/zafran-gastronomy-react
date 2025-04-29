
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title mb-6">Notre Histoire</h2>
            <p className="text-clay-700 mb-6">
              Fondée en 2015 par le Chef Martin Dupont, notre entreprise est née d'une passion pour la gastronomie marocaine et le partage. 
              Après 15 ans d'expérience dans des restaurants étoilés en France et à l'international, le Chef Dupont a souhaité proposer une 
              expérience culinaire unique, accessible en dehors du cadre traditionnel du restaurant.
            </p>
            <p className="text-clay-700 mb-8">
              Notre philosophie repose sur trois piliers essentiels: l'excellence culinaire, la personnalisation des services et l'utilisation 
              de produits locaux et de saison. Nous collaborons étroitement avec des producteurs locaux pour garantir la fraîcheur et la qualité 
              de nos ingrédients.
            </p>
            <Link to="/about" className="btn-primary">
              En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573608035869-2f10a1d793e3?q=80&w=1974"
                  alt="Chef préparant un plat marocain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-zafran-500 rounded-lg flex items-center justify-center p-6 shadow-lg">
                <span className="font-serif text-white text-center text-xl">
                  10 ans d'excellence culinaire
                </span>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-spice-500 rounded-lg flex items-center justify-center p-4 shadow-lg">
                <span className="font-serif text-white text-center">
                  Savoir-faire traditionnel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
