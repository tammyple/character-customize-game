import React, { useState } from "react";

function PartList({
  total,
  avatar,
  selected,
  setSelected,
  handleClick,
  handleSelected,
}) {
  const keys = Object.keys(total);
  let imagePath = "";
  let itemName = "";
  return (
    <>
      <div className="list-wrapper">
        {keys.map((item) => {
          const imagesArray = [...Array(total[`${item}`] + 1).keys()].slice(1);
          switch (item) {
            case "glasses":
            case "hats":
            case "earrings":
              imagePath = `./character/accessories/${item}/`;
              itemName = `${item}`;
              break;
            case "layer_1":
            case "layer_2":
            case "layer_3":
              imagePath = `./character/clothes/${item}/`;
              itemName = `Clothes ${item}`;
              break;
            default:
              imagePath = `./character/${item}/`;
              itemName = `${item}`;
          }

          return (
            <div key={item} className="list-section">
              <h2>{`${itemName}`.toUpperCase()}</h2>
              <div className="list">
                {imagesArray.map((image) => {
                  return (
                    <div
                      key={`${item}-${image}`}
                      className={
                        `${selected}` === `${item}-${image}`
                          ? "clickable square selected"
                          : "clickable square"
                      }
                      onClick={() => setSelected(`${item}-${image}`)}
                    >
                      <img
                        id={`${item}-${image}`}
                        name={`${item}`}
                        data-value={`${image}`}
                        src={`${imagePath}${image}.png`}
                        alt=""
                        height="60"
                        className="img-center"
                        style={{ top: "50%" }}
                        onClick={handleClick}
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
