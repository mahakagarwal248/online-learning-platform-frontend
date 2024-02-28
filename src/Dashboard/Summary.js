import Courses from "./Courses";
import PendingEvaluations from "./PendingEvaluation";
import Ratings from "./Ratings";
import Tests from "./Test";

function Summary() {
  return (
    <div className="w-full mt-0 mb-0 pb-2 overflow-y-hidden m-auto bg-secondaryExtraLight">
      <div className="flex flex-row h-[45%] mt-2 sm2:flex-wrap sm:flex-wrap xsm:flex-wrap">
        <div className="w-1/2 m-3 p-1 h-full bg-dashboardSectionBg shadow-allSide md:w-full md:h-80 sm2:h-80 sm:h-80 xsm:h-80 sm2:w-full sm:w-full xsm:w-full">
          <Courses />
        </div>
        <div className="w-1/2 m-3 p-1 h-full bg-dashboardSectionBg shadow-allSide md:w-full md:h-80 sm2:h-80 sm:h-80 xsm:h-80 sm2:w-full sm:w-full xsm:w-full">
          <Tests />
        </div>
      </div>
      <div className="flex flex-row h-[45%] mt-4 sm2:flex-wrap sm:flex-wrap xsm:flex-wrap">
        <div className="w-1/2 m-3 p-1 h-full bg-dashboardSectionBg shadow-allSide md:w-full md:h-80 sm2:h-80 sm:h-80 xsm:h-80 sm2:w-full sm:w-full xsm:w-full">
          <PendingEvaluations />
        </div>
        <div className="w-1/2 m-3 h-full bg-dashboardSectionBg shadow-allSide md:w-full md:h-80 sm2:h-80 sm:h-80 xsm:h-80 sm2:w-full sm:w-full xsm:w-full">
          <Ratings />
        </div>
      </div>
    </div>
  );
}

export default Summary;
