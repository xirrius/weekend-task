import "./Sx.css";
const Sx = ({ event }) => {
  const {
    url,
    Event_Start_Date,
    Event_Start_Time,
    Event_End_Date,
    Event_End_Time,
    Event_Detail_Title,
  } = event;
  console.log(event);

  const formatEventDate = (startDate, endDate) => {
    // Create date objects from the input strings
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Extract day, month, and year
    const startDay = start.getDate();
    const endDay = end.getDate();
    const startMonth = start.toLocaleString("en-US", { month: "short" });
    const startYear = start.getFullYear();

    // Compare if the month and year are the same
    if (
      startMonth === end.toLocaleString("en-US", { month: "short" }) &&
      startYear === end.getFullYear()
    ) {
      // Format the string as 'Month Day1 - Day2, Year'
      return `${startMonth} ${startDay} - ${endDay}, ${startYear}`;
    } else {
      // If the month or year differs, you can customize how you'd want to format it.
      // For example:
      return `${startMonth} ${startDay}, ${startYear} - ${end.toLocaleString(
        "en-US",
        { month: "short" }
      )} ${endDay}, ${end.getFullYear()}`;
    }
  };

  return (
    <div className="newSlide">
      <div className="img_Sx">
        <img src={`./img/${url}`} alt="" />
      </div>
      <div className="txt_Sx">
        <h1>
          {" "}
          {Event_Detail_Title || "Lorem ipsum dolor sit amet consectetur."}
        </h1>
        <p>From {formatEventDate(Event_Start_Date, Event_End_Date)}</p>
        <div className="Sx_txt_detail" >
          <p>
            {Event_Start_Time} - {Event_End_Time || "10:00 PM"}
          </p>
          <div className="txt_Sx2">
            <img src="./img/overwhelmed.svg" alt="" />
            <p>Overwhelmed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sx;
