import "./App.css";
import moon from "../public/images/mike-petrucci-uIf6H1or1nE-unsplash.jpg";
import landscape from "../public/images/aron-visuals-LSFuPFE9vKE-unsplash.jpg";
import cat from "../public/images/cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          factor={2}
          speed={1}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        />

        <ParallaxLayer
          offset={1}
          factor={4}
          speed={0.5}
          style={{
            backgroundImage: `url(${landscape})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0.2} speed={0.05}>
          <h1>Welcome to Zyrona</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={2}>
          <h1>Web Development Is Fun</h1>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.9, end: 4.5 }}>
          <img src={`${cat}`} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
