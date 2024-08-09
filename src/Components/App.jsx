import React from "react";
import GreetingPage from "./GreetingPage/GreetingPage";
import AlyssaPage from "./AlyssaPage/AlyssaPage";
import ImportantLinks from "./ImportantLinks/ImportantLinks"

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <GreetingPage/>
            <AlyssaPage/>
            
        </div>
        
    )
}

export default App;