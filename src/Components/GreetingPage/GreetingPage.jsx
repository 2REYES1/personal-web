import './GreetingPage.css';
import * as React from 'react';

function GreetingPage() {
    return (
        <div className={"introduction"}>
            <p className={"hello-greeting nanum-pen-script-regular"}>Hello, I'm Alyssa!</p>
            <p className={"sub-greeting roboto-mono-400"}><i>a uc irvine computer science student who loves the endless knowledge that comes with tech</i></p>
            <a href="mailto:alyssalareyes@gmail.com" class={"email-button nanum-pen-script-regular"}>Contact Me</a>
        </div>
    )
}

export default GreetingPage;