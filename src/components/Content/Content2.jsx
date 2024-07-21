import "./Content2.css"
import ContentData2 from "./ContentData2";

const Content2 = (props) => {
  return (
    <div className="content2">
      <ContentData2
        cName={props.imgs}
        heading={props.cHeading}
        text={props.cText}
        img1={props.cImg1}
        link={props.cLink}
      />
    </div>
  );
};

export default Content2;