import { useEffect, useState } from "react";
import { getComments } from '../services/CommentsService';

function Comments() {

    const [comments, set_comments] = useState([]);

    useEffect(() => {
        getComments().then((data) => {
            set_comments(data);
        })
    }, []);

    return ( 
        <div>
            <h1>Comments Page</h1>

            <div className="comments-box">
                {
                    comments.map((comment) => 
                        <div key={comment.id}>
                            {comment.body}

                            <div className="comment-options-button center">:</div>

                            <div className="comment-options-dialog">
                                <div>Edit</div>
                                <div>Delete</div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="comment-input">
                <input type="text" placeholder="Enter comment" />
            </div>
        </div>
    );
}

export default Comments;