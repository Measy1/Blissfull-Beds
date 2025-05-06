import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Keyword categories
  const keywordGroups = {
    greeting: ["hello", "hi", "hey", "wassup", "yo"],
    payment: ["payment", "pay", "mpesa", "visa", "paypal"],
    delivery: ["delivery", "shipping", "send", "deliver"],
    price: ["price", "cost", "how much"],
    warranty: ["warranty", "guarantee"],
    returns: ["return", "refund", "exchange"],
    support: ["support", "help", "assist", "customer care"],
  };

  // Response mapping for categories
  const responses = {
    greeting: "Hello! 😊 How can I assist you?",
    payment: "We accept M-Pesa, Visa, and PayPal.",
    delivery: "We deliver within 1-3 days in Kenya.",
    price: "Prices are listed on each product card.",
    warranty: "All products come with a 6-month warranty.",
    returns: "You can return products within 7 days if unused.",
    support: "Our support team is available 24/7 on WhatsApp.",
    default:
      "Sorry, I didn't understand that. Try asking about price, payment, or delivery.",
  };

  // Check for keyword match in input
  const getFallbackResponse = (text) => {
    const lowerText = text.toLowerCase();

    for (const category in keywordGroups) {
      if (keywordGroups[category].some((word) => lowerText.includes(word))) {
        return responses[category];
      }
    }

    return responses.default;
  };

  // Try to fetch product if mentioned
  const fetchProductMatch = async (query) => {
    try {
      const response = await axios.get(
        "https://Measy1.pythonanywhere.com/api/get_product_details"
      );
      const products = response.data.products;

      const matches = products.filter((product) =>
        query.toLowerCase().includes(product.product_name.toLowerCase())
      );

      if (matches.length > 0) {
        return matches
          .map((p) => `${p.product_name}: Ksh ${p.product_cost}`)
          .join("\n");
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return "Sorry, I couldn't connect to the product database.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const productResponse = await fetchProductMatch(input);
    const botMsg = {
      from: "bot",
      text: productResponse || getFallbackResponse(input),
    };

    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Shop Assistant 🤖</div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖️" : "💬"}
      </button>
    </div>
  );
};

export default ChatBot;
