import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RadioButtons from "./Components/RadioButtons";
import SelectBoxes from "./Components/selectBoxes";
import DropdownBox from "./Components/DropdownBox";
import Loops from "./Components/MapFunction/Loops";
import Clock from "./Components/Clock";
import NestedLoops from "./Components/MapFunction/NestedLoops";
import BootstrapUsage from "./Components/BootstrapUsage";
import InputBox from "./Components/InputBox";
import ControlledUncontrollComponent from "./Components/ControlledUncontrollComponent";
import Parent2 from "./Components/PassingData/2_Parent";
import Parent1 from "./Components/PassingData/1_Parent";
import ToDoApp from "./Components/ToDoApp";

function App() {
  return (
    <div>
      {/* <div className="component-container">
        <SelectBoxes></SelectBoxes>
      </div>
      <div className="component-container">
        <RadioButtons></RadioButtons>
      </div>
      <div className="component-container">
        <DropdownBox></DropdownBox>
      </div>
      <div className="component-container">
        <Loops></Loops>
      </div>
      <div className="component-container">
        <Clock></Clock>
      </div>
      <div className="component-container">
        <NestedLoops></NestedLoops>
      </div>
      <div className="component-container">
        <BootstrapUsage></BootstrapUsage>
      </div>
      <div className="component-container">
        <InputBox></InputBox>
      </div>
      <div className="component-container">
        <ControlledUncontrollComponent></ControlledUncontrollComponent>
      </div>
      <div className="component-container">
        <Parent1></Parent1>
      </div> */}
      {/* <div className="component-container">
        <Parent2></Parent2>
      </div> */}
      <div className="component-container"><ToDoApp></ToDoApp> </div>
      <div className="component-container">Hello </div>
      <div className="component-container">Hello </div>
      <div className="component-container">Hello </div>
    </div>
  );
}

export default App;
