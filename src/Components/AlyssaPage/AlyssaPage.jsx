import './AlyssaPage.css';
import * as React from 'react';
import alyssaImage from './imgs/alyssa-pic.JPG'; 
import ImportantLinks from "../ImportantLinks/ImportantLinks"

function AlyssaPage(){
    return(
        <div className={"alyssa-box"}>
            <div className={"alyssa-grid roboto-mono-400"}>
                
                {/* left box  */}
                <div className={"alyssa-center"}>
                    <div className={"big-name nanum-pen-script-regular"}>
                        ALYSSA REYES
                    </div>
                    <img src={alyssaImage} alt="Alyssa" />
                    <ImportantLinks/>
                </div>
                
                {/* middle box */}
                <div className={"alyssa-center"}>
                    
                    <div className={"alyssa-green-box"}>
                        <p className={"alyssa-box-headers"}>INTERESTS</p>
                        <p>front-end web development, full-stack web development, ui/ux design, game development, game design, artificial intelligence.</p>
                    </div>
                </div>

                {/* right box */}
                <div className={"alyssa-center"}>
                    <div className={"alyssa-green-box"}>
                        <p className={"alyssa-box-headers"}>ABOUT</p>
                        <p>21 | she/her | entp-a. cs student at UC Irvine. from the Bay Area. loves chocolate. </p>
                    </div>
                    <div className={"alyssa-green-box"}>
                        <p className={"alyssa-box-headers"}>HOBBIES</p>
                        <p>basketball, volleyball, golf, photography, videography, video editing, valorant, call of duty, pokemon.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AlyssaPage;