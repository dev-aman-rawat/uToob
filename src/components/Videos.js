import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import { Rings } from "react-loader-spinner";
import { GitHub, LinkedIn, Public } from "@mui/icons-material";

const Videos = ({ videos, direction, widthForChannel }) => {
  const fullSize = useMediaQuery("(max-width:900px)");

  if (!videos?.length) {
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

  // console.log(videos);
  return (
    <>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {videos.map((video, idx) => (
          <Box key={idx}>
            {video.id.videoId && (
              <VideoCard video={video} widthForChannel={widthForChannel} />
            )}
            {video.id.channelId && (
              <ChannelCard channelDetail={video} desc={false} />
            )}
          </Box>
        ))}
      </Stack>

      {fullSize && (
        <Box
          sx={{
            display: "flex",
            mt: "10px",
            alignItems: "center",
            justifyContent: "space-evenly",
            color: "#fff",
          }}
        >
          <Typography variant="caption" my="14px" textAlign="center">
            &copy;2023 uToob
          </Typography>
          <Typography
            variant="h6"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <a
              style={{ color: "#fff", marginRight: "15px" }}
              target="_blank"
              href="https://github.com/dev-aman-rawat"
              rel="noreferrer"
            >
              <GitHub color="#fff" fontSize="50px" />
            </a>
            <a
              style={{ color: "#fff", marginRight: "15px" }}
              target="_blank"
              href="https://www.linkedin.com/in/aman-rawat-907800287"
              rel="noreferrer"
            >
              <LinkedIn color="#fff" fontSize="50px" />
            </a>
            <a style={{ color: "#fff", marginRight: "15px" }}>
              <Public color="#fff" fontSize="50px" />
            </a>
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Videos;
