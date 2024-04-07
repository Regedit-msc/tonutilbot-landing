import { RevealType } from "@types";
import styles from "./index.module.css";
import { Reveal } from "@containers/Reveal";

export const RevealGroup = ({ config }: { config: RevealType[] }) => {
  return (
    <div className={styles.reveal__group}>
      {config.map((item, idx) => {
        return <Reveal data={item} key={idx} />;
      })}
    </div>
  );
};
