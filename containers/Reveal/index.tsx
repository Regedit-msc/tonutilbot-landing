/* eslint-disable @next/next/no-img-element */
"use client";
import { RevealType } from "@types";
import styles from "./index.module.css";
import Caret from "@assets/caret.svg";
import { useState } from "react";

export const Reveal = ({ data }: { data: RevealType }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={styles.reveal__container}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className={styles.reveal__container__title}>
        <p>{data.title}</p>
        <img
          src={Caret.src}
          alt="caret"
          loading="lazy"
          className={`${styles.caret} ${open ? styles.active : ""}`}
        />
      </div>
      <div
        className={`${styles.reveal__container__content} ${
          open ? styles.active : ""
        }`}
      >
        {open && (
          <p>
            <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
          </p>
        )}
      </div>
    </div>
  );
};
