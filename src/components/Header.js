const Styles = {
    container:{
        display: "flex",
        flexDirection: "row",
        color: "#fff",
        width: "100vw",
        height: "10vh",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    }
}

export default function Header() {
    return(
        <div style={Styles.container}>
            <p>here will be the header content</p>
        </div>
    );
}