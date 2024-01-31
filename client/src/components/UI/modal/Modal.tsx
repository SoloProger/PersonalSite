import { ReactNode } from 'react';
import classes from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: ReactNode;
}
export default function Modal({ children, visible, setVisible }: ModalProps) {
  const rootClasses = [classes.modal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.modal__content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
