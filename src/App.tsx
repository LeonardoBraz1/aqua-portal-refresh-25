
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <style>
        {`
          @keyframes wave {
            0% {
              transform: translateX(0) translateY(0);
            }
            50% {
              transform: translateX(-25px) translateY(10px);
            }
            100% {
              transform: translateX(0) translateY(0);
            }
          }
        `}
      </style>
      <div className="w-full">
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/aqua-portal-refresh-25">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
