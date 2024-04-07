import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Host() {
  const url = "https://foolish-moth-88.telebit.io/posts/";
  const fileUrl = "https://foolish-moth-88.telebit.io/posts/savefile";
  
  // const url = "https://foolish-moth-88.telebit.io/posts/";
  // const fileUrl = "https://foolish-moth-88.telebit.io/posts/savefile";
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const fileResponse = await fetch(fileUrl, {
          method: "POST",
          headers: {
            "ngrok-skip-browser-warning": "1", // Add this header
            // Include other headers as needed
        },
          body: formData,
        });

        if (fileResponse.ok) {
          const data = new FormData(e.target);

          try {
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "ngrok-skip-browser-warning": "1", // Add this header
                // Include other headers as needed
            },
              body: JSON.stringify({
                title: data.get("title"),
                type: data.get("type"),
                file: fileName,
                user_id: localStorage.getItem("sessionId"),
                likes_count: 0,
                share_count: 0,
              }),
            });

            if (response.ok) {
              const data = await response.json();
              if (data === "Added Successfully") {
                Swal.fire({
                  title: "Post Added Successfully!",
                  color: "var(--color-5)",
                  background: "var(--color-2)",
                  icon: "success",
                  confirmButtonColor: "var(--color-5)",
                  confirmButtonText: "Okay!",
                  iconColor: "var(--color-5)",
                }).then(() => {
                  window.location = "/dashboard";
                });
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const data = new FormData(e.target);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "ngrok-skip-browser-warning": "1", // Add this header
            // Include other headers as needed
        },
          body: JSON.stringify({
            title: data.get("title"),
            type: data.get("type"),
            user_id: localStorage.getItem("sessionId"),
            likes_count: 0,
            share_count: 0,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data === "Added Successfully") {
            Swal.fire({
              title: "Post Added Successfully!",
              color: "var(--color-5)",
              background: "var(--color-2)",
              icon: "success",
              confirmButtonColor: "var(--color-5)",
              confirmButtonText: "Okay!",
              iconColor: "var(--color-5)",
            }).then(() => {
              window.location = "/dashboard";
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h1
        className="ml-4 mt-4 font-weight-bolder "
        style={{ fontSize: "40px" }}
      >
        Host now
      </h1>
      <hr
        style={{
          backgroundColor: "var(--color-5)",
          height: "2px",
          border: "none",
          borderRadius: "10px",
          margin: "0",
          marginBottom: "15px",
        }}
      />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div
            className="d-flex flex-column"
            style={{
              overflow: "hidden",
              backgroundColor: "var(--color-2)",
              padding: "10px",
              borderRadius: "7px",
            }}
          >
            <textarea
              name="title"
              className="w-100"
              id=""
              cols="30"
              rows="10"
              style={{
                backgroundColor: "var(--color-2)",
                color: "var(--color-5)",
                border: "none",
                resize: "none",
                padding: "15px",
              }}
              required
            ></textarea>
            <label htmlFor="file">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-cloud-upload"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
                />
              </svg>
              <br />
              <br />
              Add media file (optional)
            </label>
            <br />
              <select name="type" className="type-select" required>
                <option disabled>---Select type of Post---</option>
                <option value="Funny">Funny</option>
                <option value="Professional">Professional</option>
              </select>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "var(--color-4)",
                color: "var(--color-1)",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
