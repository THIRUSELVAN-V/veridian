export const styl = (theme) => ({
    First:{
        height: "540px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        backgroundColor: theme.palette.primary.main,
        marginBottom: "65px",
      },
      
      Inside:{
        height: "250px",
        width:"73%",
        // width: "976px",
        // backgroundColor:"red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#F5F7FA",
      },
      img1: {
        left: "0",
        position: "absolute",
      },
      img2: {
        right: "0",
        position: "absolute",
      },
    
      arrow: {
        marginTop: "8px",
        marginLeft: "7px",
      },
    
      Investment: {
        backgroundColor: "#F9C300",
        padding: "5px 10px",
        fontSize: "14px",
        letterSpacing: "2px",
      },
    
      Empowering: {
        fontSize: "48px",
        textAlign: "center",
        fontWeight: "700",
      },
    
      Knowmore: {
        backgroundColor: "#0000004D",
        height: "52px",
        width: "189px",
        display: "flex",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "600",
        alignItems: "center",
        justifyContent: "center",
      },
})