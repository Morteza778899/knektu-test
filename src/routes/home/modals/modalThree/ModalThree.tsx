import { Modal } from "antd";
import { FC } from "react";

interface Props {
  modalCode: number;
  setModalCode: React.Dispatch<React.SetStateAction<number>>;
}

const ModalThree: FC<Props> = ({ modalCode, setModalCode }) => {
  return (
    <Modal         centered open={modalCode === 3} onCancel={() => setModalCode(0)}>
      this is a two
    </Modal>
  );
};
export default ModalThree;
