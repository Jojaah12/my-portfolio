import "./BarChart.css";
import chartData from "../../data/chartData";
import BarChartItem from "../BarChartItem/BarChartItem";

const BarChart = () => {
  return (
    <div className="chart-div">
      {chartData.map((item) => (
        <BarChartItem key={item.id} title={item.title} width={item.width} />
      ))}
    </div>
  );
};

export default BarChart;
