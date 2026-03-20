import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './ActivityChart.css'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-tooltip">
        <p>{payload[0]?.value}kg</p>
        <p>{payload[1]?.value}kCal</p>
      </div>
    )
  }
  return null
}

CustomTooltip.propTypes = {
  active:  PropTypes.bool,
  payload: PropTypes.array,
}

function ActivityChart({ data }) {
  return (
    <div className="activity-chart">
      <div className="activity-chart__header">
        <h2 className="activity-chart__title">Activité quotidienne</h2>
        <div className="activity-chart__legend">
          <span><i className="activity-chart__dot dark"></i>Poids (kg)</span>
          <span><i className="activity-chart__dot red"></i>Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '1vw' }}
          />
          <YAxis
            yAxisId="kg"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '1vw' }}
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <YAxis yAxisId="cal" orientation="left" hide />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(196,196,196,0.5)' }}
            position={{ y: -20 }}
            offset={40}
          />
          <Bar yAxisId="kg"  dataKey="kilogram" fill="#282D30" radius={[3,3,0,0]} name="kilogram" barSize={5} />
          <Bar yAxisId="cal" dataKey="calories"  fill="#E60000" radius={[3,3,0,0]} name="calories"  barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day:      PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ActivityChart
