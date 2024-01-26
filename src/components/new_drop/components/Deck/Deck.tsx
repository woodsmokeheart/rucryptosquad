import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "./Deck.module.scss";

const cards = [
  "https://i.ibb.co/ygfqHwX/2.png",
  "https://i.ibb.co/Nt8CFFJ/3.png",
  "https://i.ibb.co/JnTy5Gk/4.png",
  "https://i.ibb.co/xjGcxvW/5.png",
  "https://i.ibb.co/z2fGqyx/6.png",
  "https://i.ibb.co/tPqVHJ2/7.png",
  "https://i.ibb.co/GTvrTkw/8.png",
  "https://i.ibb.co/zNqsGTK/9.png",
  "https://i.ibb.co/7bYVRyn/10.png",
  "https://i.ibb.co/ZTsHWGs/11.png",
  "https://i.ibb.co/k3mXQdh/14.png",
  "https://i.ibb.co/Jpf0R1d/13.png",
  "https://i.ibb.co/BLdGnZt/16.png",
  "https://i.ibb.co/hft7Mbv/17.png",
  "https://i.ibb.co/vdCjdsG/19.png",
  "https://i.ibb.co/T0r433F/23.png",
  "https://i.ibb.co/Zg5MB50/22.png",
];

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: 0 });
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.6 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  return (
    <div className={styles.container}>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default Deck;
