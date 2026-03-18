import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import './ScoreChart.css'

function ScoreChart({ score }) {
  const percentage = Math.round(score * 100)

  const data = [
    { value: 100, fill: '#FBFBFB' },
    { value: percentage, fill: '#FF0000' },
  ]

  return (
    <div className="score-chart">
      <h2 className="score-chart__title">Score</h2>
      <div className="score-chart__wrapper">
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart
            data={data}
            startAngle={210}
            endAngle={-150}
            innerRadius={70}
            outerRadius={90}
          >
            <RadialBar dataKey="value" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="score-chart__center">
          <span className="score-chart__percent">{percentage}%</span>
          <span className="score-chart__label">de votre<br />objectif</span>
        </div>
      </div>
    </div>
  )
}

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
}

export default ScoreChart