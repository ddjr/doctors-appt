import Image from "next/image";

function SmallDoctorCard() {
  return (
    <div className="flex ">
      <div className="relative h-10 w-10 mr-2">
        <Image
          src="https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="">
        <h2 className="text-slate-500 font-semibold">Dr. Clarence Hamilton</h2>
        <h4 className="text-slate-400 ">Therapist</h4>
      </div>
    </div>
  );
}
export default SmallDoctorCard;
