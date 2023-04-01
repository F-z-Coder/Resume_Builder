import Interest from "./Content_Component/Interest";
import Skills from "./Content_Component/Skills";
import Education from "./Content_Component/Education";
import Experience from "./Content_Component/Experience";
import Extracurricular from "./Content_Component/Extracurricular";
function Content() {
  return (
    <div class="stuff">
      <br />
      <br />
      <h1>Resume</h1>
      <h2>Emily</h2>
      <hr />
      <br />
      <Interest />
      <Skills />
      <Education />
      <Experience />
      <Extracurricular />
    </div>
  );
}
export default Content;
