import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import productOne from "../../assets/products/MF-1-186-116._SY116_CB636110853_.jpg";
import productTwo from "../../assets/products/MF-2-186-116._SY116_CB636110853_.jpg";
import productThree from "../../assets/products/MF-3-186-116._SY116_CB636110853_.jpg";
import productFour from "../../assets/products/MF-4-186-116._SY116_CB636110853_.jpg";
import productFive from "../../assets/products/1x_Desktop_Quad_card_w_title_-_Card_1._SY116_CB572041232_.jpg"
import productSix from "../../assets/products/PC_QC_186x116_1_Kitchen_Week52_2._SY116_CB571434851_.jpg"
import productSeven from "../../assets/products/PC_QC_186x116_1_WK04._SY116_CB583034021_.jpg"
import productEight from "../../assets/products/PC_QC_186x116__Kitchen_WK52_001._SY116_CB586255880_.jpg"
import productNine from "../../assets/products/watch.jpg"

const ProductsCategory = () => {
  return (
    <section className="flex flex-col mx-auto mb-10 font-Poppins mt-7">
      <div className="flex flex-row items-center justify-between gap-x-5">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-semibold font-Poppins"
            >
              Up to 60% off | Styles for men
            </Typography>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-3 ">
                <img src={productOne} alt="" className="w-[50%] h-auto" />
                <img src={productTwo} alt="" className="w-[50%] h-auto" />
              </div>
              <div className="flex flex-row gap-x-3">
                <img src={productThree} alt="" className="w-[50%] h-auto" />
                <img src={productFour} alt="" className="w-[50%] h-auto" />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <p className="text-sm cursor-pointer hover:text-light-blue-500">Shop Now</p>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-semibold font-Poppins"
            >
              Starting ₹199 | Brands & more
            </Typography>
            <Typography>
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-3 ">
                  <img src={productSix} alt="" className="w-[50%] h-auto" />
                  <img src={productSeven} alt="" className="w-[50%] h-auto" />
                </div>
                <div className="flex flex-row gap-x-3">
                  <img src={productEight} alt="" className="w-[50%] h-auto" />
                  <img src={productFive} alt="" className="w-[50%] h-auto" />
                </div>
              </div>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <p className="text-sm cursor-pointer hover:text-light-blue-500">See More</p>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-semibold font-Poppins"
            >
              Bluetooth Calling Smartwatch starts at...
            </Typography>
            <Typography>
            <div className="">
                  <img src={productNine} alt="" className="w-[80%] h-auto" />
                
              </div>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <p>See all offers</p>
          </CardFooter>
        </Card>
      </div>
      <div></div>
    </section>
  );
};

export default ProductsCategory;
