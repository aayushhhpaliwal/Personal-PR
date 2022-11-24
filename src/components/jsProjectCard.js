import { Col } from "react-bootstrap";

export const JsProjectCard = ({ title1, description1, imgUrl1, path1 }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <a href= {path1} className="cards_item_link" target="_blank" rel="noopener noreffer">
    <div className="proj-imgbx">
        <img src={imgUrl1} />
        <div className="proj-txtx">
          <h4>{title1}</h4>
          <span>{description1}</span>
        </div>
      </div>
    </a>
    </Col>
  )
}
