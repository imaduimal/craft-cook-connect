
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-culinary-cream flex items-center justify-center">
            <ChefHat className="h-10 w-10 text-culinary-orange" />
          </div>
        </div>
        
        <h1 className="text-6xl font-display font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. It might have been removed, renamed, 
          or it never existed in the first place.
        </p>
        
        <div className="space-y-3">
          <Link to="/" className="block">
            <Button className="w-full">Return to Home</Button>
          </Link>
          <Link to="/recipes" className="block">
            <Button variant="outline" className="w-full">Browse Recipes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
