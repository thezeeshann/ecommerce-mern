const Rating = () => {
  return (
    <div className="px-3 py-3 mt-5 bg-white  h-[200px]">
      <p className="font-semibold">Rating</p>
      <div className="flex flex-row gap-x-3">
        <span>⭐⭐⭐ </span>
        <p className="text-sm">based on 2 reviews.</p>
      </div>
      <hr className="mt-2 border-y-4" />
      <div className="mt-3">
        <div className="flex flex-row justify-between">
          <span className="text-sm">5 start</span>
          <progress value="70" max="100" color="" className="w-3/4" />
          <span className="text-sm">70%</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">4 start</span>
          <progress value="40" max="100" color="" className="w-3/4" />
          <span className="text-sm">40%</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">3 start</span>
          <progress value="0" max="100" color="" className="w-3/4" />
          <span className="text-sm">0%</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">2 start</span>
          <progress value="0" max="100" color="" className="w-3/4" />
          <span className="text-sm">0%</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm">1 start</span>
          <progress value="0" max="100" color="" className="w-3/4" />
          <span className="text-sm">0%</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
