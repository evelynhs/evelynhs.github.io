import NavBar from '../../components/NavBar/NavBar';
import Intro from '../../components/Intro/Intro';
import EmailForm from '../../components/EmailForm/EmailForm';

function Contact (props) {
  return (
    <>
      <Intro handleGetStartedClick={props.handleGetStartedClick} isLoginPageVisible={props.isLoginPageVisible}/>
      <NavBar/>
      <h1 style={{paddingTop: "9rem"}}>Contact me!</h1>
      <EmailForm/>
    </>
  )
}

export default Contact;