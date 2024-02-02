type InfoTypes = {
  title:string,
  discription:string,
  img:string,
  butName:string,
  but:() => void
}

const Info:React.FC<InfoTypes> = ({title, discription,img,butName,but}) => {
  return (
    <div>
      <div className='cartEmpty'>
        <img alt='img_cart_empty' src={img} />
        <h2>{discription}</h2>
        <p className=''>{title}</p>
        <button onClick={but}>
           {butName}
        </button>
        </div>
    </div>
  )
}

export default Info
