import React from "react";
import classes from "./DropdownItems.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
import { signIn } from "next-auth/react";

interface DropdownItemsProps {}

const DropdownItems: React.FC<DropdownItemsProps> = (props) => {
  const Providers = [
    {
      id: "p1",
      provider: "google",
      name: "Google",
    },
    {
      id: "p2",
      provider: "discord",
      name: "Discord",
    },
    {
      id: "p3",
      provider: "github",
      name: "GitHub",
    },
  ];

  return (
    <ul className={classes.providersList}>
      {Providers.map((authProvider) => {
        return (
          <Button onClick={() => signIn(authProvider.provider)} type={"button"}>
            <li className={classes.providerItems} key={authProvider.id}>
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
    </ul>
  );
};

export default DropdownItems;
