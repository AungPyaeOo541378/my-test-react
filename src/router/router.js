import PageOne from "../pages/PageOne"
import PageTwo from "../pages/PageTwo"
import { Routes,Route } from "react-router-dom"
export default function Router(){
    return(
      <Routes>
        <Route path="/" element={<PageOne/>}></Route>
        <Route path="/page-two" element={<PageTwo/>}></Route>
      </Routes>
    )
}