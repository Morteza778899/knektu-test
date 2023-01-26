import Card from "./Card";
import Title from "./Title";

const Home = () => {
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
          <Card step={step} index={index} />
        ))}
      </div>
    </>
  );
};
export default Home;
