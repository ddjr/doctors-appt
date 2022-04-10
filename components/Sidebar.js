import {
  ClipboardCheckIcon,
  ClockIcon,
  CogIcon,
  CurrencyDollarIcon,
  IdentificationIcon,
  InformationCircleIcon,
  TruckIcon,
} from "@heroicons/react/outline";
function Sidebar() {
  return (
    <div className="bg-blue-500 h-full w-20 rounded-3xl flex flex-col justify-between p-5">
      <div className="relative text-white space-y-4">
        <ClockIcon />
      </div>
      <div className="relative text-white space-y-4">
        <ClipboardCheckIcon />
        <ClockIcon />
        <CurrencyDollarIcon />
        <IdentificationIcon />
        <TruckIcon />
      </div>
      <div className="relative text-white space-y-4">
        <CogIcon />
        <InformationCircleIcon />
      </div>
    </div>
  );
}
export default Sidebar;
