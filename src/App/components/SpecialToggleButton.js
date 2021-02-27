import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const SpecialToggleButton = ({ isActive }) => {
  const [currentState, setCurrentState] = useState(Boolean);

  useEffect(() => {
    setCurrentState(isActive);
  }, [isActive]);

  return currentState
    ? <Button size="sm" variant="danger" onClick={e => setCurrentState(false)}>
      Deactivate
    </Button>
    : <Button size="sm" variant="success" onClick={e => setCurrentState(true)}>
      Activate
    </Button>;
};

export default SpecialToggleButton;