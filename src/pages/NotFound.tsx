import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl md:text-9xl font-bold gradient-text mb-6">404</div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-hero inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
