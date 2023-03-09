import React from "react";

function Part({ path, index, zIndex }) {
  return (
    <div>
      <img
        src={`./character/${path}/${index}.png`}
        alt=""
        width="260"
        style={{
          zIndex: `${zIndex}`,
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
    </div>
  );
}

export default Part;
