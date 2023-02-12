import React, { Fragment } from "react";
import classes from "./Registering.module.scss";
import { signIn } from "next-auth/react";
import Button from "../../../UI/Button/Button";
import Image from "next/image";
import { Providers } from "../../../UI/Dropdown/DropdownItems";

interface RegisteringProps {
  onClickBackBtn: () => void;
}

const Registering: React.FC<RegisteringProps> = (props) => {
  return (
    <div className={classes.navList}>
      <ul className={classes.providersList}>
        {Providers.map((items) => {
          return (
            <Button
              key={items.id}
              onClick={() => signIn(items.provider)}
              type={"button"}
              icon={"arrow"}
            >
              <li className={classes.providerItems}>
                <Image
                  src={`/assets/images/${items.provider}.svg`}
                  alt={`${items.name}Auth`}
                  width={25}
                  height={25}
                  className={classes.providerImg}
                />
                {items.name}
              </li>
            </Button>
          );
        })}
      </ul>
      <div className={classes.btnPostion}>
        <Button type="button" onClick={props.onClickBackBtn} icon={"arrow"}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Registering;
