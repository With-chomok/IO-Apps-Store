

const SortingCard = ({order, setOrder}) => {
    
    return (
        <div>
             <label className='form-control'>
                <select value={order} onChange={e => setOrder(e.target.value)} className="px-8 py-2 select select-bordered text-[#627382] font-semibold  shadow hover:scale-105 transition-transform duration-200 outline-none border-none">
            <option value='None'>Sort By Size</option>
            <option value="dowloads-desc">High-&gt;Low</option>
            <option value="dowloads-asc">Low-&gt;High</option>
            
          </select>
             </label>
        </div>
    );
};

export default SortingCard;