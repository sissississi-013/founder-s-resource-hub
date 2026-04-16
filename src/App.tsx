import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import GrantsVC from "./pages/GrantsVC";
import Accelerators from "./pages/Accelerators";
import CommunitiesEvents from "./pages/CommunitiesEvents";
import TemplatesTools from "./pages/TemplatesTools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/grants-vc" element={<GrantsVC />} />
          <Route path="/accelerators" element={<Accelerators />} />
          <Route path="/communities-events" element={<CommunitiesEvents />} />
          <Route path="/templates-tools" element={<TemplatesTools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
