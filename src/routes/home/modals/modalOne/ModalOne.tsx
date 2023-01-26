import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";
import { CloseIcon } from "../../../../asset/icons/CustomIcons";

interface Props {
  modalCode: number;
  setModalCode: React.Dispatch<React.SetStateAction<number>>;
}

const ModalOne: FC<Props> = ({ modalCode, setModalCode }) => {
  return (
    <Modal
      closable={false}
      centered
      open={modalCode === 1}
      onCancel={() => setModalCode(0)}
      footer={null}
    >
      <div className="border-solid border-0 border-b-2 border-gray-br">
        <div className="flex justify-between">
          <h3 className="text-[30px] font-['AvenirBlack']">
            Add Additional Info
          </h3>
          <CloseIcon
            onClick={() => setModalCode(0)}
            className="text-default-txt w-[45px] h-[45px] cursor-pointer"
          />
        </div>
      </div>
      <div className="border-solid border-0 border-b-2 border-gray-br py-8">
        <h5 className="text-[22px] font-['AvenirHeavy'] text-primary-txt mb-4">
          Profile Bio
        </h5>
        <TextArea
          maxLength={100}
          style={{ height: 170, resize: "none" }}
          placeholder="Type here... &#10;.&#10;.&#10;(Example:<br/> My name is Mr Kivutha, I am a qualified tutor with 10 year experience specialising in Math. I have tutored in many institutions both private and public."
        />
      </div>
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
export default ModalOne;
