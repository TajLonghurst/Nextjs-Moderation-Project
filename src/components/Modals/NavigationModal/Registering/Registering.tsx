import React, { Fragment } from "react";
import classes from "./Registering.module.scss";
import { signIn } from "next-auth/react";
import Button from "../../../Button/Button";
import Image from "next/image";
import { Providers } from "../../../Dropdown/DropdownItems";

interface RegisteringProps {
  onClickBackBtn: () => void;
}

const Registering: React.FC<RegisteringProps> = (props) => {
  return (
    <div className={classes.navList}>
      <ul className={classes.providersList}>
        {Providers.map((items) => {
          return (
            <Button key={items.id} onClick={() => signIn(items.provider)} type={"button"}>
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
      <li className={classes.providerItems}>
        <Button type="button" onClick={props.onClickBackBtn}>
          Cancel
        </Button>
      </li>
    </div>
  );
};

export default Registering;
