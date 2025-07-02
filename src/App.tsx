import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Feed from './pages/Feed';
import Streams from './pages/Streams';
import Discover from './pages/Discover';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Header />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/streams" element={<Streams />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
