import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default onSubmit = async (mood, selected) => {
  const navigate = useNavigate;

  if (mood !== "good" && mood !== "bad") {
    return toast.error(
      `Invalid mood. Recieved ${mood}, must be "good" or "bad"`
    );
  }

  if (mood === "bad") {
    const response = await axios.get("/api/response", {
      params: { mood, selected },
    });
  }

  if (mood === "good") {
    navigate("/prompt");
  }
};
