import "./style.css";
import React, { useState, useRef } from "react";
import Hugs from "./assets/hugs.gif"
import Bear from "./assets/bear.gif"

function Page2() {
    const wrapperRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 200 });
    const [love,setLove] = useState(false)

  const handleHover = () => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const wrapperWidth = wrapper.offsetWidth; // Largura do wrapper
      const wrapperHeight = wrapper.offsetHeight; // Altura do wrapper
      const buttonWidth = 100; // Largura aproximada do botão
      const buttonHeight = 40; // Altura aproximada do botão

      const mouseX = event.clientX; // Posição X do mouse
      const mouseY = event.clientY; // Posição Y do mouse

      let newTop, newLeft;
      let distance;

      // Gera novas coordenadas até que a distância seja maior que 100px
      do {
        newTop = Math.random() * (wrapperHeight - buttonHeight);
        newLeft = Math.random() * (wrapperWidth - buttonWidth);

        // Calcula a distância entre o mouse e a nova posição do botão
        distance = Math.sqrt(
          Math.pow(newLeft - mouseX, 2) + Math.pow(newTop - mouseY, 2)
        );
      } while (distance < 100); // Continua gerando novas coordenadas até que a distância seja maior que 100px

      setPosition({ top: newTop, left: newLeft });
    }
  };

  const handleClick = () => {
    setLove(true)
  };

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <h2 className="question">Do you love me?</h2>
        <img
          className="gif"
          alt="gif"
          src={love?Hugs:Bear}
        />
        <div className="btn-group">
          <button className="yes-btn" onClick={handleClick}>
            Yes
          </button>
          <button
            className="no-btn"
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
            onMouseEnter={() => handleHover()}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default Page2;
