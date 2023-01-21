import React, { Fragment, useContext } from "react";
import classes from "./Dropdown.module.scss";
import { signIn } from "next-auth/react";
import { type AppProps } from "next/app";
import Button from "../Button/Button";
import Image from "next/image";
import UiContentContext from "../../store/ui-Content";

interface DropdownProps {
  providers: AppProps;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const uiContextCtx = useContext(UiContentContext);
  return (
    <Fragment>
      {uiContextCtx.dropdownState && (
        <div className={classes.dropdownBody}>
          <div className={classes.dropdownContent}>
            {Object.values(props.providers).map((provider) => (
              <div className={classes.providersList} key={provider.name}>
                <Button onClick={() => signIn(provider.id)}>
                  <div className={classes.providerItems}>
                    <Image
                      src={`/assets/images/${provider.id}.svg`}
                      alt={provider.id}
                      width={400}
                      height={400}
                      className={classes.providerImg}
                    />
                    {provider.name}
                    <Image
                      src={`/assets/icons/ArrowRightBlue.svg`}
                      alt={"ArrowIcon"}
                      width={400}
                      height={400}
                      className={classes.icon}
                    />
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dropdown;
