import MediumContactCard from "./MediumContactCard";
import SmalHealthCard from "./SmalHealthCard";

function PatientCard() {
  return (
    <div className=" h-40 shadow-sm">
      <div className="bg-white rounded-2xl flex">
        <SmalHealthCard />
        <MediumContactCard />
      </div>
    </div>
  );
}
export default PatientCard;
