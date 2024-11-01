// Array of quotes with author
const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  { text: "You are stronger than you think.", author: "Unknown" },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "You’ll never change your life until you change something you do daily.",
    author: "John C. Maxwell",
  },
  {
    text: "Stop being afraid of what could go wrong and start being positive about what could go right.",
    author: "Tony Robbins",
  },
  {
    text: "Action breeds confidence and courage. Inaction breeds doubt and fear.",
    author: "Dale Carnegie",
  },
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `- ${quote.author}`;
}
