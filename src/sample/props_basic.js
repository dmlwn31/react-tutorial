import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


function Movie({title, ranking, desc}){
  console.log(typeof ranking);
  return(
    <div>
      <h3>Favorit Movie is {title}</h3>
      <p>Ranking : {ranking}</p>
      <img src={picture} alt={id}
    </div>
  );
}

const arr = ['a', 'b', 'c', 'd'];
// arr.map(function(elm){
//   console.log(elm);
//   return 0;
// });

// arr.map((elm) => {
//   console.log(elm);
//   return 0;
// });

const myMovies = [
  {
    id:1,
    title:"shindler",
    ranking:5,
    image:'https://lh3.googleusercontent.com/proxy/ZCNYb_GcnmIMNWBTH1l02Oc8EQ-E63-bvbmDrnYeB1E6PZrSUpnzCAtFq1YxLrHwnJ23ONuEBnNOTugdtmTmhfuvvbsTAvGtLsF1h2Q0baXjM6C8Mmww3yXedMbjROSnMkmD-CShEWCdRdltPqmAegNZ-PTKYGTJrB0ZDJmoRRoYS634DyzkSw1LCYHCRc19n64YJQxB0qYdZ57tjhUYT5cLPs-2n_CrQB2kznmpM1u1fR2rzlS3i2dFyEisKKvWC6PlKHIoqPcPQoEw-qJkZdayd6dMqX7EvBtLL-wHxk70ZplhVL5jjFVFmE7TNrm2gbCc7idm4TvwWWbOCvlUUIsrGR1n38MTfVodFyPFSFQYXF5f3y2OAtJjQZty2ft-7QY'

  },
  {
    id:2,
    title:"반도",
    ranking:3,
    image:'http://img.newspim.com/news//2020/07/13/2007131452375670.jpg'
  },
  {
    id:3,
    title:"신세계",
    ranking:2.5,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiFvThFNOEMT92-tkYao4WbXOfybqbC3D1g&usqp=CAU'
  },
  {
    id:4,
    title:"해리포터",
    ranking:1,
    image:'https://i.ibb.co/PWZV8kb/4dd7aa42cf884a8b9b55ea9a69d18063.jpg'
  },
]


function App() {
  return (
    <div className="App">
     <h2>My Movie</h2>
     {myMovies.map((movies) => {
      
     <Movie 
       title={myMovies.title}
       ranking={myMovies.ranking} 
       picture={myMovies.images}
       key={movies.id} 
     /> 
     })}
     </div>
  );
 }


 Movie.propTypes = {
  title:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
}


export default App;
