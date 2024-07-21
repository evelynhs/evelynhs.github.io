import { Component } from "react";
import "./Content.css";

class ContentData extends Component {
  render() {
    return (
      <div className="cont">
        <div className={this.props.cName}>
          <img alt="img" src={this.props.img1} />
        </div>
        
        <div className="cont-text">
          <h2><a>{this.props.heading}</a></h2>
          <p>{this.props.text}</p>
          <p>{this.props.text2}</p>
          <p>{this.props.text3}</p>
        </div>
      </div>
    );
  }
}

export default ContentData;