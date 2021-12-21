import Quote from './Quote';


const AllQuotes = ({ quotes, page }) => {
    let author = page;

    return(
        <div>
            <h1 id="author-name">{ author }</h1>
            <div className="container">
                { quotes.map( (quote, index) =>
                    <Quote key={ index } quote={ quote } />
                ) }
            </div>
        </div>
    )
}

export default AllQuotes;
