import { Component } from "react";
import "./Content2.css";

class ContentData2 extends Component {
  render() {
    return (
      <div className="cont2">
        <div className={this.props.cName}>
          <img alt="img" src={this.props.img1} />
        </div>
        
        <div className="cont2-text">
          <h2><a href={this.props.link} className="linkname">{this.props.heading}</a></h2>
          <a>{this.props.text}</a>
        </div>
      </div>
    );
  }
}

export default ContentData2;