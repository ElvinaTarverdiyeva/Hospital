import React from 'react'
function commentclick() {
    const comments = document.getElementById("commentdiv");
    comments.style.display = "block";
}
function clousediv() {
    const comments = document.getElementById("commentdiv");
    comments.style.display = "none";
}
const Blogcatdshow = (props) => {
    return (
        <div>
            <div className="clickcomment" id="commentdiv">
                <div className="commentdiv">
                    <h1 onClick={clousediv}>X</h1>
                    <div className="catd1comment">

                        <div className="imgdiv">
                            <img src={props.img} alt="" />
                        </div>
                        <div className="textdivcomment">
                            <h4>{props.posthed}</h4>
                            <div className="comments">
                                <h6>Test@gmail.com : </h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ut!</p>
                                <hr /><hr />
                                <h6>Test@gmail.com : </h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ut!</p>
                                <hr /><hr />

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="catd1">
                <div className="imgdiv">
                    <img src={props.img} alt="" />
                </div>
                <div className="textdiv">
                    <h4>{props.posthed}</h4>
                    <p>{props.about}</p>
                    <hr />
                    <div className="comment">
                        <div className="comdiv">
                            <p>
                                <i class="far fa-user"></i>{props.dname}
                            </p>
                            <p onClick={commentclick}>
                                <i class="fas fa-comment-dots"></i>{props.commentscount}
                            </p>

                        </div>
                        <hr />
                        <form action="">
                            <input type="email" placeholder="Email" />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Blogcatdshow

