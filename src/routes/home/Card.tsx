import { Button } from "antd";
import { FC } from "react";

interface Props {
  step: {
    title: string;
    text: string;
    btn: string;
  };
  index: number;
}

const Card: FC<Props> = ({ step, index }) => {
  return (
    <div className="h-[240px] bg-blue-light border border-blue-br border-solid rounded-lg">
      <div className="p-7">
        <h4 className="text-[20px] font-['AvenirHeavy'] text-primary-txt">
          Step {index + 1}
        </h4>
        <h3 className="text-[24px] font-['AvenirHeavy']">{step.title}</h3>
        <p className="text-[20px] whitespace-nowrap overflow-hidden overflow-ellipsis">{step.text}</p>
        <Button className="h-[60px] w-[150px] text-[20px] bg-[#E3F1FA]">
          {step.btn}
        </Button>
      </div>
    </div>
  );
};
export default Card;
