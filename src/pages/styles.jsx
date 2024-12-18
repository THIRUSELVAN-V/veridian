
export const styl = (theme) => ({
  Main:{
    padding: "67px",
    width: "85%",
    // background: theme.palette.primary.Lite,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      // background: theme.palette.primary.Lite,
      padding: "0px",
      width:"100%"
    },
  },
  Base:{
    height: "100%",
    width: "100%",
    overflow: "scroll",
    scrollbarWidth: "none",
    
  },
  mid: {
    height: "2241px",
    background: theme.palette.primary.Lite,
    width: "100%",
    overflow: "scroll",
    scrollbarWidth: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
})

