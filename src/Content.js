import { useState } from "react";

const Content = () => {
   const [switch1, setSwitch1] = useState(false);
   const [switch2, setSwitch2] = useState(false);
   const [switch3, setSwitch3] = useState(false);

   return (
      <>
         <div className="container">
            <div className="content">
               <div className="col-a">
                  

                  <button
                  onClick={() => {                
                     setSwitch1({if switch1 && switch1=false});
                  }}
               >
                  ON
               </button>






                  <div>ON</div>
                  <div>ON</div>
                  <div>OFF</div>
                  <div>OFF</div>
                  <div>OFF</div>
               </div>

               <div className="col-b">No wait!</div>
            </div>
         </div>
      </>
   );
};

export default Content;
