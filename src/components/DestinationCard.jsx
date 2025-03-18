const DestinationCard = ({dest}) => {
  return (
    <div>
      <h1>{dest.name}</h1>
      <h1>{dest.location}</h1>
      <h1>{dest.image}</h1>
      <h1>{dest.description}</h1>
      <h1>{dest.price}</h1>
    </div>
  )
}

export default DestinationCard
