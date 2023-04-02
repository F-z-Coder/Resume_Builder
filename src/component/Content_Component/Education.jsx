import Items from "./Items";
function Education({ education }) {
  return (
    <>
      {education.length > 0 && (
        <Items itemname="Education" itemlist={education} />
      )}
    </>
  );
}
export default Education;
