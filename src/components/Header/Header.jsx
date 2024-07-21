import "./Header.css"

function Header (props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="headerImg" src={props.headerImg}/>

        <div className="header-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  )
}

export default Header;