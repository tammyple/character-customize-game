import React from "react";

// function importAll(r) {
//   return r.keys().map(r);
// }

// const bodyImages = importAll(
//   require.context("./", false, /\.(png|jpe?g|svg)$/)
// );
// console.log(bodyImages);

function PartList({ total, handleClick }) {
  const keys = Object.keys(total);
  let imagePath = "";
  return (
    <>
      <div className="list-wrapper">
        {keys.map((item) => {
          const imagesArray = [...Array(total[`${item}`] + 1).keys()].slice(1);
          if (item === "glasses" || item === "hats" || item === "earrings") {
            imagePath = `./character/accessories/${item}/`;
          }
          if (item === "layer_1" || item === "layer_2" || item === "layer_3") {
            imagePath = `./character/clothes/${item}/`;
          } else {
            imagePath = `./character/${item}/`;
          }
          return (
            <div key={item} className="list-section">
              <h2>{item}</h2>
              <div className="list">
                {imagesArray.map((image) => {
                  return (
                    <div
                      key={`${item}-${image}`}
                      className="clickable square"
                      onClick={handleClick}
                    >
                      <img
                        src={`${imagePath}${image}.png`}
                        alt=""
                        height="60"
                        className="img-center"
                        style={{ top: "50%" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PartList;
