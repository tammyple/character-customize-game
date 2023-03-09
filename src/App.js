import React, { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  noses: 1,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  earrings: 32,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [eyebrows, setEyebrow] = useState(0);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [hats, setHats] = useState(0);
  const [earrings, setEarrings] = useState(0);

  const handleRandom = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setHats(Math.floor(Math.random() * total.hats));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };

  useEffect(() => {
    handleRandom();
  }, []);

  return (
    <>
      <div className="App gap-30 bg-img">
        <div className="header">
          <div className="title">CHARACTER</div>
          <div className="subtitle">CUSTOMIZATION</div>
          <div className="divider"></div>
        </div>
        <div className="avatar-group">
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            mouth={mouth}
            eyebrow={eyebrows}
            glasses={glasses}
            hats={hats}
            earrings={earrings}
            handleRandom={handleRandom}
          />
          <div className="list-wrapper">
            <div className="list-section">
              <h2>Body</h2>
              <PartList
                total={total.body}
                path="body"
                set={setBody}
                selected={body}
              />
            </div>
            <div className="list-section">
              <h2>Eyes</h2>
              <PartList
                total={total.eyes}
                path="eyes"
                set={setEyes}
                selected={eyes}
              />
            </div>
            <div className="list-section">
              <h2>Hair</h2>
              <PartList
                total={total.hair}
                path="hair"
                set={setHair}
                selected={hair}
              />
            </div>
            <div className="list-section">
              <h2>Mouth</h2>
              <PartList
                total={total.mouth}
                path="mouths"
                set={setMouth}
                selected={mouth}
              />
            </div>
            <div className="list-section">
              <h2>Eyebrows</h2>
              <PartList
                total={total.eyebrows}
                path="eyebrows"
                set={setEyebrow}
                selected={eyebrows}
              />
            </div>
            <div className="list-section">
              <h2>Glasses</h2>
              <PartList
                total={total.glasses}
                path="accessories/glasses"
                set={setGlasses}
                selected={glasses}
              />
            </div>
            <div className="list-section">
              <h2>Hats</h2>
              <PartList
                total={total.hats}
                path="accessories/hats"
                set={setHats}
                selected={hats}
              />
            </div>
            <div className="list-section">
              <h2>Earrings</h2>
              <PartList
                total={total.earrings}
                path="accessories/earrings"
                set={setEarrings}
                selected={earrings}
              />
            </div>
            <div className="list-section">
              <h2>Clothing (L1)</h2>
              <PartList
                total={total.clothing1}
                path="clothes/layer_1"
                set={setClothing1}
                selected={clothing1}
              />
            </div>
            <div className="list-section">
              <h2>Clothing (L2)</h2>
              <PartList
                total={total.clothing2}
                path="clothes/layer_2"
                set={setClothing2}
                selected={clothing2}
              />
            </div>
            <div className="list-section">
              <h2>Clothing (L3)</h2>
              <PartList
                total={total.clothing3}
                path="clothes/layer_3"
                set={setClothing3}
                selected={clothing3}
                top="-15px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
