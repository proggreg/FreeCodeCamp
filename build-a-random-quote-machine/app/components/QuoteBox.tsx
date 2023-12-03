import NewQuoteButton from './NewQuoteButton'
import TweetQuote from './TweetQuote'
export default function QuoteBox(props) {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomIndex = Math.floor(Math.random() * props.data.length);
    let quote = props.data[randomIndex];

    return (
        <div id="quote-box" className={`card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${randomColor}`} >
            <div id="text-content">
            <p >&quot;<span id="text">{quote.text}</span>&quot;</p>
            <p id="author">- {quote.author}</p>
            </div>
            <NewQuoteButton data={props}></NewQuoteButton>
            <TweetQuote/>
        </div>
    );
}