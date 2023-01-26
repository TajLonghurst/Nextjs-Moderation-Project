import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MobileNav from "./MobileNav";

interface Items {
  id: string;
  title: string;
  href: string;
}

export interface MobileNavProps {
  navItems: Items[];
}

const NavigationModal: React.FC<MobileNavProps> = (props) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("MobileNav");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? ReactDOM.createPortal(<MobileNav navItems={props.navItems} />, ref.current)
    : null;
};

export default NavigationModal;
