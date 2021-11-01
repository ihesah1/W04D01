import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Todo from "./components/todo";

class App extends React.Component {
  render()
{
 return (
    <div className="App">
     <Header/>
     <Todo/>
     <Footer/>
    </div>
  ); 
}   
}

export default App;
