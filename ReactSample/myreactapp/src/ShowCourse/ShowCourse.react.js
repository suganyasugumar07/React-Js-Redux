import React from 'react';

import Poll from '../Poll/Poll.react';

import likeImg from '../images/like.png';
import dislikeImg from '../images/dislike.png'


class ShowCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {like:1,dislike:0}
    }

    incrementLike = (event) => {
        this.setState({ like: this.state.like + 1 });
        console.log(event);
    }

    incrementDisLike = () => {
        //this.setState({ dislike: this.state.dislike + 1 })
        this.setState(this.update);
        this.setState(this.update);
    }

    update = (state,props) => {
        return {
            dislike : state.dislike + 1
        }
    }

    render() {
        console.log('render');
        return (
            <div >
                <p><img src={likeImg} alt='like'></img>Like  : {this.state.like}</p>
                <p><img src={dislikeImg} alt='dislike'></img>DisLike  : {this.state.dislike}</p>
                <Poll action={this.incrementLike} text={"Like"}></Poll>
                <Poll action={this.incrementDisLike} text={"DisLike"}></Poll>
            </div>
        );
    }
}

export default ShowCourse;