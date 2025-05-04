
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useServices } from '@/services/api';
import { ServiceCard } from '@/components/home/ServiceCard';
import { toast } from '@/components/ui/sonner';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Filter } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Services = () => {
  const { data: servicesData, isLoading, error } = useServices();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

  useEffect(() => {
    if (error) {
      toast.error("Erreur lors du chargement des services");
      console.error("Error fetching services:", error);
    }
  }, [error]);
  
  const services = servicesData?.data || [];

  // Extraire les catégories uniques
  const categories = [...new Set(services.map(service => service.categor))];

  // Filtrer les services par catégorie et recherche
  const filteredServices = services.filter(service => {
    // Si aucune catégorie sélectionnée, afficher tous les services
    const matchesCategory = categoryFilter.length === 0 || categoryFilter.includes(service.categor);
    
    // Recherche par titre ou description
    const matchesSearch = searchTerm === "" || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getDescriptionText(service.description).toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Fonction utilitaire pour extraire le texte de description
  function getDescriptionText(description: any): string {
    if (!description) return "";
    
    if (Array.isArray(description) && description.length > 0) {
      const paragraph = description[0];
      if (paragraph && paragraph.children && paragraph.children.length > 0) {
        return paragraph.children[0].text;
      }
    }
    
    return typeof description === 'string' ? description : "";
  }

  // Gérer la sélection/désélection des catégories
  const handleCategoryChange = (category: string) => {
    setCategoryFilter(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSearchTerm("");
    setCategoryFilter([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="section-title mb-6">Nos Services</h1>
              <p className="section-subtitle">
                Découvrez l'ensemble de nos prestations gastronomiques marocaines
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              {/* Barre de recherche */}
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zafran-500"
                />
              </div>
              
              {/* Menu déroulant de filtres par catégorie */}
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filtrer par catégorie
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white">
                    <DropdownMenuLabel>Catégories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categories.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category}
                        checked={categoryFilter.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    ))}
                    <DropdownMenuSeparator />
                    <div className="p-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={resetFilters}
                        className="w-full"
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {categoryFilter.length > 0 && (
                  <span className="text-sm bg-muted rounded-full px-2 py-1">
                    {categoryFilter.length} {categoryFilter.length === 1 ? 'filtre' : 'filtres'}
                  </span>
                )}
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zafran-500"></div>
              </div>
            ) : filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={getDescriptionText(service.description)}
                    price={service.price}
                    category={service.categor}
                    slug={service.slug}
                    imageUrl={service.image?.url ? `http://localhost:1337${service.image.url}` : undefined}
                    delay={index * 100}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p>Aucun service ne correspond à votre recherche.</p>
                <Button 
                  variant="link" 
                  onClick={resetFilters}
                  className="mt-2"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
