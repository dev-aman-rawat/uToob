import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      // console.log(data.items);
    });
  }, [searchTerm]);

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
