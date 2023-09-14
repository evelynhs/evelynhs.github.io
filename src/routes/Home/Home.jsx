import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Home () {
  return (
    <>
      <NavBar/>
      <Header
        cName="header"
        headerImg="src/assets/limewash.jpeg"
        title="home"
        text="more things to come :)"
      />
      <Content
        headings="about me:"
        text1="computing @tamu '25"
        text2="seeking opportunities for 2024 summer and beyond :)"

        cHeading="music enjoyer"
        cText="spotify"
        cLink="https://open.spotify.com/user/biatp2k4mglkw7xlhevxi1ek5?si=27e42ecb909747a1"
        imgs="image"
        cImg1="src/assets/kiki.png"
        cImg2="src/assets/kiki.png"
      />
    </>
  )
}

export default Home;