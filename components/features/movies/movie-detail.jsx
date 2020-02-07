import React, { useState } from 'react'
import Consumer from 'fusion:consumer'

const MoviePlot = (props) => {
    const [isPlotShown, setPlotShown] = useState(false)

    return <>
        {isPlotShown && props.plot}
        <button onClick={() => setPlotShown(!isPlotShown)}>
            {isPlotShown ? 'Hide Plot' : 'Show Plot'}
        </button>
    </>
}

const MovieDetail = (props) => {
    const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } = props.globalContent || {}
    return (
        <div className='movie-detail col-sm-12 col-md-8'>
            {Title && <h1>{Title}</h1>}
            {Director && <p><strong>Director:</strong> {Director}</p>}
            {Actors && <p><strong>Actors:</strong> {Actors}</p>}
            {Plot && <p><strong>Plot:</strong> <MoviePlot plot={Plot} /></p>}
            {Rated && <p><strong>Rated:</strong> {Rated}</p>}
            {Writer && <p><strong>Writer:</strong> {Writer}</p>}
            {Year && <p><strong>Year:</strong> {Year}</p>}
            {Poster && Title && <img src={Poster} alt={`Poster for ${Title}`} />}
        </div>
    )
}
MovieDetail.label = 'Movie Detail'

export default Consumer(MovieDetail)