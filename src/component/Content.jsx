import Interest from "./Content_Component/Interest";
import Skills from "./Content_Component/Skills";
import Education from "./Content_Component/Education";
import Experience from "./Content_Component/Experience";
import Extracurricular from "./Content_Component/Extracurricular";
function Content({
  username,
  interests,
  skills,
  education,
  experience,
  extracurriculars,
}) {
  return (
    <div className="stuff">
      <br />
      <br />
      <h1>Resume</h1>
      <h2>{username}</h2>
      <hr />
      <br />
      <Interest interests={interests} />
      <Skills skills={skills} />
      <Education education={education} />
      <Experience experience={experience} />
      <Extracurricular extracurriculars={extracurriculars} />
    </div>
  );
}
export default Content;
