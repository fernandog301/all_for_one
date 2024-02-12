import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './Component/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SumOfTwoNumbersComponent from './Component/SumOfTwoNumbersComponent';
import SayHelloComponent from './Component/SayHelloComponent';
import ReverseItComponent from './Component/ReverseItComponent';
import ReverseItNumbersComponent from './Component/ReverseItNumbersComponent';
import RestaurantPickerComponent from './Component/RestaurantPickerComponent';
import OddOrEvenComponent from './Component/OddOrEvenComponent';
// import MadLibComponentComponent from './Component/MadLibComponent';
import AskingQuestionsComponent from './Component/AskingQuestionsComponent';
import GreaterOrLessComponent from './Component/GreaterOrLessComponent';
import Magic8BallComponent from './Component/MagicEightBallComponent';

function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
      <Route path = "/" element ={<HomePageComponent/>}/>
      <Route path='SayHello' element={<SayHelloComponent/>}/>
      <Route path='SumOfTwoNumbers' element={<SumOfTwoNumbersComponent/>}/>
      <Route path='ReverseIt' element={<ReverseItComponent/>}/>
      <Route path='ReverseItNumbers' element={<ReverseItNumbersComponent/>}/>
      <Route path='RestaurantPicker' element={<RestaurantPickerComponent/>}/>
      <Route path='OddOrEven' element={<OddOrEvenComponent/>}/>
      <Route path='Magic8Ball' element={<Magic8BallComponent/>}/>
      {/* <Route path='MadLib' element={<MadLibComponentComponent/>}/> */}
      <Route path='GreaterOrLess' element={<GreaterOrLessComponent/>}/>
      <Route path='AskingQuestions' element={<AskingQuestionsComponent/>}/>
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
