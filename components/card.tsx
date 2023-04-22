import { useState, useRef, useEffect } from "react";

type XY = {
  x: number;
  y: number;
};

const constrain = 400;

function transformElement(element: HTMLDivElement, xy: XY) {
  const x = xy.x;
  const y = xy.y;

  const box = element.getBoundingClientRect();
  const calcX = -(y - box.y - box.height / 2) / constrain;
  const calcY = (x - box.x - box.width / 2) / constrain;

  element.style.transform = `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
}

function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const [xy, setXY] = useState<XY>({ x: 0, y: 0 });
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (layerRef.current) {
      transformElement(layerRef.current, xy);
    }
  }, [xy]);

  useEffect(() => {
    if (layerRef.current) {
      transformElement(layerRef.current, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    setXY({ x: e.clientX, y: e.clientY });
  }

  return <div ref={layerRef} onMouseMove={handleMouseMove} {...props} />;
}

export default Card;
