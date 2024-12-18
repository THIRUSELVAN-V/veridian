export const styl = (theme) => ({
    Last:{
        height: "285px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        backgroundColor: theme.palette.primary.main,
      },
      img1: {
        left: "0",
        position: "absolute",
      },
      img2: {
        right: "0",
        position: "absolute",
      },
      contact: {
        fontSize: "32px",
        fontWeight: "bold",
      },
     contactUs:{
        height: "200px",
        width: "976px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#F5F7FA",
      },
      email: {
        height: "52px",
        width: "342px",
        backgroundColor: theme.palette.primary.mail,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: theme.typography.fontWeight.semiBold,
        fontSize: theme.typography.fontSize.large,
      },
      rarrow: {
        backgroundColor: "#00000033",
        height: "52px",
        width: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      mail: {
        backgroundColor: theme.palette.secondary.yell,
        letterSpacing: "1px",
        color: theme.palette.text.primary,
        padding: "4px",
        fontSize: theme.typography.fontSize.verySmall,
        marginLeft: "22px",
      },
})