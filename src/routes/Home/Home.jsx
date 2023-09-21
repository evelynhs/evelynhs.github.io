import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

function Home () {
  return (
    <>
      <NavBar/>
      <Header
        cName="header"
        headerImg="https://t3.ftcdn.net/jpg/05/00/51/30/360_F_500513060_UuVA3u7iqh3Mjvgq8NSrHfQeFGufJtjr.jpg"
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
        cImg1="https://wallpapers.com/images/hd/jiji-cat-900-x-1272-wallpaper-5ga7oditswb1oxth.jpg"
        cImg2="https://summermade.com/cdn/shop/products/LR_Mr-Maria-first-light_Miffy-1A.jpg?v=1593298266&width=3733"
      />
    </>
  )
}

export default Home;