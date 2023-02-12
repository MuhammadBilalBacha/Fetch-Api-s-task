import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/Card";

function App() {
  const [content, setContent] = useState();
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://www.khawateenrozgar.com/webapi/api/job/63db70f8443f799ebc7df047"
        )
        .then((res) => {
          setContent(res);
          console.log(res.data.data);
        });
    };
    fetchData();
  }, [content?.data?.data?.title]);

  return (
    <Fragment>
      <Card
        designation={content?.data?.data?.title}
        cityName={content?.data?.data?.city}
        comanyName={content?.data?.data?.company}
      />
    </Fragment>
  );
}

export default App;
