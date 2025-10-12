const HomeCardDisplay = ({ data }) => {

    const { image, title, downloads, ratingAvg } = data;
    

  return (
    <div>
      <div className="card bg-base-100  shadow-sm m-5 p-3">
        <figure className="w-full h-[200px] overflow-hidden">
          <img
            src={image}
            alt="Shoes"
            className="p-2 object-contain rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-actions   flex justify-between items-center">
          <button className="btn bg-[#F1F5E8] text-[#00D390]">
            <i className="fa-solid fa-download"></i>
            {downloads}
          </button>
          <button className="btn bg-[#FFF0E1] text-[#FF8811]">
            <i className="fa-solid fa-star-half-stroke"></i>
            {ratingAvg}
          </button>
        </div>
      </div>

    </div>
  );
};

export default HomeCardDisplay;
