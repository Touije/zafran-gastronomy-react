
import { useState } from 'react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Un service exceptionnel ! L'équipe de Zafran a organisé notre mariage avec professionnalisme. Les plats étaient délicieux et la présentation impeccable. Nos invités parlent encore de ce repas !",
      name: "Sophie & Thomas",
      role: "Mariage - Juin 2024"
    },
    {
      id: 2,
      text: "Les cours de cuisine ont dépassé mes attentes. J'ai appris les véritables techniques de la cuisine marocaine avec des explications claires et une approche pédagogique. Désormais, je prépare un couscous digne de ce nom !",
      name: "Marie Dupont",
      role: "Participante aux cours de cuisine"
    },
    {
      id: 3,
      text: "Nous faisons régulièrement appel à Zafran pour nos événements d'entreprise. Le service est toujours irréprochable et les mets délicieux. Un partenaire gastronomique fiable et créatif.",
      name: "Philippe Martin",
      role: "Directeur, Entreprise XYZ"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-spice-950 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          <div className="h-1 w-24 bg-zafran-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                  <div className="text-center">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-zafran-400 mx-auto" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-xl italic mb-8">"{testimonial.text}"</p>
                    <div>
                      <p className="font-serif font-bold text-zafran-300 text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-zafran-400 w-8' : 'bg-gray-600'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-zafran-500/80 hover:bg-zafran-500 p-2 rounded-full text-white"
            aria-label="Témoignage précédent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-zafran-500/80 hover:bg-zafran-500 p-2 rounded-full text-white"
            aria-label="Témoignage suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
