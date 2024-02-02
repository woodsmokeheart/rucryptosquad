/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Tower.module.scss";
import Image from "next/image";
import img1 from "../../../../../assets/img/lore_img/tower/1.jpg";
import img2 from "../../../../../assets/img/lore_img/tower/2.jpg";
import img3 from "../../../../../assets/img/lore_img/tower/3.jpg";
import img4 from "../../../../../assets/img/lore_img/tower/4.jpg";
import img5 from "../../../../../assets/img/lore_img/tower/5.jpg";

const Tower = () => {
  return (
    <div className={styles.wrapper}>
      <h2>The mother tower</h2>
      <div className={styles.image}>
        <Image src={img1} alt="hero" sizes="100%" priority />
      </div>
      <p>
        In the heart of the underground hive city of Ethereon, the "Mother
        Tower" of RCS rises to the heavens like a great monument made of shining
        crystals and starlight. Majestic arches and walls made of strange metal
        reflect the iridescent light, creating the illusion of fiery feathers
        dancing in the wind. The patterns floating on the surface of the tower
        are like magic runes, storing ancient knowledge and secrets. In this
        place, space and time merge into an indissoluble harmony.
      </p>
      <p>
        The tower is not just a structure, it is like a living being, pulsating
        with energy and wisdom. The structure is endowed with powerful
        artificial intelligence that protects and fills it with life. As the
        guardian and defender of Ethereum, the "Mother Tower" of RCS watches
        over the entire community, enveloping it with its blessing, giving
        strength and hope. This huge, majestic building attracts the eyes of all
        residents of Ethereum, like a magnet.
      </p>
      <div className={styles.image}>
        <Image src={img4} alt="hero" sizes="100%" priority />
      </div>
      <p>
        The citadel-residence of the RCS is located in the heart of the tower
        and serves not only as a symbol of the power and wisdom of the order,
        but also as a refuge for its great leaders and members. Piercing the
        strong walls and high ceilings, the Nanite runes are illuminated by neon
        light from planets in the artificial sky. The citadel is at the same
        time similar to a Gothic temple of the ancient world, and to a
        supertechnological mechanism.
      </p>
      <p>
        The tower also serves as the spiritual and intellectual center of
        Ethereon. Inside it there are Halls of Knowledge where scientists
        conduct research and experiments. There are also Council Halls where
        Legates and Senators gather to make important decisions that determine
        the future of the community.
      </p>
      <p>
        A special place in the tower is occupied by the mysterious and
        mysterious room of the "First". The entrance to it is guarded by strict
        tower security measures, and even the Creators of the RCS do not have
        access to it. What exactly is inside this room remains a mystery,
        shrouded in darkness. Some say that it contains records related to the
        appearance of nanites and the creation of Ethereum, while others say
        that the heart of the tower itself is there.
      </p>
      <p>
        The RCS Tower is not only a symbol of the order's strength and wisdom,
        but also a place where its members can relax and unwind after a busy
        day. The Nano bar is located here, where RCS members gather in an
        informal setting, communicate, and celebrate their successes,
        maintaining a spirit of unity and cooperation.
      </p>
      <div className={styles.image}>
        <Image src={img2} alt="hero" sizes="100%" priority />
      </div>
      <p>
        The highest point of the tower is the exit to the surface of the earth.
        A gateway to a hostile, dangerous world that was once the world of
        humans. This exit is carefully guarded and is only accessible with the
        approval of the RCS Council or the Creators for conducting
        reconnaissance and other missions. Daredevils from among the elite RCS
        researchers can go to the surface to carry out assignments given to them
        for the benefit of the entire Ethereum.
      </p>
      <div className={styles.image}>
        <Image src={img3} alt="hero" sizes="100%" priority />
      </div>
      <p>
        The "Mother Tower" of RCS is a place where wisdom, knowledge, art and
        technology merge. Her presence empowers Ethereon and RCS with strength
        and inspiration, allowing them to realize their wildest dreams and
        ambitions. She embodies all the beauty and power of Ethereon, where
        humans and nanites intertwine in harmony.
      </p>
      <div className={styles.image}>
        <Image src={img5} alt="hero" sizes="100%" priority />
      </div>
    </div>
  );
};

export default Tower;
