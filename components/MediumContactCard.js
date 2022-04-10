function MediumContactCard() {
  return (
    <div className="flex flex-col flex-grow p-5 space-y-5">
      {/* Top Row */}
      <div className="flex gap-x-5">
        <div>
          <p className="text-slate-400">Phone Number</p>
          <p className="text-slate-500">734-123-4123</p>
        </div>
        <div>
          <p className="text-slate-400">Email</p>
          <p className="text-slate-500">irenefleming@gmail.com</p>
        </div>
        <div>
          <p className="text-slate-400">Passport</p>
          <p className="text-slate-500">000345678</p>
        </div>
      </div>
      <div className="flex gap-x-5">
        <div>
          <p className="text-slate-400">Card Number</p>
          <p className="text-slate-500">4234547491s</p>
        </div>
        <div>
          <p className="text-slate-400">Medical Conditions</p>
          <p className="text-slate-500">
            Allergies, Astma, Coronary Heart Disease
          </p>
        </div>
      </div>
    </div>
  );
}
export default MediumContactCard;
