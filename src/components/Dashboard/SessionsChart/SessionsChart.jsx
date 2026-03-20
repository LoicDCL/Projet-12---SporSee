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
  if (!points || !points[0]) return null
  const { x, y } = points[0]
  console.log('x:', x, 'y:', y, 'width:', width, 'height:', height)
  return (
    <Rectangle
      fill="rgba(0,0,0,0.2)"
      x={x}
      y={0}
      width={width}
      height={450}
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
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 50, right: -15, left: -50, bottom: 10 }}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: '0.8vw' }}
            interval={0}
            tickFormatter={(value) => value === '' ? '' : value}
          />
          <YAxis hide domain={['dataMin - 5', 'dataMax + 20']} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            position={{ y: 50 }}
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
