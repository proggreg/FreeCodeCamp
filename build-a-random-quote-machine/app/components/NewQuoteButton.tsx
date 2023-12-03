'use client'
import React from 'react';

export default function NewQuoteButton(props) {
    async function newQuote() {
        let response = await fetch('https://api.quotable.io/random')
        let newQuote = await response.json()
        document.querySelector('#text').textContent = newQuote.content;
        document.querySelector('#author').textContent = newQuote.author;
    }
    return (
        <button id="new-quote" onClick={newQuote} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            New Quote
        </button>
    )
}