import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center">
      Coin Symbol : {id}
    </div>
  );
};

export default Detail;
