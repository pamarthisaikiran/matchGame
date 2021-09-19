import './index.css'

const Header = props => {
  const {score, time} = props

  return (
    <nav className="bg-nav">
      <ul className="ul">
        <li>
          <img
            className="nav-img"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          />
        </li>
        <li className="scr-tim">
          <p className="nav-score">
            Score: <span className="span">{score}</span>
          </p>
          <img
            className="clock-img"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="nav-para span">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
