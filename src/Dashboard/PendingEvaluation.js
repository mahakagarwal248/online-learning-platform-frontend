import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TableComp from "../components/Table";

const pendingTests = [
  {
    title: "Test Title",
    learnerId: "401",
    submittedOn: "04-10-2001",
    link: "www.google.com",
  },
  {
    title: "Test Title",
    learnerId: "402",
    submittedOn: "04-10-2001",
    link: "www.google.com",
  },
  {
    title: "Test Title",
    learnerId: "403",
    submittedOn: "04-10-2001",
    link: "www.google.com",
  },
  {
    title: "Test Title",
    learnerId: "404",
    submittedOn: "04-10-2001",
    link: "www.google.com",
  },
  {
    title: "Test Title",
    learnerId: "405",
    submittedOn: "04-10-2001",
    link: "www.google.com",
  },
];
function PendingEvaluations() {
  const handleEditClick = () => {
    window.alert("Clicked - pendingEvaluations - 38");
  };

  const styles = {
    textAlign: "left",
    background: "transparent",
  };

  const tableObj = {
    data: pendingTests,
    fieldsToExclude: ["learnerId", "link"],
    styles,
    action: <span className="text-secondaryDark underline">View Detail</span>,
    clickAction: handleEditClick,
  };
  return (
    <div className="pt-1 pb-0 h-full overflow-y-scroll">
      <p className="text-xl text-center text-secondaryDark font-bold mb-4">
        Pending Evaluations
      </p>
      {pendingTests.length === 0 ? (
        <div className="w-full m-auto justify-center h-4/5 flex items-center ">
          <div className="flex flex-row ml-2 justify-center items-center">
            <p className="text-lg items-center">
              <SentimentSatisfiedAltIcon className="mr-2" fontSize="medium" />{" "}
              Hurray! You have no pending tests to evaluate
            </p>
          </div>
        </div>
      ) : (
        <TableComp className="h-full" tableObj={tableObj} />
      )}
    </div>
  );
}

export default PendingEvaluations;
