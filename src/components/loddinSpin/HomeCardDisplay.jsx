
const HomeCardDisplay = ({data}) => {
    
// {
//     "id": 8,
//     "image": "https://play-lh.googleusercontent.com/_hI4QO4ewXfykBPsj8W5xR6XCrGlY1Gf40VJ6sGi3z6XTRTk0FBD4SGht9KujH5kQQ=w240-h480-rw",
//     "title": "Telegram",
//     "companyName": "Telegram FZ-LLC",
//     "description": "A fast and secure messaging app that offers privacy, large file sharing, and cloud sync.",
//     "size": 35,
//     "reviews": 8300000,
//     "ratingAvg": 4.4,
//     "downloads": 1000000000,
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 300000
//         },
//         {
//             "name": "2 star",
//             "count": 150000
//         },
//         {
//             "name": "3 star",
//             "count": 500000
//         },
//         {
//             "name": "4 star",
//             "count": 2500000
//         },
//         {
//             "name": "5 star",
//             "count": 5300000
//         }
//     ]
// }
    
    return (
        <div>
            <div className="card bg-base-100  shadow-sm m-5 p-3">
  <figure className="w-full h-[200px] overflow-hidden">
    <img
      src={data.image}
      alt="Shoes"
      className="p-2 object-contain rounded-xl"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
  </div>
  <div className="card-actions   flex justify-between items-center">
    <button className="btn bg-[#F1F5E8] text-[#00D390]"><i class="fa-solid fa-download"></i>{data.downloads}</button>
    <button className="btn bg-[#FFF0E1] text-[#FF8811]"><i class="fa-solid fa-star-half-stroke"></i>{data.ratingAvg}</button>
  </div>
</div>;
        </div>
    );
};

export default HomeCardDisplay;