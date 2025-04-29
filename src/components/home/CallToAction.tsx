
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-zafran-500 to-spice-600 text-white moroccan-pattern">
      <div className="container-custom text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Prêt à vivre l'expérience Zafran?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
          Contactez-nous dès maintenant pour discuter de votre projet culinaire et recevoir une proposition sur mesure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary bg-white text-zafran-500 hover:bg-white/90">
            Contactez-nous <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link to="/services" className="btn-outline text-white border-white hover:bg-white/20 hover:text-white">
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
