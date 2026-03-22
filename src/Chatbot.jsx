import { useState, useRef, useEffect } from "react";
import Groq from "groq-sdk";
import virtualassistant from "../src/asset/virtualassistant.png";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const SYSTEM_PROMPT = `You are a helpful solar energy assistant for Westup Infra Pvt. Ltd., a solar company in India.
You help industrial and commercial clients understand solar energy solutions.
You know about:
- Solar panel installation for industries, factories, warehouses
- Grid substation and HT works
- Solar capacity calculation based on electricity bills
- ROI and payback period calculations
- Government subsidies for solar in India
- Net metering policies
Always be helpful, professional and encourage interested clients to fill the inquiry form on the website.
Keep responses short and clear. Reply in English.`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! 👋 I'm your Solar Assistant. Ask me anything about solar energy for your business!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      const chatMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role === "bot" ? "assistant" : m.role,
          content: m.text,
        })),
        { role: "user", content: userMessage },
      ];

      const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: chatMessages,
        max_tokens: 300,
      });

      const botReply =
        response.choices[0]?.message?.content ||
        "Sorry, I could not get a response.";
      setMessages((prev) => [...prev, { role: "assistant", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong. Please try again!",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}
    >
      {open && (
        <div
          style={{
            width: "340px",
            height: "460px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            marginBottom: "12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#f59e0b",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{ fontWeight: "bold", color: "#fff", fontSize: "15px" }}
              >
                ☀️ Solar Assistant
              </div>
              <div style={{ color: "#fff", fontSize: "11px", opacity: 0.9 }}>
                Ask me anything about solar!
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  background: msg.role === "user" ? "#f59e0b" : "#f3f4f6",
                  color: msg.role === "user" ? "#fff" : "#111",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  maxWidth: "80%",
                  fontSize: "13px",
                  lineHeight: "1.5",
                }}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#f3f4f6",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  color: "#888",
                }}
              >
                Thinking... ⏳
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div
            style={{
              padding: "10px",
              borderTop: "1px solid #eee",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "13px",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#f59e0b",
                border: "none",
                borderRadius: "8px",
                padding: "8px 14px",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "powderblue",
          border: "none",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          fontSize: "26px",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {open ? (
          <span style={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}>
            ✕
          </span>
        ) : (
          <img
            src={virtualassistant}
            alt="chat"
            style={{ width: "40px", height: "40px" }}
          />
        )}
      </button>
    </div>
  );
}
