import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/solid";

// Define the structure of a message
interface Message {
  role: "user" | "bot";
  content: string;
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    "Tell me about ACUCOGN",
    "Explore Services",
    "Schedule a Consultation",
    "Contact Support",
  ];
  
  useEffect(() => {
    // Only scroll to bottom if there are messages, to avoid scrolling past the welcome view
    if (messages.length > 0) {
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    
    if (msg) setMsg("");
    
    setIsTyping(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      
      const botMessage: Message = { role: "bot", content: data.response };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Failed to get response from API:", error);
      const errorMessage: Message = { role: "bot", content: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      inputRef.current?.focus();
    }
  };

  const handleSend = () => sendMessage(msg);
  const handleFileUpload = () => fileInputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("Files selected:", Array.from(files).map((f) => f.name));
      const botMessage: Message = { role: "bot", content: `Received ${files.length} file(s). (Upload logic not implemented yet)` };
      setMessages(prev => [...prev, botMessage]);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.15,
          background: "linear-gradient(135deg,#6366f1,#7e3af2)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 grid h-17 w-17 place-items-center rounded-full
                   bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg"
        style={{ height: "4.25rem", width: "4.25rem" }}
      >
        <ChatBubbleLeftRightIcon className="h-8 w-8" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md items-center justify-center p-4"
            >
              <div className="relative flex h-full max-h-[90vh] w-full flex-col overflow-hidden
                              rounded-xl border border-blue-100 bg-white text-zinc-900 shadow-2xl">
                <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-4">
                  <span className="text-lg font-semibold text-white">ACUCOGN</span>
                  <button onClick={() => setOpen(false)}>
                    <XMarkIcon className="h-6 w-6 text-white" />
                  </button>
                </div>

                {/* --- MODIFIED AREA: Welcome section is now always visible at the top of the scrollable container --- */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6">
                  {/* Welcome Section */}
                  <div className="mb-8 flex flex-col items-center text-center">
                    <div className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                      <h2 className="text-xl font-semibold text-zinc-800 mb-4">
                        Welcome to ACUCOGN
                      </h2>
                      <img
                        src="/lovable-uploads/systembot.png"
                        alt="Chatbot"
                        className="mx-auto mb-4  h-50 w-50 rounded-full object-cover" // Adjusted size for better layout
                      />
                      <p className="text-sm text-zinc-600 mb-6">
                        How can I assist you today?
                      </p>
                      <div className="space-y-3">
                        {quickActions.map((label) => (
                          <motion.button
                            key={label}
                            whileTap={{ scale: 0.98 }}
                            className="w-full rounded-md border border-indigo-500 bg-white px-4 py-3 
                                       text-sm font-semibold text-indigo-600
                                       transition-all duration-200
                                       hover:bg-indigo-600 hover:text-white"
                            onClick={() => sendMessage(label)}
                          >
                            {label}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex items-end gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.role === 'bot' && (
                          <img 
                            src="/lovable-uploads/systembot.png"
                            alt="Bot Avatar"
                            className="h-8 w-8 flex-shrink-0 rounded-full object-cover" 
                          />
                        )}
                        
                        <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-purple-600 text-white'
                        }`}>
                          {message.content}
                        </div>

                        {message.role === 'user' && (
                          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-400 flex items-center justify-center">
                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                         <img 
                            src="/lovable-uploads/systembot.png"
                            alt="Bot Avatar"
                            className="h-8 w-8 flex-shrink-0 rounded-full object-cover" 
                          />
                         <div className="flex items-center gap-1.5 pl-1">
                          <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '0ms' }}></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '150ms' }}></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-zinc-200 p-4">
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ backgroundColor: "#e4e4e7" }}
                      whileTap={{ scale: 0.95, backgroundColor: "#d4d4d8" }}
                      className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-md
                                 bg-zinc-100 transition-colors duration-200"
                      onClick={handleFileUpload}
                    >
                      <PaperClipIcon className="h-5 w-5 text-zinc-500" />
                    </motion.button>
                    
                    <input
                      ref={inputRef}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message"
                      className="h-10 flex-1 rounded-md border border-zinc-300 bg-white
                                px-3 text-sm outline-none placeholder:text-zinc-400
                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />

                    <motion.button
                      whileHover={{ opacity: 0.9 }}
                      whileTap={{ scale: 0.95 }}
                      className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-md
                                 bg-gradient-to-br from-blue-600 to-purple-600
                                 transition-all duration-200 disabled:opacity-50"
                      onClick={handleSend}
                      disabled={!msg.trim()}
                    >
                      <PaperAirplaneIcon className="h-5 w-5 text-white" />
                    </motion.button>
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;