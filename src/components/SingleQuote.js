import Quote from './Quote';
import Author from './Author';


const SingleQuote = ({ quote, getAllQuotes }) => {
    return(
        <div className="container">
            <Quote quote={ quote }/>
            <Author quote={ quote } getAllQuotes={ getAllQuotes }/>
        </div>
    );
}

export default SingleQuote;
