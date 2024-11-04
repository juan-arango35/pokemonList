import {Link} from "react-router-dom";
const CardInitial = ({ tarjetas}) => {
  return (
    <div className="">
      <ul className="flex gap-4 ">
        {tarjetas?.map((tarjeta) => (
            <Link to={tarjeta.route}>
          <li key={tarjeta.title} className="bg-slate-300 p-4 rounded-lg flex flex-col justify-center items-center">
            <p>{tarjeta.title}</p>
            <img src={tarjeta.image} alt={tarjeta.title} width={100} />
            <div className="flex gap-2 flex-wrap mt-3">
              {tarjeta.tags?.map((tag, index) => (
                <span key={`${tag}-${index}`}>{tag}</span>
              ))}
            </div>
          </li>
              </Link>
        ))}
      </ul>
    </div>
  );
};

export default CardInitial;
