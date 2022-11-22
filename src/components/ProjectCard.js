import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, path }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href= {path} className="cards_item_link" target="_blank" rel="noopener noreffer">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}
