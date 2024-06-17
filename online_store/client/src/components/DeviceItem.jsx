import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={import.meta.env.VITE_API_URL + device.img}
        />
        <div className="d-flex justify-content-between align-items-center text-black-50">
          <div>Samsung...</div>
          <div className="d-flex align-items-center mt-1">
            <div>{device.rating}</div>
            <Image src={star} width={18} height={18} />
          </div>
        </div>
        <div> {device.name} </div>
      </Card>
    </Col>
  );
};
export default DeviceItem;
