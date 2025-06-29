import Text from "../components/Text"
import { Link } from "react-router-dom"
export default function PageTwo(){
    return (
       <div> 
         <Link to="/"> Go to Page One</Link>
         <div className="grid grid-cols-2 ">
          <Text
           title="Hello Side 2"
           description="For page 2 fnff hrttert fghggrg fdgg fggffgg
           fgfdgfdfoig g fdg ert ri eret rt reri t45t ret tr g tt rrg rtyy rttrtrre rttr tt errt ert"
           textColor="text-green-900"
           titleColor="text-yellow-700"
           />

          <Text
           title="Hello Side 2"
           description="For page 2 fnff hrttert fghggrg fdgg fggffgg
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