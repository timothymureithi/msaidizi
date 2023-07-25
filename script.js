const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; 
const API_KEY = "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"; 
const inputInitHeight = chatInput.scrollHeight;

