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
  ...Array(15).fill({ fromMe: false, text: "Extra message for scroll.", time: "12:33" })
];

export default function Messages() {
  const [selected, setSelected] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selected]);

  return (
    <div className="min-h-[calc(100vh-80px)] w-full overflow-x-hidden bg-white flex flex-col md:grid md:grid-cols-[20rem,1fr] md:gap-0">
      {/* Sidebar: on mobile hide when a chat is selected; visible again with Back */}
      <div className={`${selected === null ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white border-b md:border-b-0 md:border-r p-3 sm:p-4 flex flex-col md:h-[calc(100vh-80px)] md:min-h-0`}>
        <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-blue-600">Messages</h2>
        <div className="space-y-1.5 sm:space-y-2 flex-1 overflow-y-auto max-h-64 md:max-h-none md:min-h-0">
          {conversations.map((c, i) => (
            <button key={i} onClick={() => setSelected(i)} className={`flex items-center gap-2 sm:gap-3 w-full p-2 rounded-lg transition-colors ${selected === i ? 'bg-blue-50' : 'hover:bg-purple-50'}`}>
              <img src={c.avatar} alt={c.user} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
              <div className="flex-1 text-left">
                <div className="font-semibold text-slate-900 text-sm sm:text-base">{c.user}</div>
                <div className="text-xs text-slate-500 truncate">{c.lastMessage}</div>
              </div>
              <div className="text-xs text-slate-400">{c.time}</div>
            </button>
          ))}
        </div>
      </div>
      {/* Main area: on mobile show either placeholder (no chat) or full-screen chat */}
      <div className="flex-1 flex flex-col bg-slate-50 md:h-[calc(100vh-80px)] md:min-h-0">
        {selected === null ? (
          <div className="hidden md:flex flex-1 items-center justify-center text-slate-400">
            <div className="text-center px-4">
              <div className="text-lg font-semibold mb-1">Select a conversation</div>
              <div className="text-sm">Choose a chat from the list to start messaging</div>
            </div>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="border-b p-3 sm:p-4 bg-white flex items-center gap-3 flex-shrink-0">
              <button className="md:hidden -ml-1 px-1" onClick={() => setSelected(null)} aria-label="Back">
                <span className="text-blue-600 text-2xl leading-none">&lt;</span>
              </button>
              <img src={conversations[selected].avatar} alt={conversations[selected].user} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
              <div className="font-semibold text-slate-900 text-sm sm:text-base">{conversations[selected].user}</div>
            </div>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.fromMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 sm:px-4 rounded-2xl max-w-[75%] sm:max-w-xs ${m.fromMe ? 'bg-blue-500 text-white' : 'bg-white text-slate-900 border'}`}>{m.text}</div>
                  <span className="text-[10px] sm:text-xs text-slate-400 ml-2 self-end">{m.time}</span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* Typing Bar */}
            <form className="p-3 sm:p-4 bg-white border-t flex gap-2 flex-shrink-0">
              <input type="text" placeholder="Type a message..." className="flex-1 rounded-full border px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <button type="submit" className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-full font-semibold hover:bg-purple-600 text-sm">Send</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
} 