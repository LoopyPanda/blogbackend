import React from "react";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

//{blogarticle}
const Blogarticle = (props) => {
    // console.log(typeof documentToReactComponents)
//console.log(blogarticle)
    // const content =
    return(
        <div className ="container">
            <header>
                <div className="post">
                    <h1>{props.heading}</h1>
                    <p>{props.content}</p>
                    <h5>{props.name} {props.email}</h5>
                    {/* {<img className= "image"  src={props.blogarticle.fields.image.fields.file.url}/>} */}
                    {/* {documentToReactComponents(props.blogarticle.fields.description)} */}
                </div>
            </header>
        </div>
    )
};


export default Blogarticle;