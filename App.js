import React, { useState } from "react";
import { Container} from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./component/DatesCount";
import DatesList from "./component/DatesList";
import DatesAction from "./component/DatesAction";

const App = () => {
  
  const [personData, setPersonData] = useState(person)
  const onDelete=()=>{
    setPersonData([]);
  }
  const onViewData=()=>{
    setPersonData(person);
  }
  return (
    <div className="color-body">
      <Container className="py-6">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} onViewData={onViewData}/>
       
      </Container>
    </div>
  );
};
export default App;


