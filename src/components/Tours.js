import Card from './Card';
function Tours({tours, removeTour}) {

    return(
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Amit</h2>
            </div>
            <div className='cards'>
                {/* map function ki help se all cards bnayenge rather then ki 7 bar data copy kre */}
                {
                    tours.map( (tour)=> {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>

    );

}

export default Tours;