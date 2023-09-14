import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Projects () {
  return (
    <>
      <NavBar/>
      <Header
        cName="header"
        headerImg="src/assets/limewash.jpeg"
        title="projects"
        text=""
      />

      <Content
        headings="some projects i've done :)"
        cHeading="basic.ify"
        cText="web app that allows spotify users to see how unique their music taste is."
        hLink="https://paulresmer.github.io/basic.ify/"
        imgs="hides"
      />

      <Content
        cHeading="Nest.rec"
        cText="security app that uses CV to recognize and log detected human figures using the Google Nest camera."
        hLink="https://github.com/evelynhs/Nest.rec/"
        imgs="hides"
      />

      <Content
        cHeading="TagAlong"
        cText="web app that allows college students to join long-distance trips through rideshare hosts. (WIP)"
        hLink="https://github.com/paulresmer/TagAlong/"
        imgs="hides"
      />
    </>
  )
}

export default Projects;