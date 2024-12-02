// Placeholder data for chat rooms
const chatRoomMessages = {
    mums: [
      "Hi mums! How's everyone feeling today?",
      "Any tips for handling morning sickness?"
    ],
    dads: [
      "Dads, what's the most challenging part of this journey for you?",
      "Let's share some ideas for supporting our partners!"
    ],
    general: [
      "Welcome to the general chat! Let's connect.",
      "Feel free to ask or share anything here."
    ]
  };
  
  // Function to switch chat room
  function switchChatRoom(room) {
    const chatContent = document.getElementById('chat-content');
    const messages = chatRoomMessages[room] || ["This chat room is empty."];
    chatContent.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
  }
  
  // Placeholder recommendations
  async function fetchRecommendations() {
    const placeholderText =
      "Stay hydrated and eat foods rich in iron and folic acid!";
    document.getElementById('recommendation-placeholder').textContent =
      placeholderText;
  }
  
  // Load recommendations on page load
  window.onload = fetchRecommendations;
  