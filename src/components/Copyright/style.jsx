export const styl = (theme) => ({
    Copyright: {
        width: "1308px",
        display: "flex",
        margin:"20px",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            flexDirection:"column"
          },
      },
      copy:{
        height: "66px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "#717B85",
        backgroundColor: theme.palette.background.bg3,
        justifyContent: "center",
        borderTop: `2px solid ${theme.palette.line.sec}`,
        [theme.breakpoints.down("sm")]: {
            height:"120px",
          },
      },
})