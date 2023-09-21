import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Projects () {
  return (
    <>
      <NavBar/>
      <Header
        cName="header"
        headerImg="https://t3.ftcdn.net/jpg/05/00/51/30/360_F_500513060_UuVA3u7iqh3Mjvgq8NSrHfQeFGufJtjr.jpg"
        title="projects"
        text=""
      />

      <Content
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