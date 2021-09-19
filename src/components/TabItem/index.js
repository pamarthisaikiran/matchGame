import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    updateTabId(tabId)
  }

  const style = isActive ? 'color' : 'tab-button'

  return (
    <li>
      <button onClick={onClickButton} className={style} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
