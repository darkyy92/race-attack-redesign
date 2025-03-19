
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="glass-card rounded-lg p-10 text-center max-w-md">
          <h1 className="heading-lg mb-2">404</h1>
          <h2 className="heading-md gold-text mb-6">Seite nicht gefunden</h2>
          <p className="text-gray-300 mb-8">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          <Link to="/" className="gold-button inline-flex items-center justify-center">
            <ArrowLeft size={18} className="mr-2" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
