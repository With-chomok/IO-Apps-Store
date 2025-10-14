
const DisplayInstallCard = ({p, handleRemove}) => {

    return (
        <div>
            <div className="md:flex items-center justify-between p-6 m-6 bg-base-100 rounded-box shadow-lg ">
            <div className="flex gap-3  items-start">
              <img className="size-20 rounded-box" src={p.image} />
              <div className="space-y-6 ">
                <h1 className="text-[#001931] ml-3 font-medium text-[20px]">
                  {p.title}
                </h1>
                <div className="flex items-center md:gap-3 justify-center">
                  <div className="flex justify-center items-center ml-3">
                    <i className="fa-solid fa-download bg-gradient-to-r from-[#54CF68] to-[#00827A] bg-clip-text text-transparent md:mr-1"></i>
                    <h1 className=" text-base text-[#001931]">{p.downloads}</h1>
                  </div>
                  <div className="flex justify-center items-center ml-3">
                    <i className="fa-solid fa-star md:mr-1 text-[#FF8811]"></i>
                    <h1 className=" text-base text-[#001931]">{p.ratingAvg}</h1>
                  </div>

                  <div className="ml-3">
                    <h1 className="text-base text-[#627382] ">{p.size} MB</h1>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={()=> handleRemove(p.id)}  className="btn bg-[#00D390] text-white mt-7 md:mt-0 w-full md:w-auto">
              Uninstall
            </button>
          </div>
        </div>
    );
};

export default DisplayInstallCard;