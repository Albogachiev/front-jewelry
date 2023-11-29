const Info = ({title, discription,img,butName,but}) => {
  return (
    <div>
      <div alt='data' className='cartEmpty'>
        <img alt='data' src={img} />
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
