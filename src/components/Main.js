import React from "react";
import EventKey from "./EventKey";
import Attending from "./Attending";
import SubmitButton from "./SubmitButton";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: "",
      attending: ""
    };
  }
  handleSubmitButtonClick = e => {
    console.log("clicked", this.state);
  };
  handleAttendingChange = e => {
    this.setState({ attending: e.target.value });
  };
  handleEventKeyChange = e => {
    this.setState({ eventKey: e.target.value });
  };
  render() {
    return (
      <main style={{ height: "500px", padding: "1%" }}>
        <p>
          Awesome! You are invited to the event. Let the organizer know if you
          will be attending
        </p>
        <EventKey
          textboxId="eventKey"
          textboxLabel="Event Key"
          handleChange={this.handleEventKeyChange}
        />
        <Attending handleChange={this.handleAttendingChange} />
        <SubmitButton handleClick={this.handleSubmitButtonClick} />
      </main>
    );
  }
}
// const Main = () => {
//   const useStyles = makeStyles({
//     root: {
//       border: 0,
//       borderRadius: 3,
//       boxShadow: "0 3px 5px 2px rgba(200, 200, 200, .3)",
//       height: 500,
//       padding: "0 30px"
//     }
//   });
//   const handleSubmitButtonClick = e => {
//     console.log("clicked");
//   };
//   const classes = useStyles();
//   return (
//     <main className={classes.root}>
//       <p>
//         Awesome! You are invited to the event. Let the organizer know if you
//         will be attending
//       </p>
//       <EventKey textboxId="eventKey" textboxLabel="Event Key" />
//       <Attending />
//       <SubmitButton handleClick={handleSubmitButtonClick} />
//     </main>
//   );
// };
export default Main;
