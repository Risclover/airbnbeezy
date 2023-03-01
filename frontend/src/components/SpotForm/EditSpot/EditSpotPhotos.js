// CreateUser.js file
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addSpotImg, getSpotImgs } from "../../../store/spot-images";
import { getAllSpots } from "../../../store/spots";

function getExtension(filename) {
  var parts = filename.split(".");
  return parts[parts.length - 1];
}

const EditSpotPhotos = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  // for multuple file upload
  //   const [images, setImages] = useState([]);
  const [errors, setErrors] = useState("");

  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[+spotId]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = [];

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

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

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
          {/* <label>
            Multiple Upload
            <input
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
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
