let React = require('react');
let ReactDOM = require('react-dom');
let App = require('./components/App');
import 'whatwg-fetch';



let Initial = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function()  {
        fetch("/load")
            .then(function(res)  {
                return res.json();
            }).then(function(json)  {
                console.log(json);
                this.setState({article: json});
            }.bind(this));
    },

    render: function() {
        if (!this.state.article) return <p>...Loading...</p>

        let c;
        if (this.state.article.comments) {
            c = this.state.article.comments.map(function(comment) {
               return <div id="comment-contain">
                   <div class="user-comment" data-comment={comment}>{comment}</div>
                   <button class="delete-comment" type="submit">Delete Comment</button>
               </div>
            });
        }

        return (
            <div>
                <div>{this.state.article.title}</div>
                <img src={this.state.article.img} />
                <div>{this.state.article.summary}</div>
                <p>{this.state.article.text}</p>

                <div>{c}</div>

                <form data-title="{{articleObj.title}}">
                    <textarea id="name" rows="1" cols="50" placeholder="Name"></textarea>
                    <textarea id="comment" rows="4" cols="50"></textarea>
                    <button id="submit-comment" type="submit">Submit</button>
                </form>
            </div>
        );
    }
});


ReactDOM.render(<Initial />, document.getElementById('app'));
