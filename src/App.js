import logo from './logo.svg';
import './App.css';
import './test.css'
import { BrowserRouter as RouterProvider, Link } from "react-router-dom";
import Router from './router/router';
function App(){
  return (
   <RouterProvider>
    <Router/>
   </RouterProvider>
  );

}


export default App;
