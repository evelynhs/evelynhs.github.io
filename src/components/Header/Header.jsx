import './Header.css';

function Header(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt='headerimg' src={props.headerImg}/>
      </div>

      <div className="header-text">
        <h1>{props.title}</h1>

        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Header;