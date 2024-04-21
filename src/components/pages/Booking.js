import Layout from "../ui/Layout";
import { TextField, Button } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { context } from "../../utils/context/Provider";
import server from "../../utils/server";

export default function Booking() {
  /** @todo on the booking page user should enter the timing and date
   * if the pitches is available it should book on that time slot
   * now just let the available thing aside focus on the date and timing part
   * */
  //state for booking
  const [data, setData] = useState({
    time: "",
    date: "",
  });
  const [sport, setSport] = useState({});

  const store = useContext(context);

  const getSportById = async () => {
    try {
      const res = await server.get(
        `api/admin/sport/${store.data.selectedSport}`,
      );
      setSport(res.data.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const bookSportEvent = () => {
    try {
      //write a api for booking a sport event
      // propably have to check the pitches available on that time selected
    } catch (err) {
      console.log("error", err);
    }
  };

  console.log("data", data);

  useEffect(() => {
    if (store?.data.selectedSport) getSportById();
  }, [store?.data.selectedSport]);
  return (
    <Layout>
      <div className="form-flex-center">
        <div className="form_container">
          <div className="form_header">Sport Details {sport.name}</div>
          <form className="form_flex">
            <TextField
              id="outlined-number"
              label="Date"
              placeholder="write name"
              value={data.date}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                setData((prev) => ({ ...prev, date: e.target.value }))
              }
            />
            <TextField
              id="outlined-number"
              label="Time"
              placeholder="select the time"
              value={data.name}
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                setData((prev) => ({ ...prev, time: e.target.value }))
              }
            />
            <Button className="edit_button ani_button" onClick={bookSportEvent}>
              Book
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
