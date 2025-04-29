
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAbout } from "@/services/api";
import { toast } from "@/components/ui/sonner";
import { useEffect } from "react";

const About = () => {
  const { data: aboutData, isLoading, error } = useAbout();

  useEffect(() => {
    if (error) {
      toast.error("Erreur lors du chargement des informations");
      console.error("Error fetching about data:", error);
    }
  }, [error]);

  const historyItems = aboutData?.data?.history || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="section-title mb-6">À propos de nous</h1>
              <div className="w-20 h-1 bg-zafran-500 mx-auto"></div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zafran-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1573608035869-2f10a1d793e3?q=80&w=1974"
                        alt="Notre équipe"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-zafran-500 rounded-lg flex items-center justify-center p-6 shadow-lg">
                      <span className="font-serif text-white text-center text-xl">
                        10 ans d'excellence culinaire
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6 text-clay-800">Notre Histoire</h2>
                  <div className="prose prose-lg text-clay-700 max-w-none">
                    {historyItems.map((item, index) => (
                      <p key={index} className="mb-4">
                        {item?.children?.[0]?.text || ""}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
