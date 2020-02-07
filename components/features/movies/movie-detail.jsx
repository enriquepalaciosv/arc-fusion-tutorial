import React, { useState } from 'react'
import PropTypes from 'prop-types';

const MoviePlot = (props) => {
    const [isPlotShown, setPlotShown] = useState(false)

    return <>
        {isPlotShown && props.plot}
        <button onClick={() => setPlotShown(!isPlotShown)}>
            {isPlotShown ? 'Hide Plot' : 'Show Plot'}
        </button>
    </>
}

const MovieDetail = (props) =>
    <div className='movie-detail col-sm-12 col-md-8'>
        <h1>Jurassic Park</h1>
        <p><strong>Director:</strong> Steven Spielberg</p>
        <p><strong>Actors:</strong> Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough</p>
        <p><strong>Plot:</strong> <MoviePlot plot='Lorem ipsum' /></p>
        <p><strong>Rated:</strong> PG-13</p>
        <p><strong>Writer:</strong> Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)</p>
        <p><strong>Year:</strong> 1993</p>
        <img src='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg' alt={`Poster for Jurassic Park`} />
    </div>

MovieDetail.label = 'Movie Detail'

MovieDetail.propsTypes = {
    customFields: PropTypes.shape({
        plot: PropTypes.string
    })
};

export default MovieDetail