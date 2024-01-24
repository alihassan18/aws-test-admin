import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import moment from 'moment'

interface BarChartData {
  count: number;
  createdAt: Date;
}

interface Props {
  data: [BarChartData] | any;
}
const BarChartView: React.FC<Props> = ({ data }) => {
const barChartData = data
  ?.map((curr: { count: number; date: Date }) => {
    return {
      count: curr.count,
      date: moment(curr.date).format('MMM DD') // Format as 'YYYY-MM-DD HH:mm' for sorting by both date and time
    };
  }, [])
  .sort((a: { count: number; date: string }, b: { count: number; date: string }) => {
    // Use moment to parse and compare the dates
    const dateA = moment(a.date, 'MMM DD');
    const dateB = moment(b.date, 'MMM DD');

    // Compare the dates and times
    if (dateA.isBefore(dateB)) {
      return -1;
    } else if (dateA.isAfter(dateB)) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(data,'ll',barChartData);
  
  return (
    <div style={{ fontStyle: "italic" }}>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart
          data={barChartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
        >
          <CartesianGrid stroke="#3D3C41" />
          <XAxis dataKey="date" interval={0} angle={-45} height={40} textAnchor="end"/>
          <YAxis />
          <Legend />
          <Bar dataKey="count" fill="#F1C94A" maxBarSize={30}  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartView;
