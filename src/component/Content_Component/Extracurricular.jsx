import Items from "./Items";

function Extracurricular({ extracurriculars }) {
  return (
    <>
      {extracurriculars.length > 0 && (
        <Items itemname="Extracurricular" itemlist={extracurriculars} />
      )}
    </>
  );
}
export default Extracurricular;
