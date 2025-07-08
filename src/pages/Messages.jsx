import React, { useState, useRef, useEffect } from 'react';

const conversations = [
  { user: "@sofiagarcia", avatar: "/profile-sofia-garcia.jpg", lastMessage: "See you at the game!", time: "1m" },
  { user: "@corywilliams", avatar: "/profile-cory-williams.jpg", lastMessage: "Great stream today!", time: "10m" },
  { user: "@hollisrobertson", avatar: "/profile-hollis-robertson.jpg", lastMessage: "Let's train soon.", time: "1h" },
];
const messages = [
  { fromMe: false, text: "Hey! Ready for the match?", time: "12:30" },
  { fromMe: true, text: "Absolutely! See you there.", time: "12:31" },
  { fromMe: false, text: "Don't forget your gear.", time: "12:32" },
  // Add more messages to demonstrate scrolling
  ...Array(15).fill({ fromMe: false, text: "Extra message for scroll.", time: "12:33" })
];

export default function Messages() {
  const [selected, setSelected] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selected]);

  // Heights
  const TYPING_BAR_HEIGHT = 80;
  const HEADER_HEIGHT = 72; // px height of the chat header

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4 text-orange-600">Chats</h2>
        <div className="space-y-2 flex-1 overflow-y-auto">
          {conversations.map((c, i) => (
            <button key={i} onClick={() => setSelected(i)} className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors ${selected === i ? 'bg-orange-50' : 'hover:bg-orange-100'}`}>
              <img src={c.avatar} alt={c.user} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1 text-left">
                <div className="font-semibold text-slate-900">{c.user}</div>
                <div className="text-xs text-slate-500 truncate">{c.lastMessage}</div>
              </div>
              <div className="text-xs text-slate-400">{c.time}</div>
            </button>
          ))}
        </div>
      </div>
      {/* Main Chat (relative for absolute children) */}
      <div className="flex-1 relative bg-slate-50">
        {/* Chat Header */}
        <div className="border-b p-4 bg-white flex items-center gap-3 flex-shrink-0" style={{ height: `${HEADER_HEIGHT}px` }}>
          <img src={conversations[selected].avatar} alt={conversations[selected].user} className="w-10 h-10 rounded-full object-cover" />
          <div className="font-semibold text-slate-900">{conversations[selected].user}</div>
        </div>
        {/* Messages Area (no scrolling) */}
        <div className="p-6 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.fromMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-xs ${m.fromMe ? 'bg-orange-500 text-white' : 'bg-white text-slate-900 border'}`}>{m.text}</div>
              <span className="text-xs text-slate-400 ml-2 self-end">{m.time}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Typing Bar (fixed at bottom of window, aligned with chat area) */}
        <form className="fixed bottom-0 left-72 right-0 z-10 p-4 bg-white border-t flex gap-2" style={{ height: `${TYPING_BAR_HEIGHT}px` }}>
          <input type="text" placeholder="Type a message..." className="flex-1 rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600">Send</button>
        </form>
      </div>
    </div>
  );
} 