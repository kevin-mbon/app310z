import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/layout/ui/NewMeetUpForm";

function NewMeetUpPage() {
  const history = useNavigate();
  function addMeetUpHandler(meetUpData) {
    fetch("https://app-310z-default-rtdb.firebaseio.com/app310z.json", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => history("/"));
  }
  return (
    <div>
      <h1>New MeetUpPage</h1>
      <NewMeetUpForm addMeetUp={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetUpPage;
