import React from "react";
import PostList from "./PostList";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export const ApiUrlContext = React.createContext("localhost");

const defaultApiUrl = "http://34.245.57.188:4000";
function App() {
  const [apiUrl] = React.useState(defaultApiUrl);
  //const [apiUrlPrompt, setApiUrlPrompt] = React.useState(defaultApiUrl)
  const [showNewDialog, setShowNewDialog] = React.useState(false);

  return (
    <div className="App">
      <h1>This is a heading</h1>
      <Container fixed>
        <ApiUrlContext.Provider value={apiUrl}>
          <PostList
            show={showNewDialog}
            setShowNewRecipeDialog={setShowNewDialog}
          />
        </ApiUrlContext.Provider>
        <Fab
          onClick={() => {
            setShowNewDialog(true);
          }}
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
          }}
        >
          <AddIcon />
        </Fab>
      </Container>
    </div>
  );
}

export default App;
