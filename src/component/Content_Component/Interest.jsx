import Items from "./Items";
function Interest({ interests }) {
  return (
    <>
      {interests.length > 0 && (
        <Items itemname="Interests" itemlist={interests} />
      )}
    </>
  );
}
export default Interest;
