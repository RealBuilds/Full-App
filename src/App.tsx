import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Feed from './pages/Feed';
import Streams from './pages/Streams';
import Discover from './pages/Discover';
import Leaderboard from './pages/Leaderboard';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function Navbar() {
  return (
    <nav className="navbar flex space-x-4 p-4 bg-white shadow fixed w-full top-0 z-50">
      <NavLink to="/feed" className={({ isActive }) => isActive ? 'font-bold text-blue-600 underline' : ''}>Feed</NavLink>
      <NavLink to="/streams" className={({ isActive }) => isActive ? 'font-bold text-blue-600 underline' : ''}>Streams</NavLink>
      <NavLink to="/discover" className={({ isActive }) => isActive ? 'font-bold text-blue-600 underline' : ''}>Discover</NavLink>
      {/* Bonus: Leaderboard opens in a new tab */}
      <a href="/leaderboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leaderboard</a>
    </nav>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Navbar />
          <main className="pt-20 max-w-7xl mx-auto px-4">
            <Routes>
              <Route path="/feed" element={<Feed />} />
              <Route path="/streams" element={<Streams />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              {/* Optionally, redirect / to /feed */}
              <Route path="/" element={<Feed />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
