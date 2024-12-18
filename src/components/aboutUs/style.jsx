export const styles = (theme) => ({
    About: {
      marginTop: "48px",
      marginBottom: "24px",
      color: theme.palette.text.primary,
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
    },
  
    box1: {
      width:"77%",
    //   width: "1026px ",
      padding: "48px",
      backgroundColor: theme.palette.background.white,
      display: "flex",
      marginBottom: "24px",
      [theme.breakpoints.down("sm")]: {
        flexDirection:"column",
        alignItems: "center",
        // justifyContent:"center"
      },
    },
  
    phothoes: {
      marginRight: "32px",
    },
  
    Notes: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: theme.palette.text.secondary,
      fontSize: theme.typography.fontSize.small,
    },
  
    left: {
      height: "162px",
    //   width:"20%",
    //   width: "550px",
      backgroundColor: theme.palette.background.white,
      display: "flex",
    },
  
    con_l: {
      width: "75%",
      padding: "24px 0 0 24px",
    },
  
    con_r: {
      display: "flex",
      width: "25%",
      alignItems: "center",
      justifyContent: "center",
    },
  
    con_l_head: {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: theme.typography.fontSize.extraMedium,
      marginBottom: "12px",
    },
  
    con_l_body: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.fontSize.small,
    },
    boxabout: {
      width: "100%",
    //   backgroundColor:'red',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:'center',
    },
    grid:{
        width:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent:'center'
    }
  });
  