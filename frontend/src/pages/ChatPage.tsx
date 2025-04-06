import React, { useEffect, useRef, useState } from "react";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const ws = useRef<WebSocket | null>(null);


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get("roomid");

    ws.current = new WebSocket("ws://localhost:3001");
    console.log(import.meta.env.VITE_WS_URL);

    ws.current.onopen = () => {
      if (roomId) {
        ws.current?.send(
          JSON.stringify({
            type: "join",
            payload: { roomId },
          })
        );
      }
    };

    ws.current.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      if (data.type === "message") {
        setMessages((prev) => [...prev, data.payload.message]);
      }
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          type: "message",
          payload: {
            message: input,
          },
        })
      );
      setInput("");
    }
  };

  return (
    <div className="p-4 font-sans">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="Enter your message"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Events from server</h2>
        <div id="serverMessages" className="bg-gray-100 p-3 rounded shadow">
          {messages.map((msg, idx) => (
            <div key={idx}>{msg}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
