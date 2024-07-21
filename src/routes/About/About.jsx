import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Intro from '../../components/Intro/Intro';
import Content from '../../components/Content/Content';
import './About.css';

function About (props) {
  return (
    <>
      <Intro handleGetStartedClick={props.handleGetStartedClick} isLoginPageVisible={props.isLoginPageVisible}/>
      <NavBar/>
      <div className="aboutme">
        <Content
          cHeading="Hello!"
          cText="I'm Evelyn, a junior pursing double degrees in Computer Science and Mathematics at Texas A&M University."
          cText2="Aside from full-stack web development, I'd like to explore combinatorics, optimization algorithms, and get into quant development."
          cText3="In my free time, I enjoy fashion, dancing, rock climbing, and playing word hunt😎."
          imgs="cont-image"
          cImg1="src/assets/evelyn.CR3.jpg"
        />
        <div className="list">
          <div>
          <h2>What I like</h2>
          <p><a href="https://open.spotify.com/user/biatp2k4mglkw7xlhevxi1ek5?si=35f6f8a902e5484d" target="_blank">Music</a></p>
          <p><a href="https://redpandanetwork.org/Home" target="_blank">Red Pandas</a></p>
          <p>Rubik's cubes !!</p>
          </div>

          <div>
          <h2>What I'm learning</h2>
          <p>Fashion design</p>
          <p>中文</p>
          <p>App Dev</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;