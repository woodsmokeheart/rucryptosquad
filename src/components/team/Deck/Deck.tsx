import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "./Deck.module.scss";

const cards = [
  "https://lh3.googleusercontent.com/TobKlFFuX8bgwT3DYkHUWbPqT6MYqsowA1-32ltlQ-dEtpK4xD2jb4YFNb-cFd1jnBvmDLvLGyMWSp0SyHA7Y7wNyQSy1APkotjx=s1000",
  "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9iYWZ5YmVpZ25uM3FubXpndnN0aHFmczN0Z2pla2F4M3RvbGkyZWx2cXltNzRrNjNtZjV5NHhyamxseS9pbWFnZS5wbmc=",
  "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9iYWZ5YmVpZ21wcXF6Z2ZlbHFwbXRmenQ3cjU3cm1pMm1kczNtcG5mZHFzZXplNndsd2U3YndjdjdkbS9pbWFnZS5wbmc=",
  "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9iYWZ5YmVpYjVnaTZ4cm5id2VpYmJjYmh1NzZjNXZ0c21ueGVncXRibjVuNDd1aHFmNDRuMzd4b2l5dS9pbWFnZS5wbmc=",
  "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9iYWZ5YmVpY2dqY242cTJrMjM1Ynlobm5lZ25jc3ZncHNueW5qNHR6c21rbWFuMjJwbWE2ZW40b2N6YS9pbWFnZS5wbmc=",
  "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9iYWZ5YmVpZXpzcmZ0NnVheHd0aTRsZGloNTRvMmJxY3plbHFocXA0Zzd6dzJ6cmZyNWdvbmJ1cnVkdS9pbWFnZS5wbmc=",
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
        const scale = down ? 1.1 : 1;
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
