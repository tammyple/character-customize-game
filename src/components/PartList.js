import React from "react";

function PartList({ total, path, set, selected }) {
  let arr = [];
  for (let i = 0; i < total; i++) {
    arr.push(i + 1);
  }
  return (
    <div className="list">
      {arr.map((item) => (
        <div
          key={path + item}
          className={
            selected === item ? "selected clickable square" : "clickable square"
          }
          onClick={() => set(item)}
        >
          <img
            src={`./character/${path}/${item}.png`}
            className="img-center"
            height="60"
            style={{ top: "50%" }}
            alt={path + item}
          />
        </div>
      ))}
    </div>
  );
}

export default PartList;
