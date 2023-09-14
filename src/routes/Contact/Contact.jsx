import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Contact () {
  return (
    <>
      <NavBar/>
      <Header
        cName="header"
        headerImg="src/assets/limewash.jpeg"
        title="contact"
        text="where to find me"
      />

      <Content
        headings="hi! feel free to contact me at:"
        cHeading="evelynhs@tamu.edu or 972-210-6368"
        imgs="hides"
      />
    </>
  )
}

export default Contact;