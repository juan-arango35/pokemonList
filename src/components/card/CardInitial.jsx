const CardInitial = ({ tarjetas =[]}) => {
  return (
    <div>
      <ul>
        {tarjetas?.map((tarjeta) => (
          <li key={tarjeta.title}>
            <p>{tarjeta.title}</p>
            <img src={tarjeta.image} alt={tarjeta.title} width={100} />
            <div>
              {tarjeta.tags?.map((tag, index) => (
                <span key={`${tag}-${index}`}>{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardInitial;
