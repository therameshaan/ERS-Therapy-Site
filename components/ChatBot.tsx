import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your AI companion. How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const addMessage = (msg: Message) => setMessages(prev => [...prev, msg]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const userText = input.trim();
    if (!userText) return;

    // Add user message optimistically
    const userMsg: Message = { id: Date.now(), text: userText, isUser: true };
    addMessage(userMsg);
    setInput('');
    setLoading(true);

    try {
      // Build conversation history for API
      const history = messages.map(m => ({
        role: m.isUser ? 'user' : 'assistant',
        content: m.text,
      }));
      // Append the latest user message
      history.push({ role: 'user', content: userText });

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? 'Failed to get response');
      }

      const data = await res.json();
      const botText = data.reply ?? "I’m not sure how to respond.";
      const botMsg: Message = { id: Date.now() + 1, text: botText, isUser: false };
      addMessage(botMsg);
    } catch (err: any) {
      const errMsg =
        err?.message ||
        'Sorry, something went wrong. Please try again later.';
      addMessage({
        id: Date.now() + 2,
        text: errMsg,
        isUser: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          AI Chat Companion
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Powered by OpenRouter – a supportive listener for your thoughts.
        </p>
      </div>

      {/* Chat window */}
      <div className="h-[400px] overflow-y-auto mb-4 border rounded-lg p-4 bg-white/50 dark:bg-gray-800/50">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'start'} mb-2`}>
            <div className={`chat-message ${msg.isUser ? 'user' : 'assistant'}`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}

        {/* Typing indicator while waiting */}
        {loading && (
          <div className="flex justify-start mb-2">
            <div className="chat-message assistant">
              <div className="flex space-x-2">
                {[0, 1, 2].map(i => (
                  <div key={i} className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input form */}
      <form onSubmit={handleSend} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message…"
          disabled={loading}
          className="
            flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600
            rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        />
        <button
          type="submit"
          disabled={loading}
          className="
            px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg
            font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {loading ? 'Thinking…' : <Send className="h-4 w-4 mr-2" /> } Send
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
        <p>
          Note: This is an AI‑powered chatbot, not a replacement for professional
          therapy. If you’re in crisis, please call or text <strong>988</strong>
          (Suicide & Crisis Lifeline) or your local emergency services.
        </p>
      </div>
    </div>
  );
}
