import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { PieChart } from '@mui/x-charts/PieChart';

function Closet () {
  return (
    <>
      <NavBar/>
      <Header
        cName="header"
        headerImg="https://t3.ftcdn.net/jpg/05/00/51/30/360_F_500513060_UuVA3u7iqh3Mjvgq8NSrHfQeFGufJtjr.jpg"
        title="closet wrapped"
        text="closet tracker to see how many times i've worn a certain piece of clothing"
      />

      <div className="pie_category">
        <p>
          this chart tracks how many of each category is worn
        </p>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 5, label: 'tops' },
                { id: 1, value: 4, label: 'bottoms' },
                { id: 2, value: 1, label: 'hoodies' },
                { id: 2, value: 0, label: 'jackets' },
                { id: 2, value: 1, label: 'accessories' },
                { id: 2, value: 1, label: 'shoes' },
              ],
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </>
  )
}

export default Closet;