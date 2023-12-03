'use client'
export default function TweetQuote() {

    function handleClick(e) {
        let text = document.querySelector('#text').textContent;
        let author = document.querySelector('#author').textContent;
        let formattedText = encodeURIComponent('"' + text + '"') + encodeURIComponent('\n - ') + encodeURIComponent(author);

        e.target.href = 'https://twitter.com/intent/tweet' + '?text=' + formattedText;
    }
    return (
        <a className="twitter-share-button" onClick={handleClick} id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet quote</a>
    )
}