const StyledCard = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        color: "#000",
        width: "30vw",
        height: "35vh",
        margin: "10px",
        borderRadius: "10px"

    },
    avatar: {
        margin: "10px",
        padding: "4px",
        width: "10vw",
        height: "15vh",
        borderRadius: "10px 10px 0 0",
    }
}

export default function Card(props) {
    return(
        <div style={StyledCard.container}>
         <img style={StyledCard.avatar} src="placeholder_ava.jpg" alt= {props.name}/>
         <h3>{props.name}</h3>
         <h5>{props.email}</h5>
         <p>{props.city}</p>
        </div>
    );
}