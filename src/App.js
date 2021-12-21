import { useState, useEffect } from 'react';
import axios from 'axios';

import Randomizer from './components/Randomizer';
import SingleQuote from './components/SingleQuote';
import AllQuotes from './components/AllQuotes';


function App() {

    const [ quotes, setQuotes ] = useState([{ _id: "5eb17ab1b69dc744b4e7ab64", quoteText: "Leadership must be established from the top down.", quoteAuthor: "Sam Nunn", quoteGenre: "leadership", __v: 0 }]);

    const [ page, setPage] = useState('quote');


    async function getSingleQuote() {
        console.log('Getting random quote...');
        const singleQuote = document.getElementsByClassName('quote')[0];
        try {
            if (page === 'quote') {
                singleQuote.classList.add('changing-quote');
            }

            let quote = await axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
                .then( ({ data }) => {
                    return data.data[0];
                });

            setQuotes([quote]);
            setPage('quote');
        }
        catch ( err ) {
            console.log(err);
        }
        finally {
            singleQuote.classList.remove('changing-quote');
        }
    }

    async function getAllQuotes(author) {
        console.log(`Getting every quote from ${author}`);
        try {
            let authorQuotes = await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}`)
                .then( ({data}) => {
                    return data.data;
                });

            console.log(authorQuotes);
            setQuotes(authorQuotes);
            setPage(author);

        } catch ( err ) {
            console.log( err );
        }
    }

    return (
        <div>
            <nav>
                <Randomizer getQuote={ getSingleQuote }/>
            </nav>
            <main>

                { page === 'quote' ?
                    <SingleQuote quote={ quotes[0] } getAllQuotes={ getAllQuotes }/> :
                    <AllQuotes quotes={ quotes } page={ page }/>
                }

            </main>
            <footer>
                <p>created by <a href="https://vicearanda.com" target="_blank">flawedvice</a> - devChallenges.io</p>
            </footer>
        </div>
    );
}

export default App;
