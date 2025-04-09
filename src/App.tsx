
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [splashComplete, setSplashComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      // Skip splash screen if already seen
      setSplashComplete(true);
      setShowContent(true);
    } else {
      // Show splash screen and mark as seen
      sessionStorage.setItem('hasSeenSplash', 'true');
    }
  }, []);

  const handleSplashComplete = () => {
    setSplashComplete(true);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {!splashComplete && <SplashScreen onComplete={handleSplashComplete} />}
        
        {showContent && (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
