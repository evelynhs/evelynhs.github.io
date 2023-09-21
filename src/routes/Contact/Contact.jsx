import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Contact () {
  return (
    <>
      <NavBar/>
      <Header
        cName="header"
        headerImg="https://t3.ftcdn.net/jpg/05/00/51/30/360_F_500513060_UuVA3u7iqh3Mjvgq8NSrHfQeFGufJtjr.jpg"
        title="contact"
        text="where to find me"
      />

      <Content
        cHeading="email me !"
        cText="evelynhs@tamu.edu"
        imgs="hides"
      />

      <Content
        cHeading="linkedin"
        hLink="https://www.linkedin.com/in/evelynhsiao/"
        imgs="hides"
      />

      <Content
        cHeading="github"
        hLink="https://github.com/evelynhs"
        imgs="hides"
      />
    </>
  )
}

export default Contact;