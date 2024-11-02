import {Link} from "react-router-dom";
const CardInitial = ({ tarjetas}) => {
  return (
    <div>
      <ul className="flex gap-4">
        {tarjetas?.map((tarjeta) => (
          <li key={tarjeta.title} className="bg-slate-400">
            <p>{tarjeta.title}</p>
            <Link to={tarjeta.route}>
            <img src={tarjeta.image} alt={tarjeta.title} width={100} />
            </Link>
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
