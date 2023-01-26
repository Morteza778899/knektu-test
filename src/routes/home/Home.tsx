import { useState } from "react";
import Card from "./Card";
import ModalFour from "./modals/modalFour/ModalFour";
import ModalOne from "./modals/modalOne/ModalOne";
import ModalThree from "./modals/modalThree/ModalThree";
import ModalTwo from "./modals/modalTwo/ModalTwo";
import Title from "./Title";

const Home = () => {
  const [modalCode, setModalCode] = useState(0);
  const steps = [
    { title: "Add Bio", text: "Profile Bio", btn: "Add" },
    { title: "Add Qualification", text: "Institutions, Levels", btn: "Add" },
    {
      title: "Add Your Rates",
      text: "Available Now, One-to-One, Group, School",
      btn: "Add",
    },
    { title: "Upload Documents", text: "Dfe, DBS & ID", btn: "Upload" },
  ];
  return (
    <>
      <Title />
      <div className="mt-9 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-7">
        {steps.map((step, index) => (
          <Card step={step} index={index} setModalCode={setModalCode}/>
        ))}
        <ModalOne modalCode={modalCode} setModalCode={setModalCode}/>
        <ModalTwo modalCode={modalCode} setModalCode={setModalCode}/>
        <ModalThree modalCode={modalCode} setModalCode={setModalCode}/>
        <ModalFour modalCode={modalCode} setModalCode={setModalCode}/>
      </div>
    </>
  );
};
export default Home;
