import React from 'react';
import Card from './Card';
const getStr  = (arr) =>{
    let str = "";
    // arr.forEach(element => {
    //     str += element + ", "
    // });
    // for (let element of arr) {
    //     str += element + ", ";
    // }
    for (let i = 0; i < arr.length-1; i++) {
        str += arr[i] + ", "
    }
    str+=arr[arr.length-1]
    return str;
}
const Movies = ({movies, signedIn}) => {
    const cardComponent = movies.map((movie, i) => {
        return (<Card 
        key = {i}
        id = {movies[i]._id} 
        title = {movies[i].title} 
        subtitle = {movies[i].subtitle} 
        year = {movies[i].year}
        genre = {getStr(movies[i].genre)}
        topCast = {getStr(movies[i].topCast)}
        synopsis = {movies[i].synopsis}
        image = {movies[i].image}
        trailer = {movies[i].trailer}
        Rating = {movies[i].Rating}
        signedIn = {signedIn}
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