import { useState } from "react";

function Content() {
   const [switch1, setSwitch1] = useState(false);
   const [switch2, setSwitch2] = useState(false);
   const [switch3, setSwitch3] = useState(false);

   const line1 = () => {
      if (switch1 === false) {
         setSwitch1(true);
      } else {
         setSwitch1(false);
      }
   };
   const line2 = () => {
      if (switch2 === false) {
         setSwitch2(true);
      } else {
         setSwitch2(false);
      }
   };
   const line3 = () => {
      if (switch3 === false) {
         setSwitch3(true);
      } else {
         setSwitch3(false);
      }
   };

   return (
      <div className="container">
         <div className="content">
            <div className="click">
               <div className="col-a">
                  <button
                     onClick={line1}
                     style={{
                        backgroundColor: switch1 ? "#5c48d3" : "#fff",
                        color: switch1 ? "#fff" : "#5c48d3",
                        border: "1px solid #5c48d3",
                     }}
                  >
                     ON
                  </button>

                  <button
                     onClick={line2}
                     style={{
                        backgroundColor: switch2 ? "#5c48d3" : "#fff",
                        color: switch2 ? "#ffffff" : "#5c48d3",
                        border: "1px solid #5c48d3",
                     }}
                  >
                     ON
                  </button>
                  <button
                     onClick={line3}
                     style={{
                        backgroundColor: switch3 ? "#5c48d3" : "#fff",
                        color: switch3 ? "#ffffff" : "#5c48d3",
                        border: "1px solid #5c48d3",
                     }}
                  >
                     ON
                  </button>
               </div>
               <div className="col-b">
                  <button
                     onClick={line1}
                     style={{
                        backgroundColor: switch1 ? "#fff" : "#5c48d3",
                        color: switch1 ? "#5c48d3" : "#fff",
                        border: "1px solid #5c48d3",
                     }}
                  >
                     OFF
                  </button>

                  <button
                     onClick={line2}
                     style={{
                        backgroundColor: switch2 ? "#fff" : "#5c48d3",
                        color: switch2 ? "#5c48d3" : "#fff",
                        border: "1px solid #5c48d3",
                     }}
                  >
                     OFF
                  </button>

                  <button
                     onClick={line3}
                     style={{
                        backgroundColor: switch3 ? "#fff" : "#5c48d3",
                        color: switch3 ? "#5c48d3" : "#fff",
                        border: "1px solid #5c48d3",
                     }}
                  >
                     OFF
                  </button>
               </div>
            </div>
            <div className="col-b">
               {switch1 + switch2 + switch3 === 3 ? (
                  <p className="go">Go !</p>
               ) : (
                  <p className="nowait">No Wait !</p>
               )}
            </div>
         </div>
      </div>
   );
}

export default Content;
