import React, {useState} from "react";
import ReacDOM from 'react-dom';
import './index.css';


function App() {
    return (
        <>
            <center>
                <Dimensions/>
            </center>
        </>
    );
}
function Dimensions() {
    let [box1_width, set_box1_width] = useState(50);
    let [box1_height, set_box1_height] = useState(50);
    let [box2_width, set_box2_width] = useState(50);
    let [box2_height, set_box2_height] = useState(50);

    const set_box1_width_func = event => {
        let input_value = event.target.value;
        if (Number(input_value) || input_value === '') {
            return (
                set_box1_width(box1_width = Number(event.target.value))
            );
        }
    }
    const set_box1_height_func = event => {
        let input_value = event.target.value;
        if (Number(input_value) || input_value === '') {
            return (
                set_box1_height(box1_height = Number(event.target.value))
            );
        }
    }
    const set_box2_width_func = event => {
        let input_value = event.target.value;
        if (Number(input_value) || input_value === '') {
            return (
                set_box2_width(box2_width = Number(event.target.value))
            );
        }
    }
    const set_box2_height_func = event => {
        let input_value = event.target.value;
        if (Number(input_value) || input_value === '') {
            return (
                set_box2_height(set_box2_height = Number(event.target.value))
            );
        }
    }

    return (
        <>
            {/*Box one*/}
            <p><span style={{color: 'red'}}>Box 1</span> Dimensions:</p>
            <label>
                Width:
                <input className={"box1_input"} value={box1_width} onChange={set_box1_width_func} type="text"/>
            </label>
            <label>
                Height:
                <input className={"box1_input"} value={box1_height} onChange={set_box1_height_func} type="text"/>
            </label>

            {/*Box two:*/}
            <p><span style={{color: 'blueviolet'}}>Box 2</span> Dimensions:</p>
            <label>
                Width:
                <input className={"box2_input"} value={box2_width} onChange={set_box2_width_func} type="text"/>
            </label>
            <label>
                Height:
                <input className={"box2_input"} value={box2_height} onChange={set_box2_height_func} type="text"/>
            </label>
            <center>
                <div style={{display: 'inline-block'}}>
                    <Boxes width1={box1_width} height1={box1_height} width2={box2_width} height2={box2_height}/>
                </div>
            </center>
            <div style={{marginTop: '20px'}}>
                <CanItHold width1={box1_width} height1={box1_height} width2={box2_width} height2={box2_height}/>
            </div>
        </>
    );
}
function Boxes({width1, height1, width2, height2}) {
    return (
        <>
            <br/>
            {width1 > 0 && height1 > 0?<div className={"box1"} style={{width:width1+'px', height:height1+'px'}}>&nbsp;</div>:''}
            {width2 > 0 && height2 > 0?<div className={"box2"} style={{width:width2+'px', height:height2+'px'}}>&nbsp;</div>:''}
            <br/>
        </>
    );
}
function CanItHold({width1, height1, width2, height2}) {
    let result = "Nope, neither of the boxes can hold the other. Try changing dimensions.";
    let big_box = 0;
    if (width1 > 0 && width2 > 0 && height1 > 0 && height2 > 0) {
        if((height1 > height2)) {
            if ((width1 > width2)) {
                result = "Yes, Box 1 can hold Box 2, as shown below: ";
                big_box = 1;
            }
        }
        else if((height1 < height2)) {
            if ((width1 < width2)) {
                result = "Yes, Box 2 can hold Box 1, as shown below:";
                big_box = 2;
            }
        }
    }
    return (
        <>
            {width1&&width2?<p>Now, the question is, can one box hold the other?</p>:''}
            {width1&&width2?<p>Let's calculate:</p>:''}
            <br/>
            {result}
            <br/>
            <br/>
            <center>
                {big_box === 1?<div className={"box1_out"} style={{width:width1+'px', height:height1+'px'}}>
                    <div className={"box2_in"} style={{width:width2+'px', height:height2+'px'}}>
                    </div>
                </div>:''}
                {big_box === 2?<div className={"box2_out"} style={{width:width2+'px', height:height2+'px'}}>
                    <div className={"box1_in"} style={{width:width1+'px', height:height1+'px'}}>
                    </div>
                </div>:''}
            </center>
        </>
    );
}
ReacDOM.render(
    <App/>
    , document.querySelector("#root")
);