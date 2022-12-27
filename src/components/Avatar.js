import React from "react";

function Avatar({ avatar, squares }) {
  return (
    <>
      <div>
        <div className="avatar-wrapper">
          <div className="avatar">
            <img
              src={squares}
              alt=""
              width="260"
              style={{
                zIndex: "0",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
            <img
              src="character/eyes/9.png"
              alt=""
              width="260"
              style={{
                zIndex: "1",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
            <img
              src="character/hair/65.png"
              alt=""
              width="260"
              style={{
                zIndex: "6",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
            <img
              src="character/clothes/layer_1/3.png"
              alt=""
              width="260"
              style={{
                zIndex: "2",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
            <img
              src="character/clothes/layer_2/1.png"
              alt=""
              width="260"
              style={{
                zIndex: "3",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
            <img
              src="character/mouths/7.png"
              alt=""
              width="260"
              style={{
                zIndex: "4",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
          </div>
          <div className="text-center">
            <button className="random-button">Randomize!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
