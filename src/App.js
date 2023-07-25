import Header from "./components/Header";
import List from "./components/List";

const StyledPage = {
  container:{
     display: "flex",
     width:"100vw",
     height: "500vh",
     flexDirection: "column",
     backgroundColor: "gray",
     alignItems: "center",
  }
}

function App() {
  return (
    <div style={StyledPage.container}>
      <Header />
      <List />
    </div>
  );
}

export default App;
