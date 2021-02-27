import { Tab, Tabs } from "react-bootstrap";
import UserTab from "./tabs/feedbacks/UserTab";
import VendorTab from "./tabs/feedbacks/VendorTab";

const FeedbackTabs = () => {
  return (
    <Tabs defaultActiveKey="user" id="uncontrolled-tab-example">
      <Tab eventKey="user" title="User Feedbacks">
        <UserTab />
      </Tab>
      <Tab eventKey="feedback" title="Vendor Feedbacks">
        <VendorTab />
      </Tab>
    </Tabs>
  )
};

export default FeedbackTabs;
