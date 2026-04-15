// ChatWidget.jsx
// Drop this component into your project and import it in GueeGym.jsx
// Replace the existing floating WhatsApp button area OR add it alongside it

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Dumbbell, ChevronDown } from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  { en: "What are your prices?", id: "Berapa harganya?" },
  { en: "What are your hours?", id: "Jam buka?" },
  { en: "Where are you located?", id: "Lokasinya di mana?" },
  { en: "Do you have personal trainers?", id: "Ada personal trainer?" },
];

export default function ChatWidget({ language = 'id' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: language === 'en'
        ? "Hey! 👊 I'm Guee Gym's AI assistant. Ask me anything — prices, hours, facilities, how to join. Let's go!"
        : "Hei! 👊 Gue asisten AI Guee Gym. Tanya apa aja — harga, jam buka, fasilitas, cara daftar. Gas!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const sendMessage = async (text) => {
    const userMessage = text || input.trim();
    if (!userMessage || isLoading) return;

    setInput('');
    setShowSuggestions(false);
    setIsLoading(true);

    const newMessages = [
      ...messages,
      { role: 'user', content: userMessage }
    ];
    setMessages(newMessages);

    try {
      // Call your Netlify Function — works on localhost too via `netlify dev`
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: language === 'en'
          ? "Sorry, I'm having trouble connecting right now. Please contact us on WhatsApp: wa.me/6285737455112"
          : "Maaf, koneksi lagi bermasalah. Hubungi kami via WhatsApp: wa.me/6285737455112"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* CHAT WINDOW */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col bg-[#0a0a0a] border border-neutral-800 shadow-2xl shadow-black/60 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{ maxHeight: '560px', borderRadius: '4px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-red-600 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black/20 flex items-center justify-center rounded-full">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-black text-white text-sm tracking-wide">GUEE GYM AI</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-xs">{language === 'en' ? 'Online' : 'Online'}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-red-600 text-white rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl'
                    : 'bg-neutral-900 text-gray-200 border border-neutral-800 rounded-tr-xl rounded-tl-sm rounded-br-xl rounded-bl-xl'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-neutral-900 border border-neutral-800 rounded-tr-xl rounded-tl-sm rounded-br-xl rounded-bl-xl px-4 py-3">
                <div className="flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* Suggested questions */}
          {showSuggestions && !isLoading && (
            <div className="pt-2">
              <p className="text-neutral-500 text-xs mb-2">
                {language === 'en' ? 'Quick questions:' : 'Pertanyaan cepat:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(language === 'en' ? q.en : q.id)}
                    className="text-xs px-3 py-1.5 border border-red-600/40 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-150 rounded-sm"
                  >
                    {language === 'en' ? q.en : q.id}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-neutral-800 p-3 flex-shrink-0">
          <div className="flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={language === 'en' ? 'Ask about Guee Gym...' : 'Tanya seputar Guee Gym...'}
              disabled={isLoading}
              className="flex-1 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 text-sm px-3 py-2.5 outline-none focus:border-red-600/50 transition-colors disabled:opacity-50"
              style={{ borderRadius: '2px' }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 transition-all active:scale-95"
              style={{ borderRadius: '2px' }}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-neutral-700 text-[10px] text-center mt-2">
            Powered by Gemini AI · Guee Gym
          </p>
        </div>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen
            ? 'bg-neutral-800 hover:bg-neutral-700'
            : 'bg-red-600 hover:bg-red-700 animate-pulse-chat'
        }`}
        style={{ borderRadius: '4px' }}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      <style>{`
        @keyframes pulse-chat {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(220, 38, 38, 0); }
        }
        .animate-pulse-chat {
          animation: pulse-chat 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
