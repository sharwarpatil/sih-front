import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import BASE_URL from "../Server/base_url";
import "./Bot.css";

// const AddThroughGPT = () => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello! I can help you add or list items. How can I assist you today?",
//     },
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const token = localStorage.getItem("token");

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSendMessage = async () => {
//     const newMessage = { sender: "user", text: userInput };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);

//     if (userInput.toLowerCase().includes("add item")) {
//       // Example command: "Add item apple price 50 quantity 10"
//       const [_, itemName, price, quantity] = userInput.split(" ");
//       if (price && quantity) {
//         await addItem(itemName, parseInt(price), parseInt(quantity));
//       } else {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           {
//             sender: "bot",
//             text: "Please specify the item name, price, and quantity.",
//           },
//         ]);
//       }
//     } else if (userInput.toLowerCase().includes("list items")) {
//       await listItems();
//     } else {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           sender: "bot",
//           text: "I didn't understand that. Please say 'add item' or 'list items'.",
//         },
//       ]);
//     }

//     setUserInput("");
//   };

//   const addItem = async (itemName, price, quantity) => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/inventory/addStock`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//         body: JSON.stringify({ name: itemName, price, quantity }),
//       });
//       const json = await response.json();

//       if (json.success) {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: "bot", text: `Item '${itemName}' added successfully!` },
//         ]);
//       } else {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: "bot", text: "Failed to add item. Please try again." },
//         ]);
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const listItems = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/inventory/show`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//       });
//       const json = await response.json();

//       if (json.success) {
//         const itemsList = json.items
//           .map(
//             (item) =>
//               `${item.name} - Price: ${item.price}, Quantity: ${item.quantity}`
//           )
//           .join("\n");

//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: "bot", text: `Here are your items:\n${itemsList}` },
//         ]);
//       } else {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           {
//             sender: "bot",
//             text: "Failed to retrieve items. Please try again.",
//           },
//         ]);
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={msg.sender === "bot" ? "message-bot" : "message-user"}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="chatbot-input">
//         <input
//           type="text"
//           value={userInput}
//           onChange={handleInputChange}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default AddThroughGPT;

// const AddThroughGPT = () => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello! I can help you add or list items. How can I assist you today?",
//     },
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [isListening, setIsListening] = useState(false); // State for managing voice recognition
//   const token = localStorage.getItem("token");

//   // Initialize speech recognition
//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new SpeechRecognition();
//   recognition.continuous = false;
//   recognition.lang = "en-US";

//   useEffect(() => {
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setUserInput(transcript); // Set recognized speech to user input
//       handleSendMessage(transcript); // Process the recognized text
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.onerror = (event) => {
//       Swal.fire(
//         "Error",
//         "Voice recognition error occurred. Please try again.",
//         "error"
//       );
//       setIsListening(false);
//     };
//   }, []);

//   const handleVoiceInput = () => {
//     if (isListening) {
//       recognition.stop();
//       setIsListening(false);
//     } else {
//       recognition.start();
//       setIsListening(true);
//     }
//   };

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   //   const handleSendMessage = async (inputText = userInput) => {
//   //     if (!inputText.trim()) return; // Prevent sending empty messages

//   //     const newMessage = { sender: "user", text: inputText };
//   //     setMessages((prevMessages) => [...prevMessages, newMessage]);

//   //     if (inputText.toLowerCase().startsWith("add item")) {
//   //       // Example command: "Add item apple price 50 quantity 10"
//   //       const commandParts = inputText.split(" ");
//   //       const itemName = commandParts[2];
//   //       const price = parseInt(commandParts[4]);
//   //       const quantity = parseInt(commandParts[6]);

//   //       if (itemName && price && quantity) {
//   //         await addItem(itemName, price, quantity);
//   //       } else {
//   //         setMessages((prevMessages) => [
//   //           ...prevMessages,
//   //           {
//   //             sender: "bot",
//   //             text: "Please specify the item name, price, and quantity in the format: 'Add item apple price 50 quantity 10'.",
//   //           },
//   //         ]);
//   //       }
//   //     } else if (inputText.toLowerCase().startsWith("list items")) {
//   //       await listItems();
//   //     } else {
//   //       setMessages((prevMessages) => [
//   //         ...prevMessages,
//   //         {
//   //           sender: "bot",
//   //           text: "I didn't understand that. Please say 'add item' or 'list items'.",
//   //         },
//   //       ]);
//   //     }

//   //     setUserInput("");
//   //   };
//   const handleSendMessage = async (inputText = userInput) => {
//     // Ensure inputText is always a string
//     inputText = String(inputText).trim();

//     if (!inputText) return; // Prevent sending empty messages

//     const newMessage = { sender: "user", text: inputText };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);

//     if (inputText.toLowerCase().startsWith("add item")) {
//       // Example command: "Add item apple price 50 quantity 10"
//       const commandParts = inputText.split(" ");
//       const itemName = commandParts[2];
//       const price = parseInt(commandParts[4]);
//       const quantity = parseInt(commandParts[6]);

//       if (itemName && price && quantity) {
//         await addItem(itemName, price, quantity);
//       } else {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           {
//             sender: "bot",
//             text: "Please specify the item name, price, and quantity in the format: 'Add item apple price 50 quantity 10'.",
//           },
//         ]);
//       }
//     } else if (inputText.toLowerCase().startsWith("list items")) {
//       await listItems();
//     } else {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           sender: "bot",
//           text: "I didn't understand that. Please say 'add item' or 'list items'.",
//         },
//       ]);
//     }

//     setUserInput("");
//   };

//   const addItem = async (itemName, price, quantity) => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/inventory/addItem`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//         body: JSON.stringify({ name: itemName, price, quantity }),
//       });
//       const json = await response.json();

//       if (json.success) {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: "bot", text: `Item '${itemName}' added successfully!` },
//         ]);
//       } else {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: "bot", text: "Failed to add item. Please try again." },
//         ]);
//       }
//     } catch (error) {
//       console.error(error.message);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { sender: "bot", text: "An error occurred. Please try again later." },
//       ]);
//     }
//   };

//   const listItems = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/inventory/show`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//       });
//       const json = await response.json();

//       if (json.success) {
//         const itemsList = json.items
//           .map(
//             (item) =>
//               `${item.name} - Price: ${item.price}, Quantity: ${item.quantity}`
//           )
//           .join("\n");

//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: "bot", text: `Here are your items:\n${itemsList}` },
//         ]);
//       } else {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           {
//             sender: "bot",
//             text: "Failed to retrieve items. Please try again.",
//           },
//         ]);
//       }
//     } catch (error) {
//       console.error(error.message);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { sender: "bot", text: "An error occurred. Please try again later." },
//       ]);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={msg.sender === "bot" ? "message-bot" : "message-user"}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="chatbot-input">
//         <input
//           type="text"
//           value={userInput}
//           onChange={handleInputChange}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//         <button onClick={handleVoiceInput} class="ad-btn">
//           {isListening ? "Stop Listening" : "Voice Input"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddThroughGPT;

const AddThroughGPT = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I can help you add or list items. How can I assist you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isListening, setIsListening] = useState(false); // State for managing voice recognition
  const token = localStorage.getItem("token");

  // Initialize speech recognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";

  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript); // Set recognized speech to user input
      handleSendMessage(transcript); // Process the recognized text
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      Swal.fire(
        "Error",
        "Voice recognition error occurred. Please try again.",
        "error"
      );
      setIsListening(false);
    };
  }, []);

  const handleVoiceInput = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async (inputText = userInput) => {
    inputText = String(inputText).trim(); // Ensure inputText is always a string

    if (!inputText) return; // Prevent sending empty messages

    const newMessage = { sender: "user", text: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (inputText.toLowerCase().includes("add item")) {
      // Example command: "Add item apple price 50 quantity 10"
      const commandParts = inputText.split(" ");
      const itemName = commandParts[2];
      const price = parseInt(commandParts[4]);
      const quantity = parseInt(commandParts[6]);

      if (itemName && !isNaN(price) && !isNaN(quantity)) {
        await addItem(itemName, price, quantity);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: "Please specify the item name, price, and quantity.",
          },
        ]);
      }
    } else if (inputText.toLowerCase().includes("list items")) {
      await listItems();
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "I didn't understand that. Please say 'add item' or 'list items'.",
        },
      ]);
    }

    setUserInput("");
  };

  const addItem = async (itemName, price, quantity) => {
    try {
      const response = await fetch(`${BASE_URL}/api/inventory/addItem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ name: itemName, price, quantity }),
      });
      const json = await response.json();

      if (json.success) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: `Item '${itemName}' added successfully!` },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Failed to add item. Please try again." },
        ]);
      }
    } catch (error) {
      console.error(error.message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "An error occurred. Please try again later." },
      ]);
    }
  };

  const listItems = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/inventory/show`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      const json = await response.json();

      if (json.success) {
        const itemsList = json.items
          .map(
            (item) =>
              `${item.name} - Price: ${item.price}, Quantity: ${item.quantity}`
          )
          .join("\n");

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: `Here are your items:\n${itemsList}` },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: "Failed to retrieve items. Please try again.",
          },
        ]);
      }
    } catch (error) {
      console.error(error.message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "An error occurred. Please try again later." },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "bot" ? "message-bot" : "message-user"}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={() => handleSendMessage(userInput)}>Send</button>
        <button onClick={handleVoiceInput}>
          {isListening ? "Stop Listening" : "Voice Input"}
        </button>
      </div>
    </div>
  );
};

export default AddThroughGPT;
