import Items from "./Items";
function Skills({ skills }) {
  return (
    <>{skills.length > 0 && <Items itemname="Skills" itemlist={skills} />}</>
  );
}
export default Skills;
