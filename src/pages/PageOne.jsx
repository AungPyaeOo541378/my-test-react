import Text from "../components/Text"
import { Link } from "react-router-dom"
export default function PageOne(){
    return (
       <div> 
        <Link to="/page-two"> Go to Page Two</Link>
        <h1 className="text-black">Hello Pgae 1</h1>
         <div className="grid grid-cols-2 ">
          <Text
           title="Hello Side 1"
           description="For page 1 fnff hrttert fghggrg fdgg fggffgg
           fgfdgfdfoig g fdg ert ri eret rt reri t45t ret tr g tt rrg rtyy rttrtrre rttr tt errt ert"
           textColor="text-green-900"
           titleColor="text-yellow-700"
           />

          <Text
           title="Hello Side 1"
           description="For page 1 fnff hrttert fghggrg fdgg fggffgg
           fgfdgfdfoig g fdg ert ri eret rt reri t45t ret tr g tt rrg rtyy rttrtrre rttr tt errt ert"
           textColor="text-green-900 "
            titleColor="text-red-700"
           />
         
         </div>
         <div>
          <Text 
          title= "Hello Long Jamp"
          description="blah balh "
          />
         </div>
       </div>
    )
}