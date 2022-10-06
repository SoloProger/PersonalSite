import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
}
