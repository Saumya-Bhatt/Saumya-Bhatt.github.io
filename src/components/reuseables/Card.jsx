import ToggleButton from "./ToggleButton";
import CardHeading from "./CardHeading";
import external from "../../images/icons/external_link.svg";

export default function Card(props) {
  return (
    <div className="card-container">
      <CardHeading heading={props.title} />
      <div className="card">
        {props.resourceList.map((item) => {
          return (
            <div
              rel="noreferrer"
              target="_blank"
              href={item.cardLink}
              className="card-item"
              key={item.cardName}
            >
              {props.requireHeaders ? (
                <div className="card-metadata">
                  <div>{item.metadataLeft}</div>
                  <div>{item.metadataRight}</div>
                </div>
              ) : (
                <></>
              )}
              <a
                rel="noreferrer"
                target="_blank"
                href={item.cardLink}
                style={{ "text-decoration": "none" }}
              >
                <div className="card-item-title">
                  {item.cardName}
                  {/* <img src={external} alt="External Link" className="external-icon" /> */}
                </div>
                <div className="card-summary">{item.cardSummary}</div>
              </a>
              {props.isToggleRequired ? (
                <ToggleButton asList={props.asList} data={item.toggleData} />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
