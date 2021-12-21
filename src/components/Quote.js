


const Quote = ({ quote }) => {
    return(
        <div className="quote">
            <blockquote cite="https://quote-garden.herokuapp.com/api/v3/quotes/?author={author}">"{quote.quoteText}"</blockquote>
        </div>
    );
}


export default Quote;
