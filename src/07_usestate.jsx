import { useState } from "react";

const ANIMAL_IMAGES = {
  img1: "https://source.unsplash.com/100x100/?aceituna",
  img2: "https://source.unsplash.com/200x200/?dog",
  img3: "https://source.unsplash.com/300x300/?cat",
};

const App = () => {
  const [currentImg, setCurrentImg] = useState(ANIMAL_IMAGES.img1);
  return (
    <div>
      <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img1)}>Img 1</button>
      <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img2)}>Img 2</button>
      <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img3)}>Img 3</button>
      <br />

      <img src={currentImg} alt="Imagen" />
    </div>
  );
};

export default App;
