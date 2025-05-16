const PopWallets = () => {
  return (
    <div className="w-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-6 relative shadow-[20px_20px_30px_rgba(0,0,0,0.07)]">
      {/* Exit Button */}
      <button className="absolute top-5 right-5 flex items-center justify-center bg-transparent hover:fill-black">
        <svg
          height="20px"
          viewBox="0 0 384 512"
          className="fill-gray-400 hover:fill-black"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 
                  86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 
                  0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 
                  0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 
                  406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 
                  0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="w-full flex flex-col gap-1">
        <p className="text-[20px] font-bold text-gray-900">Delete file?</p>
        <p className="font-light text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adi
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full flex justify-center items-center gap-3">
        <button className="w-1/2 h-[35px] rounded-[10px] bg-gray-300 hover:bg-gray-400 font-semibold">
          Cancel
        </button>
        <button className="w-1/2 h-[35px] rounded-[10px] bg-red-400 hover:bg-red-500 text-white font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PopWallets;
