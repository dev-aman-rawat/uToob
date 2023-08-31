import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard, Banner } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Rings } from "react-loader-spinner";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // console.log(videos);
  // console.log(channelDetail);

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
    <Box minHeight="95vh">
      <Box>
        <div>
          <Banner
            img={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          />
        </div>
        <ChannelCard channelDetail={channelDetail} desc={true} />
      </Box>
      <Box display="flex" p="2" mt="20px">
        <Box sx={{ mr: { sm: "111px" } }}>
          <Videos videos={videos} widthForChannel="355px" />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
