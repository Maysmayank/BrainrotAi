"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { io } from "socket.io-client";
import Image from "next/image";

const Page = () => {
  const [userMessage, setUserMessage] = useState("");
  const [ socketInstance,setSocketInstance] = useState(null);
  
  const [chatHistory, setChatHistory] = useState([
    { sender: "AI", message: "Aight, blud! Let’s hit this goofy ahhhh grindset and Let Your Aura speak in the Society!" },
  ]);

  useEffect(() => {
    // Initialize WebSocket connection only once
    const newSocket = io.connect("https://genz-chatbot-backend-production.up.railway.app", {
      path: "/socket.io", // Ensure this matches your backend's Socket.IO configuration
      transports: ["websocket"],
      withCredentials: true,
    });

    setSocketInstance(newSocket);

    // Listen for model responses
    newSocket.on("model_response", (data) => {
      setChatHistory((prev) => [
        ...prev,
        { sender: "AI", message: data.text },
      ]); // Add the response message to the chat
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []); // Run only once when the component mounts

  const handleSendMessage = () => {
    if (userMessage.trim() === "") return;
    console.log("here");
    
    setChatHistory((prev) => [...prev, { sender: "User", message: userMessage }]);
    setUserMessage(""); // Clear the input field
    socketInstance.emit("user_message", userMessage); // Emit the user message to the server
  };

  return (
    <>
      <Script src="https://cdn.socket.io/4.0.0/socket.io.min.js" strategy="afterInteractive" />


      <div className="flex flex-col h-screen ml-10 items-start  pb-[40px] pt-[80px] bg-gray-100">
        {/* Header */}
        <header className=" ml-[400px] text-black p-4 mb-2 text-center">
          <h1 className="text-lg font-semibold text-black">Chat with Our RotBot</h1>
        </header>

        {/* Chat Area */}
        <div className="response-section flex-1 bg-[#1C1C1C] w-[76%] rounded-tr-xl rounded-tl-xl overflow-y-auto p-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex break-words ${chat.sender === "User" ? "justify-end" : "justify-start"} mb-2`}>
              <Image src={"/Brainrot_200x200_logo.webp"} className="rounded-full mr-2" width={40} alt="" height={200}></Image>
              <div className={`${chat.sender === "User" ? "bg-blue-500 text-sm text-white" : "bg-gray-300 text-sm text-black"} rounded-xl p-3 font-bold max-w-[70%]`}>
                {chat.message}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-black p-4 w-[76%] rounded-br-xl rounded-bl-xl">
          <div className="flex items-center gap-2">
            <textarea
              className="flex-1 bg-black text-white p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={1}
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Ask here for RotMaxxing..."
            ></textarea>
            <button
              onClick={handleSendMessage}
              className="  bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>

        {/* Disciples Section */}
        <div className="absolute right-[15px] flex items-center justify-center p-5 w-[20%] bg-[#1C1C1C] top-[100px] text-black">
          <div className="flex flex-col">
            <h1 className="text-white">RotBot Disciples</h1>
            <div className="card mt-5 flex gap-2">
              <Image src="/LeMickey.jpg" alt="" width={80} height={50} className="h-20 rounded-full p-1" />
              <div className="text-white">
                <p className="text-xs">
                  "Frfr, I started as an NPC in the goofy ahh grindset, thinking I was the Biggest Bird but couldn’t even hit the griddy. Then I found this AI bot, and blud, it rizzed me up the Ocky way. Now I’m out here rolling through Pibby glitches, flexing my sigma energy, and speaking brainrot fluently. Certified GOAT moves, no cap."
                </p>
                <span className="absolute right-10"> - LeMickey&apos;s</span>
              </div>
            </div>
            <hr className="mt-8" />
            <div className="pb-5 card mt-5 flex gap-2">
              <Image src="/kai.jpg" alt="" width={80} height={50} className="h-20 rounded-full p-1" />
              <div className="text-white">
                <p className="text-xs">
                  I was stuck in the basic grindset at first, but now I'm rizzed up with that AI power—straight-up flexin' like the GOAT. From being clueless to dropin’ memes like an OG, this AI bot leveled me up. You know what they say, once you get that brainrot fluency, you can't go back. Now I'm flexin' Sigma energy with the best of 'em, sippin' on that rizz juice—no cap, it's a whole new level. Certified fire!
                </p>
                <span className="absolute right-10"> - Kai Peanut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
