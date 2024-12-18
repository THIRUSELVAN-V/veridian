export const stylesnew = (theme) => ({
  investmentApproach: {
    marginTop: "48px",
    marginBottom: "24px",
    color: theme.palette.text.primary,
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
  },

  con: {
    justifyContent: "space-between",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  },

  box: {
    height: "660px",
    width: "382px",
    padding: "32px",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      // background: theme.palette.primary.Lite,
      width:"90%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    },
  },

  img: {
    height: "210px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

  },

  heading: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeight.semiBold,
    fontSize: theme.typography.fontSize.extraMedium,
    marginBottom: "12px",
  },

  para: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize.small,
    marginBottom: "10px",
  },
});
