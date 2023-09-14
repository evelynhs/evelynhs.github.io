import "./Content.css"
import ContentData from "./ContentData";

const Content = (props) => {
  return (
    <div className="content">
      <h1>{props.headings}</h1>
      <p>{props.text1}</p>
      <p>{props.text2}</p>

      <ContentData
        cName={props.imgs}
        heading={props.cHeading}
        headLink={props.hLink}
        text={props.cText}
        textlink={props.cLink}
        img1={props.cImg1}
        img2={props.cImg2}
      />
    </div>
  );
};

export default Content;