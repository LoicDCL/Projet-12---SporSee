import PropTypes from 'prop-types'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import './PerformanceChart.css'

function PerformanceChart({ data }) {
  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart data={data} outerRadius={90}>
          <PolarGrid radialLines={false} stroke="white" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Radar
            name="performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
            stroke="transparent"
            dot={false}
            activeDot={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind:  PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default PerformanceChart
