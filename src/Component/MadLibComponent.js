// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { madLibs } from '../Services/DataServices';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// export default function MadLibComponent() {

//     const [charaOne, getcharaOne] = useState("");
//     const [CharaTwo, getCharaTwo] = useState("");
//     const [placeOne, getPlaceOne] = useState("");
//     const [adjectOne, getAdjectOne] = useState("");
//     const [nounOne, getNounOne] = useState("");
//     const [optionOne, getOptionOne] = useState("");
//     const [colorOne, getColorOne] = useState("");
//     const [reactionOne, getReactionOne] = useState("");
//     const [expressOne, getExpressOne] = useState("");
//     const [WeatherOne, getWeatherOne] = useState("");
//     const [AnswerTwo, getAnswerTwo] = useState("");
//     const [ReviewOne, getReviewOne] = useState("");

//     const [result, setResult] = useState("");

//     const getResult = async () => {
//       const promise = await madLibs(charaOne, CharaTwo, placeOne, adjectOne, nounOne, optionOne, colorOne, reactionOne, expressOne, WeatherOne, AnswerTwo, ReviewOne)
//       setResult(promise)
//     }


//   return (
//     <div className='background'>
      
//       <Button>
//         <Link to={"/"}>
//           <p className="">Back</p>
//         </Link>
//         </Button>



//       <p>{result}</p>
//     </div>
//   )
// }
