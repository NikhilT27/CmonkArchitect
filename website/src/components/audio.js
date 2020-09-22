import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import MusicOffIcon from "@material-ui/icons/MusicOff"
import { Typography, IconButton, Grid } from "@material-ui/core"
import music from "../music/bensound-slowmotion.mp3"

const useStyles = makeStyles(theme => ({
  root: {},
  audio: {
    position: "fixed",
    bottom: "50px",
    left: "50%",

    outline: "none",
  },
  audioPlayer: {
    "&:focus": {
      outline: "none",
    },
  },
}))

export default function Audio() {
  const classes = useStyles()

  return (
    <div className={classes.audio}>
      <Grid container direction="column" alignItems="flex-end">
        <AudioPlayer
          autoPlay
          src={music}
          onPlay={e => console.log("onPlay")}
          showJumpControls={false}
          customProgressBarSection={[]}
          customControlsSection={["MAIN_CONTROLS"]}
          style={{
            background: "transparent",
            boxShadow: "none",
            textDecoration: "none",
            borderStyle: "none",
            border: 0,
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
          className={classes.audioPlayer}
          customIcons={{
            play: (
              <MusicNoteIcon
                style={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
              />
            ),
            pause: (
              <MusicOffIcon
                style={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
              />
            ),
          }}
        />
      </Grid>
    </div>
  )
}
