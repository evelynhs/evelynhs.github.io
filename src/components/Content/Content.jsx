import "./Content.css"
import ContentData from "./ContentData";

const Content = (props) => {
  return (
    <div className="content">
      <ContentData
        cName={props.imgs}
        heading={props.cHeading}
        text={props.cText}
        text2={props.cText2}
        text3={props.cText3}
        img1={props.cImg1}
      />
    </div>
  );
};

export default Content;