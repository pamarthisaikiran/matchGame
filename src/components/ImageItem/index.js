import './index.css'

const ImageItem = props => {
  const {imgDetails, onClick} = props
  const {id, imageUrl, thumbnailUrl, category} = imgDetails

  const click = () => {
    onClick(id)
  }

  return (
    <li className="eachImage" onClick={click}>
      <button className="nb">
        <img alt="thumbnail" className="imgs" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageItem
