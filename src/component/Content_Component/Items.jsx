function Items({ itemname, itemlist }) {
  const itemcomponent = itemlist.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <>
      <p className="head">{itemname}</p>
      <ul>{itemcomponent}</ul>
    </>
  );
}
export default Items;
