export const initialQuote = {
  content: "Even the darkest night will end and the sun will rise. Take a sip, take a breath, and begin again.",
  author: "Victor Hugo",
  tags: ["inspirational", "hope"]
};

export const quotesDatabase = {
  motivational: [
    {
      content: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      content: "It always seems impossible until it's done.",
      author: "Nelson Mandela"
    },
    {
      content: "The secret of getting ahead is getting started.",
      author: "Mark Twain"
    },
    {
      content: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ],
  inspirational: [
    {
      content: "Act as if what you do makes a difference. It does.",
      author: "William James"
    },
    {
      content: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      content: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman"
    },
    {
      content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    }
  ],
  love: [
    {
      content: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      author: "Lao Tzu"
    },
    {
      content: "We love the things we love for what they are.",
      author: "Robert Frost"
    },
    {
      content: "Where there is love there is life.",
      author: "Mahatma Gandhi"
    }
  ],
  wisdom: [
    {
      content: "Knowing yourself is the beginning of all wisdom.",
      author: "Aristotle"
    },
    {
      content: "Turn your wounds into wisdom.",
      author: "Oprah Winfrey"
    },
    {
      content: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    }
  ],
  life: [
    {
      content: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      content: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      content: "Life isn't about finding yourself. Life is about creating yourself.",
      author: "George Bernard Shaw"
    }
  ],
  happiness: [
    {
      content: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      content: "For every minute you are angry you lose sixty seconds of happiness.",
      author: "Ralph Waldo Emerson"
    },
    {
      content: "The most simple things can bring the most happiness.",
      author: "Izabella Scorupco"
    }
  ],
  change: [
    {
      content: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      content: "To improve is to change; to be perfect is to change often.",
      author: "Winston Churchill"
    },
    {
      content: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale"
    }
  ],
  competition: [
    {
      content: "The only person you should try to be better than is the person you were yesterday.",
      author: "Anonymous"
    },
    {
      content: "Excellence is not a singular act, but a habit. You are what you repeatedly do.",
      author: "Will Durant"
    }
  ],
  character: [
    {
      content: "Character is how you treat those who can do nothing for you.",
      author: "Johann Wolfgang von Goethe"
    },
    {
      content: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
      author: "Abraham Lincoln"
    }
  ],
  "famous-quotes": [
    {
      content: "Stay hungry, stay foolish.",
      author: "Steve Jobs"
    },
    {
      content: "Not all those who wander are lost.",
      author: "J.R.R. Tolkien"
    },
    {
      content: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    }
  ],
  friendship: [
    {
      content: "A real friend is one who walks in when the rest of the world walks out.",
      author: "Walter Winchell"
    },
    {
      content: "Friendship is born at that moment when one person says to another: 'What! You too?'",
      author: "C.S. Lewis"
    }
  ],
  future: [
    {
      content: "The best way to predict your future is to create it.",
      author: "Peter Drucker"
    },
    {
      content: "Tomorrow belongs to those who prepare for it today.",
      author: "Malcolm X"
    }
  ]
};

export function getRandomQuoteByCategory(category = "motivational") {
  const list = quotesDatabase[category] || quotesDatabase.motivational;
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
