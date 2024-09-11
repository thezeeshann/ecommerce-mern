import { Link } from "react-router-dom";
import productImage from "../assets/placeholder-image.png";

const Home = () => {
  return (
    <>
      <section className="w-[80%] mx-auto mt-7 mb-10">
        <div className="flex flex-col min-h-[100dvh] ">
          <main className="flex-1 ">
            <section className="w-full pt-14">
              <div className="container space-y-10 xl:space-y-16">
                <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
                  <div>
                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                      Discover the Latest Fashion Trends
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      Explore our curated collection of stylish and affordable
                      apparel, accessories, and more.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/shop"
                        className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  <img
                    src={productImage}
                    width="500"
                    height="500"
                    alt="Hero"
                    className="object-cover mx-auto overflow-hidden aspect-square "
                  />
                </div>
              </div>
            </section>

            <section className="w-full py-12 ">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Featured Products
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Check out our latest collection of stylish and high-quality
                    products.
                  </p>
                </div>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 pt-12 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-start justify-between p-4 border rounded-lg shadow-sm cursor-pointer bg-background">
                  <img
                    src={productImage}
                    width="400"
                    height="400"
                    alt="Product"
                    className="object-cover rounded-lg aspect-square"
                  />
                  <div className="flex flex-col items-start justify-between w-full">
                    <h3 className="text-lg font-medium">Shoes</h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between p-4 border rounded-lg shadow-sm cursor-pointer bg-background">
                  <img
                    src={productImage}
                    width="400"
                    height="400"
                    alt="Product"
                    className="object-cover mx-auto overflow-hidden rounded-lg aspect-square"
                  />
                  <div className="flex flex-col items-start justify-between w-full mt-4">
                    <h3 className="text-lg font-medium">Bag</h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between p-4 border rounded-lg shadow-sm cursor-pointer bg-background">
                  <img
                    src={productImage}
                    width="300"
                    height="300"
                    alt="Product"
                    className="object-cover mx-auto overflow-hidden rounded-lg aspect-square"
                  />
                  <div className="flex flex-col items-start justify-between w-full mt-4">
                    <h3 className="text-lg font-medium">perfume</h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between p-4 border rounded-lg shadow-sm cursor-pointer bg-background">
                  <img
                    src={productImage}
                    width="300"
                    height="300"
                    alt="Product"
                    className="object-cover mx-auto overflow-hidden rounded-lg aspect-square"
                  />
                  <div className="flex flex-col items-start justify-between w-full mt-4">
                    <h3 className="text-lg font-medium">Stylish Accessory</h3>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
};

export default Home;
