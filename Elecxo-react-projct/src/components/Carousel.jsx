import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl  mx-auto mt-10 h-[380px]">
      <img
        src="https://img.global.news.samsung.com/in/wp-content/uploads/2023/10/1000x563.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/premium-vector/home-appliances-electronics-store-template-banner-design_958026-99.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}