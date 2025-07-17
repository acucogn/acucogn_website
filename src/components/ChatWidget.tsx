// src/components/ChatWidget.tsx
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon, // More professional chat icon
  XMarkIcon,
  PaperAirplaneIcon, // Professional send icon
  PaperClipIcon,
} from "@heroicons/react/24/solid";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const quickActions = [
    "Tell me about ACUCOGN",
    "Explore Services",
    "Schedule a Consultation",
    "Contact Support",
  ];

  const handleSend = () => {
    if (!msg.trim()) return;
    console.log("User sent:", msg);
    setMsg("");
    setIsTyping(true);
    // Simulate response delay
    setTimeout(() => setIsTyping(false), 2000);
    inputRef.current?.focus();
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("Files selected:", Array.from(files).map(f => f.name));
      // Handle file upload logic here
    }
  };

  return (
    <>
      {/* ───── Floating Icon (18% larger) ───── */}
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

      {/* ───── Backdrop & Panel ───── */}
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
              {/* light card */}
              <div className="relative flex h-full max-h-[90vh] w-full flex-col overflow-hidden
                              rounded-xl border border-blue-100 bg-white text-zinc-900 shadow-2xl">
                {/* header bar */}
                <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-4">
                  <span className="text-lg font-semibold text-white">ACUCOGN</span>
                  <button onClick={() => setOpen(false)}>
                    <XMarkIcon className="h-6 w-6 text-white" />
                  </button>
                </div>

                {/* greeting */}
                <p className="px-6 py-4 text-center text-sm text-zinc-600">
                  How can I assist you today?
                </p>

                {/* quick buttons */}
                <div className="space-y-3 px-6">
                  {quickActions.map((label) => (
                    <motion.button
                      key={label}
                      whileHover={{ backgroundColor: "#f4f4f5" }}
                      whileTap={{ scale: 0.98, backgroundColor: "#e4e4e7" }}
                      className="w-full rounded-md border border-zinc-300 py-3 text-sm font-medium
                                 transition-colors duration-200"
                      onClick={() => console.log(`Quick action: ${label}`)}
                    >
                      {label}
                    </motion.button>
                  ))}
                </div>

                <div className="flex-1" />

                {/* Chat messages area */}
                <div className="flex-1 px-6 py-4">
                  {isTyping && (
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500" style={{ animationDelay: '150ms' }}></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span>Typing...</span>
                    </div>
                  )}
                </div>

                {/* input area */}
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

                {/* Hidden file input */}
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