import { Component } from "react";
import "./Content.css";

class ContentData extends Component {
  render() {
    return (
      <div className="one">
        <div className="one-text">
          <h2><a href={this.props.headLink} target="_blank">{this.props.heading}</a></h2>
          <a href={this.props.textlink} target="_blank">{this.props.text}</a>
        </div>

        <div className={this.props.cName}>
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default ContentData;