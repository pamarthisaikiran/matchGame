import './index.css'

const Random = props => {
  const {imgDetails} = props
  const {imageUrl} = imgDetails

  return <img src={imageUrl} />
}

export default Random
