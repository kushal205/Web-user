import { Button, TextField } from "@mui/material";
import Layout from "../ui/Layout";
import { useContext, useEffect, useState } from "react";
import { context } from "../../utils/context/Provider";
import server from "../../utils/server";
import toast from "react-hot-toast";

export default function SportEdit() {
  //state
  const [data, setData] = useState({
    name: "",
    description: "",
    image: "",
    pitches: 0,
    price: 0,
    availability: 0,
    location: "",
  });
  //store
  const store = useContext(context);

  const getSportById = async () => {
    try {
      const res = await server.get(
        `api/admin/sport/${store.data.selectedSport}`
      );
      setData(res.data.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const updateSport = async () => {
    try {
      const response = await server.put("/api/admin/sport", data);
      toast.success(response.data.message);
    } catch (err) {
      console.log("error", err);
      toast.error(err.message || "Error!");
    }
  };

  useEffect(() => {
    if (store?.data.selectedSport) getSportById();
  }, [store.data.selectedSport]);
  return (
    <Layout>
      <div className="form-flex-center">
        <div className="form_container">
          <div className="form_header">Update Sport Details</div>
          <form className="form_flex">
            <TextField
              id="outlined-number"
              label="Name"
              placeholder="write name"
              value={data.name}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <TextField
              id="outlined-number"
              label="Description"
              placeholder="write description"
              type="text"
              value={data.description}
              onChange={(e) =>
                setData((prev) => ({ ...prev, description: e.target.value }))
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Image"
              placeholder="add a URL"
              type="text"
              onChange={(e) =>
                setData((prev) => ({ ...prev, image: e.target.value }))
              }
              value={data.image}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Pitches"
              type="number"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  pitches: e.target.valueAsNumber,
                }))
              }
              value={data.pitches}
              placeholder="number of pitches"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Price"
              onChange={(e) =>
                setData((prev) => ({ ...prev, price: e.target.valueAsNumber }))
              }
              placeholder="price for a pitch"
              type="number"
              value={data.price}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Location"
              type="text"
              onChange={(e) =>
                setData((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="location"
              value={data.location}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Availability"
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  availability: e.target.valueAsNumber,
                }))
              }
              type="number"
              value={data.availability}
              // todo: not clear about the field use
              placeholder="availability"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button className="edit_button ani_button" onClick={updateSport}>
              Update
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
