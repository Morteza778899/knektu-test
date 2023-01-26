import { FC } from "react";
import { CloseIcon } from "../../../../asset/icons/CustomIcons";

interface Props {
  setModalCode: React.Dispatch<React.SetStateAction<number>>;
}

const Title: FC<Props> = ({setModalCode}) => {
  return (
    <>
      <div className="border-solid border-0 border-b-2 border-gray-br">
        <div className="flex justify-between">
          <h3 className="text-[30px] font-['AvenirBlack']">
            Add Qualification
          </h3>
          <CloseIcon
            onClick={() => setModalCode(0)}
            className="text-default-txt w-[45px] h-[45px] cursor-pointer"
          />
        </div>
      </div>
      <div className="border-solid border-0 border-b-2 border-gray-br">
        <div className="flex pb-4 pt-6 mr-24">
          <h6 className="text-[20px] font-['AvenirHeavy'] grow">Institution</h6>
          <h6 className="text-[20px] font-['AvenirHeavy'] grow">
            Qualification
          </h6>
          <h6 className="text-[20px] font-['AvenirHeavy'] grow">Level</h6>
        </div>
      </div>
    </>
  );
};
export default Title;
