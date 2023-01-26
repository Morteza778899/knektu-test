import { Button, Modal } from "antd";
import { FC } from "react";
import Inputs from "./Inputs";
import Title from "./Title";

interface Props {
  modalCode: number;
  setModalCode: React.Dispatch<React.SetStateAction<number>>;
}

const ModalTwo: FC<Props> = ({ modalCode, setModalCode }) => {
  return (
    <Modal
      closable={false}
      centered
      open={modalCode === 2}
      onCancel={() => setModalCode(0)}
      footer={null}
      className="min-w-[1100px] my-8"
    >
      <Title setModalCode={setModalCode} />
      <Inputs />
      <Button
        onClick={() => setModalCode(0)}
        type="primary"
        className="w-full h-[fit-content] rounded text-[20px] py-4 mt-6"
      >
        Save
      </Button>
    </Modal>
  );
};
export default ModalTwo;
