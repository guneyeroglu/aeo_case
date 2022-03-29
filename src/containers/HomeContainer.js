import React from "react";

function HomeContainer() {
  return (
    <>
      <img
        className="aoe-home"
        src="./logo_2.png"
        alt="Age of Empires"
        width={576}
        height={384}
        srcSet="
        ./logo_2.png 576w,
        ./logo_2.png 768w,
        ./logo_2.png 1280w,
        ./logo_2.png 1920w,"
      ></img>
    </>
  );
}

export default HomeContainer;
