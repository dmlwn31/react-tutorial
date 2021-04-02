import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import SectionArea from './components/Section';
import FooterArea from './components/footer';

// function Greeting(){
//   //render 함수의 내부에 return 값은 반드시 하나의 태그로 감사져야 한다.
//   //render(){
//     return(
//       <div>
//         <p>Hello Again React!!</p>
//       </div>
//     );
//   //}
// }


  
  
  


function App() {
  return ( 
    <div className="App">
      <Header />
      <sectionArea />
      <FooterArea />
    </div>
    
  );
}

export default App;
