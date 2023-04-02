import Items from "./Items";
function Experience({ experience }) {
  return (
    <>
      {experience.length > 0 && (
        <Items itemname="Experience" itemlist={experience} />
      )}
    </>
  );
}
export default Experience;
