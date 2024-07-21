import NavBar from '../../components/NavBar/NavBar';
import Intro from '../../components/Intro/Intro';
import Content2 from '../../components/Content/Content2';

function Projects (props) {
  return (
    <>
      <Intro handleGetStartedClick={props.handleGetStartedClick} isLoginPageVisible={props.isLoginPageVisible}/>
      <NavBar/>
      <h1 style={{paddingTop: "9rem"}}>A few projects I've done!</h1>
      <Content2
        cHeading="nest.rec"
        cText="A security app that uses AI to recognize and log detected human figures. Compatible with Google Nest®."
        imgs="cont2-image"
        cImg1="src/assets/kiki.png"
        cLink="https://github.com/evelynhs/Nest.rec/"
      />
      <Content2
        cHeading="basic.ify"
        cText="A web app that allows spotify users to see how unique their music taste is."
        imgs="cont2-image"
        cImg1="src/assets/spotify.png"
        cLink="https://paulresmer.github.io/basic.ify/"
      />
      
      <Content2
        cHeading="Web Scraping App"
        cText="Monitor various website changes, allowing users to set preference and receive real-time notifs."
        imgs="cont2-image"
        cImg1="src/assets/github.png"
        cLink="https://github.com/aggie-coding-club/Web-Scraping-Application"
      />
      <Content2
        cHeading="Ready Routes"
        cText="Generates closed look running routes using Maps API, traversing safe areas within the user's parameters."
        imgs="cont2-image"
        cImg1="src/assets/logo.png"
        cLink="https://github.com/arnav-g24/ready-routes-application"
      />
      
    </>
  )
}

export default Projects;