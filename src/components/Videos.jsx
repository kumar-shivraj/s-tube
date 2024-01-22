import React from "react";
import { Grid } from "@mui/material";
import { ChannelCard, VideoCard } from ".";

const Videos = (props) => {
  return (
    <Grid container spacing={2}>
      {props.videos.map((item, idx) => (
        <Grid key={idx} item xs={12} sm={6} lg={props.videoPage ? 12 : 4} xl={props.videoPage ? 12 : 3}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
