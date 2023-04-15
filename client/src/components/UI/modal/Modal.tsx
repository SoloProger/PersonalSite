import { ModalProps } from "../../../types/ui/modal/modal";
import classes from "./Modal.module.css";

export default function Modal({ children, visible, setVisible }: ModalProps) {
  const rootClasses = [classes.modal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modal__content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}