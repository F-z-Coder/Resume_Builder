import Header from "./Header";
import Footer from "./Footer";
import RightBoder from "./RightBoder";
import LeftBoder from "./LeftBoder";
import Content from "./Content";
import "../main.css";
function App(props) {
  console.log(props);
  return (
    <>
      <Header />
      <LeftBoder />
      <Content {...props} />
      <RightBoder />
      <Footer username={props.username} />
    </>
  );
}
export default App;
