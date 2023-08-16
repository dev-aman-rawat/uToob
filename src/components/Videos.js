import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import { Rings } from "react-loader-spinner";

const Videos = ({ videos, direction, widthForChannel }) => {
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
  );
};

export default Videos;
