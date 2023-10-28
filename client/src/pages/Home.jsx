import bgOne from "../assets/banner-2 (1).jpg";
import bgTwo from "../assets/banner-5.jpg";
import bgThree from "../assets/banner-3.jpg";
import bgFour from "../assets/banner-6.jpg";

const Home = () => {
  return (
    <>
      <section className="w-[80%] mx-auto mt-7 mb-10">
        <div className=" flex flex-row items-center justify-center gap-5 w-full ">
          <div className="flex flex-col gap-8 w-[25%] ">
            <img src={bgOne} alt="" />
            <img src={bgTwo} alt="" />
          </div>
          <div className="w-[50%]">
            <img src={bgThree} alt="" />
            {/* <img src={bgTwo} alt=""  /> */}
          </div>
          <div className="flex flex-col gap-7 w-[25%]">
            <img src={bgOne} alt="" />
            <img src={bgFour} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
