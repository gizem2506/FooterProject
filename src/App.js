import React from "react";
import Frame from "./assets/Frame.png";
import Frame1 from "./assets/Frame-1.png";
import Frame2 from "./assets/Frame-2.png";
import Frame3 from "./assets/Frame-3.png";
import Frame4 from "./assets/Frame-4.png";
import Frame5 from "./assets/Frame-5.png";
import Frame6 from "./assets/Frame-6.png";
import Frame7 from "./assets/Frame-7.png";
import Frame8 from "./assets/Frame-8.png";
import Frame9 from "./assets/Frame-9.png";
import Frame10 from "./assets/Vector.png";

function App() {
  return (
    <div class=" flex w-full h-screen bg-blue-900 m-8  ">
      <div class="flex w-full justify-between items-end m-5 mx-5  ">
        <div class="text-white"> Copyright @ 2022 All Rights Reserved</div>
        <div class=" grid grid-cols-10 gap-1  ">
          <img src={Frame} alt="" />
          <img src={Frame1} alt="" />
          <img src={Frame2} alt="" />
          <img src={Frame3} alt="" />
          <img src={Frame4} alt="" />
          <img src={Frame5} alt="" />
          <img src={Frame6} alt="" />
          <img src={Frame7} alt="" />
          <img src={Frame8} alt="" />
          <img src={Frame9} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
