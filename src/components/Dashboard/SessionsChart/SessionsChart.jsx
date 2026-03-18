import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'
import './SessionsChart.css'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="sessions-tooltip">
        <p>{payload[0]?.value} min</p>
      </div>
    )
  }
  return null
}

CustomTooltip.propTypes = {
  active:  PropTypes.bool,
  payload: PropTypes.array,
}

const CustomCursor = ({ points, width, height }) => {
  const { x } = points[0]
  return (
    <Rectangle
      fill="rgba(0,0,0,0.1)"
      x={x}
      y={0}
      width={width - x + 60}
      height={height + 60}
    />
  )
}

CustomCursor.propTypes = {
  points: PropTypes.array,
  width:  PropTypes.number,
  height: PropTypes.number,
}

function SessionsChart({ data }) {
  return (
    <div className="sessions-chart">
      <h2 className="sessions-chart__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 0, right: 30, left: 10, bottom: 10 }}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
            interval={0}
          />
          <YAxis hide domain={['dataMin - 10', 'dataMax + 30']} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: 'white', strokeWidth: 3, stroke: 'rgba(255,255,255,0.4)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day:           PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default SessionsChart
