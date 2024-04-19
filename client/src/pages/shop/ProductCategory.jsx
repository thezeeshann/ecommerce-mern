const ProductCategory = () => {
  return (
    <section className="py-6 w-[80%] mx-auto flex flex-col">
      <div className="flex flex-col gap-y-3 ">
        <p className="text-2xl font-semibold font-Poppins">Shop by Category</p>
        <hr />
      </div>
      <div className="flex flex-col pt-4 gap-y-4">
       <div className="grid grid-cols-4 gap-4">
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>Mobiles, Computers</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>TV, Electronics</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>Men&apos;s Fashion</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>Women&apos;s Fashion</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
       </div>
       <div className="grid grid-cols-4 gap-4">
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>Sports, Fitness</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>Beauty, Health</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>Books</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
          <div className="p-2 border-[1px] flex flex-col gap-y-2 cursor-pointer hover:bg-[#F6F7F8]">
            <p>Home, Kitchen</p>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing ...</span>
          </div>
       </div>
      </div>
    </section>
  );
};

export default ProductCategory;
