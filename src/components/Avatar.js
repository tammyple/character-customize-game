import React from "react";

function Avatar({ total, squares }) {
  const keys = Object.keys(total);
  let imagePath = "";
  let zIndex = "";
  return (
    <>
      <div>
        <div className="avatar-wrapper">
          <div className="avatar">
            {keys.map((item) => {
              // const avaArray = [...Array(total[`${item}`] + 1).keys()].slice(1);
              const avaValue = total[`${item}`];
              const randomAva = Math.floor(Math.random() * avaValue);
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
              return (
                <img
                  src={`${imagePath}${randomAva}.png`}
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
