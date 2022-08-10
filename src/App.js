import Navbar from "./components/Navbar";
import Entry from "./components/Entry"

import data from "./data"

export default function App(){
    const entries = data.map(function(data){
        return(
            <Entry
                data = {data}
            />
    )})

    return(
        <>
            <Navbar/>
            <div id="content" className="p-3">
                {entries}
            </div>
        </>
    )
}