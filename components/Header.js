import { ArrowNarrowLeftIcon, BellIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Header() {
  return (
    <div className="h-20 bg-white items-center flex p-5 pl-10 justify-between">
      <div className="flex  h-full items-center">
        <div className="relative w-10">
          <ArrowNarrowLeftIcon />
        </div>
        <div className="text-xl font-semibold ml-5">Patient card</div>
      </div>
      <div className="flex space-x-5 items-center">
        <h2 className="text-blue-500">Appointments History +</h2>
        <h2 className="bg-blue-500 text-white py-2 px-4 rounded-md">
          + New Patient
        </h2>
        <div className="relative h-10 w-10 rounded-lg bg-blue-300 text-white p-2">
          <BellIcon className="" />
        </div>
        <div className="relative h-14 w-14">
          <Image
            src="https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
