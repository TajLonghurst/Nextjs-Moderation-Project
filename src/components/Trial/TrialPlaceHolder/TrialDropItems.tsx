import React from "react";
import classes from "./TrialDropItems.module.scss";
import Button from "../../UI/Button/Button";
import { Providers } from "../../UI/Dropdown/DropdownItems";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const TrialDropItems = () => {
  const { data: userSession } = useSession();
  return (
    <ul className={classes.providersList}>
      {!userSession?.user &&
        Providers.map((authProvider) => {
          return (
            <Button
              key={authProvider.id}
              onClick={() => signIn(authProvider.provider)}
              type={"button"}
              icon={"arrow"}
            >
              <li className={classes.providerItems}>
                <Image
                  src={`/assets/images/${authProvider.provider}.svg`}
                  alt={`${authProvider.name}Auth`}
                  width={400}
                  height={400}
                  className={classes.providerImg}
                />
                {authProvider.name}
              </li>
            </Button>
          );
        })}
      {userSession?.user && (
        <Button onClick={() => signOut()} type={"button"} icon={"arrow"}>
          Sign Out
        </Button>
      )}
    </ul>
  );
};

export default TrialDropItems;
