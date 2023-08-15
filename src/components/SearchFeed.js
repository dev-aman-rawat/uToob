import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      // console.log(data.items);
    });
  }, [searchTerm]);

  if (!videos.length) {
    return (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30vh",
        }}
      >
        <Rings height="122" width="122" color="red" ariaLabel="loading" />;
      </span>
    );
  }

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        p={2}
        sx={{
          color: "white",
        }}
      >
        Search results for :
        <span style={{ color: "#F31503" }}> {searchTerm} </span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
