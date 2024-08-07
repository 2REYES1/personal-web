import './ImportantLinks.css';
import * as React from 'react';
import resume from './imp-files/reyes-resume.pdf';
function ImportantLinks(){
    return(
        <div className={"important-links-box roboto-mono-400"}>
            <div className={"important-links-grid"}>
                
                <a href={resume} download={"REYES-RESUME.pdf"} className={"links"}>resume</a>
                
               
                <a href={"https://github.com/2REYES1"} className={"links"}>github</a>
                
            </div>
        </div>
    )
}

export default ImportantLinks;