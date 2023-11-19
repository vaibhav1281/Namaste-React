


const ShimmerUI = () => {
    const renderShimmerBlock = (key) => (
        <div key={key} className="w-[270px] h-[290px] flex flex-col">
          <div className="w-[275px] h-[275px] rounded-xl bg-gray-200 m-2 p-2"></div>
          <div className="w-[240px] h-[18px] bg-gray-200 m-1 rounded-lg"></div>
          <div className="w-[200px] h-3 bg-gray-200 m-1 rounded-lg"></div>
          <div className="w-[100px] h-3 bg-gray-200 m-1 rounded-lg"></div>
        </div>
      );
    
      const shimmerBlocks = new Array(8).fill(null).map((_, index) => renderShimmerBlock(index));
    
      return (
        <div className="w-full mt-9 justify-between items-center">
          <div className="w-9/12 flex flex-wrap mx-auto gap-4 animate-pulse">
            {shimmerBlocks}
          </div>
        </div>
      );
}

export default ShimmerUI