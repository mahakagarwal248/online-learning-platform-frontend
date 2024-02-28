import "./Cards.css";

function Cards({ cardData }) {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a href="/" className="ag-courses-item_link">
            <div
              className="ag-courses-item_bg"
              style={{ background: cardData?.bgColor }}
            ></div>

            <div className="ag-courses-item_title">{cardData?.title}</div>
            <div className="ag-courses-item_desc">{cardData?.shortDesc}</div>

            <div className="ag-courses-item_date-box">
              Start:
              <span className="ag-courses-item_date">04.11.2022</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
