import { Modal } from "antd";
import { FC } from "react";

interface Props {
  modalCode: number;
  setModalCode: React.Dispatch<React.SetStateAction<number>>;
}

const ModalFour: FC<Props> = ({ modalCode, setModalCode }) => {
  return (
    <Modal         centered open={modalCode === 4} onCancel={() => setModalCode(0)}>
      this is a two
    </Modal>
  );
};
export default ModalFour;
