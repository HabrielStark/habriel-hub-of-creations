
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center glass-card p-12 rounded-3xl max-w-md">
        <h1 className="heading-xl mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">This page doesn't exist or has been moved.</p>
        <a href="/" className="button-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
