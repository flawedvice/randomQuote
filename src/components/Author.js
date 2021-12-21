import { MdArrowRightAlt } from 'react-icons/md';


const Author = ({ quote, getAllQuotes }) => {

    return (
        <div className="author-block" onClick={ () => getAllQuotes(quote.quoteAuthor) }>
            <div>
                <h3>{ quote.quoteAuthor }</h3>
                <p>{ quote.quoteGenre }</p>
            </div>
            <MdArrowRightAlt id="author-icon"/>
        </div>
    );
}

export default Author;
