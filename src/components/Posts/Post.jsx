import React from "react";

let Post = (props) => {
    return(
        <div>
            <div>
            {props.message}
            </div>
            <div>
            {props.id}
            </div>
        </div>
    )
}

export default Post;