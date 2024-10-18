import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
          {/* <Image src={"/images/icon-check.svg"} alt="check" width={100} height={100}/>
          <Image src={"/images/favicon-32X32.png"} alt="check" width={100} height={100}/>
          
          <Image src={"/images/pattern-circles.svg"} alt="check" width={100} height={100}/> */}
          <Pricing />
      </div>
    </>
  );
}
