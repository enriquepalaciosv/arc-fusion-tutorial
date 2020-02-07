import { useContent } from 'fusion:content'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const MovieList = (props) => {

    const { contentService, contentConfigValues } = props.customFields.movieListConfig;

    const movies = useContent({
        source: contentService,
        query: contentConfigValues,
        filter: '{ totalResults Search { Title Year Poster } }',
        transform(data) {
            if (data && data.Search)
                return { list: [...data.Search] };
            else
                return movies;
        }
    })

    const { list: movieList = [] } = movies;

    return (
        <Fragment>
            <h2>Movies</h2>
            <div>
                {movieList && movieList.map((movie, idx) =>
                    <div key={`movie-${idx}`}>
                        <h4>{movie.Title}</h4>
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <img src={movie.Poster} />
                    </div>
                )}
            </div>
        </Fragment>
    )
}

MovieList.propTypes = {
    customFields: PropTypes.shape({
        // We're using the Fusion-specific PropType `contentConfig` and passing it the name(s) of the GraphQL schemas this component will work with
        movieListConfig: PropTypes.contentConfig('movies')
    })
}

MovieList.label = 'Movie List'

export default MovieList