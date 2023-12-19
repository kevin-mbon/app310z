import { useState, useEffect } from "react";
import MeetUpList from "../components/layout/meetups/MeetUpList";

function AllmeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch("https://app-310z-default-rtdb.firebaseio.com/app310z.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
     const meetups = []
     for( const key in data){
     const meetup = {
        id: key,
        ...data[key]
      }
      meetups.push(meetup)
     }

      setIsLoading(false);
      setLoadedData(meetups);
    });
  },[]);

  if (isLoading) {
    return <div>is loading</div>;
  }
  return (
    <section>
      <h1>All meetup page</h1>
      <MeetUpList meetups={loadedData} />
    </section>
  );
}

export default AllmeetupPage;
