const quotes = (function () {
  const quotesList = [
    {
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
      author: "Maya Angelou",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote:
        "In the end, it’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote:
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas A. Edison",
    },
    {
      quote: "Life is either a great adventure or nothing.",
      author: "Helen Keller",
    },
    {
      quote:
        "If you spend too much time thinking about a thing, you’ll never get it done.",
      author: "Bruce Lee",
    },
    {
      quote: "Keep your eyes on the stars and your feet on the ground.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Despite the forecast, live like it’s spring.",
      author: "Lilly Pulitzer",
    },
    {
      quote:
        "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      quote: "Love asks me no questions, and gives me endless support.",
      author: "William Shakespeare",
    },
    {
      quote:
        "Success is going from failure to failure without a loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote:
        "Always bear in mind that your own resolution to succeed is more important than any other.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "Try not to become a man of success but rather try to become a man of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "We must believe in luck. For how else can we explain the success of those we don’t like?",
      author: "Jean Cocteau",
    },
  ];

  const quoteObj = {
    $quote: document.querySelector("#quote p:first-child"),
    $author: document.querySelector("#quote p:last-child"),
    maxQuote: quotesList.length,
    currentQuote: "",
    getQuote: function () {
      this.currentQuote = quotesList[Math.floor(Math.random() * this.maxQuote)];
      this.$quote.innerText = this.currentQuote.quote;
      this.$author.innerText = this.currentQuote.author;
    },
  };

  quoteObj.getQuote();
})();
