import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addSpotImg, getSpotImgs } from "../../../store/spot-images";
import { getAllSpots } from "../../../store/spots";

const EditSpotPhotos = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addSpotImg({ image, preview: false, spotId }));
    dispatch(getAllSpots());
    dispatch(getSpotImgs())
      .then(() => {
        setImage(null);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(
            "There was a problem with your upload. Make sure your file is a .jpg or .png file, and try again."
          );
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (!file.type.match("image.*"))
      setErrors(
        "There was a problem with your upload. Make sure your file is a .jpg or .png file, and try again."
      );
    if (file) setImage(file);
  };

  return (
    <div>
      <form
        className="add-img-form"
        style={{ display: "flex", flexFlow: "column" }}
        onSubmit={handleSubmit}
      >
        <div className="add-img-form">
          <label>
            <input
              accept="image/png, image/jpeg"
              type="file"
              onChange={updateFile}
              className="img-upload"
            />
          </label>
          <button type="submit" className="add-img-btn">
            Add Image
          </button>
        </div>
        <div className="errors-msg">{errors}</div>
      </form>
    </div>
  );
};

export default EditSpotPhotos;
