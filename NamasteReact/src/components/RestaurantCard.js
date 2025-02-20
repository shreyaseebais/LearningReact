import { CDN_URL } from "../utils/constants";

const RestautantCard = (props) => {
  const { restoData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restoData.info;
  return (
    <div className="restoCard">
      <img className="restoLogo" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}min</h4>
    </div>
  );
};

export default RestautantCard;
