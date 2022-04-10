import DatePicker from "sassy-datepicker";
import { TimePicker } from "sassy-datepicker";
import { ChevronUpIcon, PencilAltIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Image from "next/image";
import SmallDoctorCard from "./SmallDoctorCard";
function Aside() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-col bg-white w-[300px] rounded-l-2xl p-5 items-center">
      <DatePicker onChange={(d) => setDate(d)} style={{ border: "none" }} />
      <div className="w-full p-4">
        <div className="flex items-center justify-between mb-5">
          <h1 className=" text-slate-600 text-xl font-semibold ">Doctors</h1>
          <ChevronUpIcon className="h-7 p-2 bg-blue-100 rounded-md text-blue-400" />
        </div>
        <div className="space-y-2">
          <SmallDoctorCard />
          <SmallDoctorCard />
          <SmallDoctorCard />
          <SmallDoctorCard />
        </div>
      </div>
      <div className="h-40 w-full bg-blue-100 rounded-2xl text-blue-900 font-semibold p-5">
        Write a Presctiption
        <p className="text-sm font-normal">to Patient</p>
        <div className="flex items-center">
          <PencilAltIcon className="h-10 rounded-lg text-white bg-blue-500 p-2" />
          <div className="relative h-20 w-20 ml-auto ">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/504/504079.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aside;
