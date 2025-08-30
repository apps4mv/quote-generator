// Standalone version with embedded quotes (no backend needed)
const quotes = [
    {"text": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"text": "Life is what happens to you while you're busy making other plans.", "author": "John Lennon"},
    {"text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"text": "It is during our darkest moments that we must focus to see the light.", "author": "Aristotle"},
    {"text": "The only impossible journey is the one you never begin.", "author": "Tony Robbins"},
    {"text": "In the middle of difficulty lies opportunity.", "author": "Albert Einstein"},
    {"text": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill"},
    {"text": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
    {"text": "Don't let yesterday take up too much of today.", "author": "Will Rogers"},
    {"text": "You learn more from failure than from success.", "author": "Unknown"},
    {"text": "If you are working on something exciting that you really care about, you don't have to be pushed.", "author": "Steve Jobs"},
    {"text": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson"},
];

// DOM elements
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const loadingElement = document.getElementById('loading');

// State
let isLoading = false;

// Get a random quote from the local array
function getRandomQuote() {
    if (isLoading) return;
    
    try {
        setLoadingState(true);
        
        // Simulate API delay for better UX
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            displayQuote(quote);
            setLoadingState(false);
        }, 300);
        
    } catch (error) {
        console.error('Error getting quote:', error);
        displayError();
        setLoadingState(false);
    }
}

// Display a quote on the page
function displayQuote(quote) {
    quoteTextElement.textContent = quote.text;
    quoteAuthorElement.textContent = quote.author;
    
    // Add animation effect
    quoteTextElement.style.opacity = '0';
    quoteAuthorElement.style.opacity = '0';
    
    setTimeout(() => {
        quoteTextElement.style.opacity = '1';
        quoteAuthorElement.style.opacity = '1';
    }, 100);
}

// Display error message
function displayError() {
    quoteTextElement.textContent = 'Entschuldigung, es gab einen Fehler beim Laden des Zitats. Bitte versuche es erneut.';
    quoteAuthorElement.textContent = '';
}

// Set loading state
function setLoadingState(loading) {
    isLoading = loading;
    newQuoteBtn.disabled = loading;
    loadingElement.style.display = loading ? 'block' : 'none';
    
    if (loading) {
        newQuoteBtn.textContent = 'Lädt...';
    } else {
        newQuoteBtn.textContent = 'Neues Zitat generieren';
    }
}

// Event listeners
newQuoteBtn.addEventListener('click', getRandomQuote);

// Keyboard shortcut (Space bar)
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isLoading) {
        event.preventDefault();
        getRandomQuote();
    }
});

// Load initial quote when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth transitions
    quoteTextElement.style.transition = 'opacity 0.3s ease';
    quoteAuthorElement.style.transition = 'opacity 0.3s ease';
    
    // Load first quote after a short delay
    setTimeout(() => {
        getRandomQuote();
    }, 500);
});
