import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../context";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device}></DeviceItem>
      ))}
    </Row>
  );
});
export default DeviceList;
