import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './Component/HomePageComponent';
import SumOfTwoNumbersComponent from './Component/SumOfTwoNumbersComponent';
import SayHelloComponent from './Component/SayHelloComponent';
import ReverseIt from './Component/ReverseIt';
import ReverseItNumbers from './Component/ReverseItNumbers';
import RestaurantPickerComponent from './Component/RestaurantPickerComponent';
import OddOrEvenComponent from './Component/OddOrEvenComponent';
import MadLibComponent from './Component/MadLibComponent';
import AskingQuestions from './Component/AskingQuestions';
import GreaterOrLessComponent from './Component/GreaterThanLessThanComponent';
import Magic8Ball from './Component/MagicEightBall';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
      <Route path = "/" element ={<HomePageComponent/>}/>
      <Route path='SayHello' element={<SayHelloComponent/>}/>
      <Route path='SumOfTwoNumbers' element={<SumOfTwoNumbersComponent/>}/>
      <Route path='ReverseIt' element={<ReverseIt/>}/>
      <Route path='ReverseItNumbers' element={<ReverseItNumbers/>}/>
      <Route path='RestaurantPicker' element={<RestaurantPickerComponent/>}/>
      <Route path='OddOrEven' element={<OddOrEvenComponent/>}/>
      <Route path='Magic8Ball' element={<Magic8Ball/>}/>
      <Route path='MadLib' element={<MadLibComponent/>}/>
      <Route path='GreaterOrLess' element={<GreaterOrLessComponent/>}/>
      <Route path='AskingQuestions' element={<AskingQuestions/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
