import React from "react";

// function importAll(r) {
//   return r.keys().map(r);
// }

// const bodyImages = importAll(
//   require.context("./", false, /\.(png|jpe?g|svg)$/)
// );
// console.log(bodyImages);

function PartList({ total }) {
  const keys = Object.keys(total);

  return (
    <>
      <div>
        {keys.map((item) => {
          const imagePath = `./character/${item}/`;
          const imagesArray = [...Array(total[`${item}`] + 1).keys()].slice(1);
          console.log("item", item);
          return (
            <div key={item} className="list-section">
              <h2>{item}</h2>
              <div className="list">
                {imagesArray.map((image) => {
                  return (
                    <div key={`${item}-${image}`} className="square">
                      <img
                        src={`${imagePath}${image}.png`}
                        alt=""
                        height="60"
                        className="img-center"
                        style={{ top: "50%" }}
                      />
                      <img
                        src={`./character/body/1.png`}
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
