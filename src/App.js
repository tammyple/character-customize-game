import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  noses: 1,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  earrings: 32,
  layer_1: 5,
  layer_2: 5,
  layer_3: 9,
};

function App() {
  const [avatar, setAvatar] = useState({
    body: 17,
    eyes: 17,
    hair: 73,
    mouths: 24,
    noses: 1,
    eyebrows: 15,
    hats: 28,
    glasses: 17,
    earrings: 32,
    layer_1: 5,
    layer_2: 5,
    layer_3: 9,
  });
  const [selected, setSelected] = useState(null);

  const handleSelected = (item) => {
    setSelected(item);
  };

  const handleClick = (e) => {
    let value = e.target.getAttribute("data-value");
    setAvatar({ ...avatar, [e.target.name]: value });
  };

  // const handleRandom = () => {
  //   let updatedValue = "";
  //   const keys = Object.entries(total);
  //   keys.forEach((item) => {
  //     const avaValue = item[1];
  //     const randomNum = Math.floor(Math.random() * avaValue) + 1;
  //     updatedValue = { [item[0]]: randomNum };
  //   });
  //   setAvatar({ ...avatar, ...updatedValue });
  //   console.log("avatar", avatar);
  //   return avatar;
  // };

  const handleRandom = () => {
    const keys = Object.keys(avatar);
    let updatedValue = {};
    keys.forEach((item) => {
      const avaValue = avatar[`${item}`];
      const randomNum = Math.floor(Math.random() * avaValue) + 1;
      console.log("randomNum", randomNum);
      updatedValue = { ...updatedValue, [item]: randomNum };
      console.log("updated Value", updatedValue);
    });
    setAvatar((prev) => ({ ...prev, ...updatedValue }));
    console.log("avatar", avatar);
    return avatar;
  };

  return (
    <>
      <div className="App gap-30">
        <div className="header">
          <div className="title">CHARACTER</div>
          <div className="subtitle">CUSTOMIZATION</div>
          <div className="divider"></div>
        </div>
        <div className="avatar-group">
          <Avatar
            total={total}
            avatar={avatar}
            value={selected}
            handleRandom={handleRandom}
          />
          <PartList
            total={total}
            avatar={avatar}
            selected={selected}
            setSelected={setSelected}
            setAvatar={setAvatar}
            handleClick={handleClick}
            handleSelected={handleSelected}
          />
        </div>
      </div>
    </>
  );
}

export default App;
