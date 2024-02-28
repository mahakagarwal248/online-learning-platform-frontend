import ShortTextIcon from "@mui/icons-material/ShortText";

export default function SectionHeading({ heading }) {
  return (
    <div className="flex flex-row justify-center w-full m-auto">
      <ShortTextIcon
        className="scale-x-150 text-secondaryDark mr-2"
        style={{
          fontSize: "35px",
          transform: "rotatey(180deg) scalex(1.5)",
        }}
      />
      <p className="text-3xl text-secondaryDark">{heading}</p>
      <ShortTextIcon
        className="scale-x-150 text-secondaryDark ml-2"
        style={{ fontSize: "35px" }}
      />
    </div>
  );
}
