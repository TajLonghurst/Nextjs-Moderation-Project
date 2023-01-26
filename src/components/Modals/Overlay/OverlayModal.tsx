import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

export interface OverlayProps {
  onClick: () => void;
}

const OverlayModal: React.FC<OverlayProps> = (props) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("Overlay");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? ReactDOM.createPortal(<Overlay onClick={props.onClick} />, ref.current)
    : null;
};

export default OverlayModal;
