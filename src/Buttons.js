const Buttons = ({ number, text, color1, color2 }) => {
   return (
      <>
         <button
            onClick={"line" + number}
            style={{
               backgroundColor: "switch" + number ? color1 : color2,
               color: "switch" + number ? color2 : color1,
               border: "1px solid #5c48d3",
            }}
         >
            {text}
         </button>
      </>
   );
};

export default Buttons;
