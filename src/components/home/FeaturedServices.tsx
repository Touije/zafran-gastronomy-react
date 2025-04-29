
import { ServiceCard } from '@/components/home/ServiceCard';

// Cette structure correspond au format des données de l'API
interface ServiceAttributes {
  title: string;
  slug: string;
  description: Array<{ type: string; children: Array<{ type: string; text: string }> }>;
  price: number;
  categor: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ServiceData {
  id: number;
  documentId: string;
  attributes: ServiceAttributes;
}

export function FeaturedServices() {
  // Services fictifs en attendant l'intégration de l'API
  const mockServices = [
    {
      id: 5,
      title: "Service Traiteur Prestige",
      slug: "service-traiteur-prestige",
      description: "Notre service traiteur haut de gamme s'adapte à tous vos événements professionnels ou privés. Nos chefs élaborent des menus raffinés avec des produits frais et locaux. Nous proposons un service complet incluant la mise en place, le service et le nettoyage.",
      price: 45,
      category: "Traiteur"
    },
    {
      id: 4,
      title: "Organisation d'Événements",
      slug: "organisation-evenements",
      description: "De la conception à la réalisation, nous prenons en charge l'organisation complète de vos événements. Mariages, anniversaires, séminaires d'entreprise... Nous coordonnons tous les aspects: menu, décoration, animation, logistique.",
      price: 12000,
      category: "Événements"
    },
    {
      id: 7,
      title: "Cours de Cuisine Gourmande",
      slug: "cours-cuisine-gourmande",
      description: "Apprenez à cuisiner comme un chef avec nos cours thématiques. Pâtisserie française, cuisine méditerranéenne, plats végétariens... Nos cours sont adaptés à tous les niveaux et se déroulent dans notre cuisine professionnelle équipée.",
      price: 75,
      category: "Cours"
    },
    {
      id: 9,
      title: "Chef à Domicile",
      slug: "chef-a-domicile",
      description: "Offrez-vous les services d'un chef professionnel à domicile. Nous concevons un menu personnalisé selon vos goûts et contraintes alimentaires, faisons les courses, cuisinons et servons directement chez vous.",
      price: 150,
      category: "Traiteur"
    }
  ];

  return (
    <section className="py-20 bg-muted moroccan-pattern">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Nos Services Gastronomiques</h2>
          <p className="section-subtitle">
            Découvrez notre gamme de prestations culinaires marocaines, adaptées à vos besoins et événements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              category={service.category}
              slug={service.slug}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/services" className="btn-outline">
            Voir tous nos services
          </a>
        </div>
      </div>
    </section>
  );
}
