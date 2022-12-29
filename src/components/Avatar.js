import React from "react";

function Avatar({ avatar }) {
  const keys = Object.keys(avatar);
  let imagePath = "";
  let zIndex = "";
  return (
    <>
      <div>
        <div className="avatar-wrapper">
          <div className="avatar">
            {keys.map((item) => {
              // const avaArray = [...Array(avatar[`${item}`] + 1).keys()].slice(1);
              const avaValue = avatar[`${item}`];
              const randomNum = Math.floor(Math.random() * avaValue) + 1;
              switch (item) {
                case "body":
                  zIndex = 0;
                  imagePath = `./character/${item}/`;
                  break;
                case "noses":
                case "eyes":
                case "mouths":
                case "eyebrows":
                  zIndex = 1;
                  imagePath = `./character/${item}/`;
                  break;
                case "layer_1":
                  zIndex = 2;
                  imagePath = `./character/clothes/${item}/`;
                  break;
                case "layer_2":
                  zIndex = 3;
                  imagePath = `./character/clothes/${item}/`;
                  break;
                case "layer_3":
                  zIndex = 4;
                  imagePath = `./character/clothes/${item}/`;
                  break;
                case "hats":
                case "glasses":
                case "earrings":
                  zIndex = 5;
                  imagePath = `./character/accessories/${item}/`;
                  break;
                default:
                  zIndex = 1;
                  imagePath = `./character/${item}/`;
              }
              const randomAva = `${imagePath}${randomNum}.png`;
              return (
                <img
                  key={`${item}-${avaValue}`}
                  src={`${imagePath}${avaValue}.png`}
                  alt=""
                  width="260"
                  style={{
                    zIndex: `${zIndex}`,
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                  }}
                />
              );
            })}
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
