import Image from "next/image";

function SmalHealthCard() {
  return (
    <div className=" h-40 p-5 bg-blue-500 rounded-2xl text-white space-y-5 hover:scale-105 transition transform duration-250 ease-out hover:shadow-lg cursor-pointer">
      <div className="flex flex-row space-x-5">
        <div className="relative h-14 w-14">
          <Image
            src="https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">Irene Fleming</h2>
          <h4 className="text-xs">36 years old</h4>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <div>
          <h2 className="text-lg font-extralight">Height</h2>
          <h4 className="text-xs font-light">185</h4>
        </div>
        <div>
          <h2 className="text-lg font-extralight">Weight</h2>
          <h4 className="text-xs font-light">83</h4>
        </div>
        <div>
          <h2 className="text-lg font-extralight">Blood type</h2>
          <h4 className="text-xs font-light">AB+</h4>
        </div>
      </div>
    </div>
  );
}
export default SmalHealthCard;
