import React from 'react';
import Card from './Card';
const Movies = ({movies}) => {
    const cardComponent = movies.map((user, i) => {
        return (<Card 
        key = {i}
        id = {movies[i]._id} 
        title = {movies[i].title} 
        // username = {movies[i].username}
        // email = {movies[i].email}
        // link = {movies[i].link}
        // more = {movies[i].more}
        />)
    })
    return (
    <div>
        {cardComponent}
    </div>
    );
}
export default Movies;