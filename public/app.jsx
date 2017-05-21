var GreeterMessage = React.createClass({
    render: function(){
        var name = this.props.name;
        var message = this.props.message;

        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var updates = {};

        if(name.length > 0){
            this.refs.name.value = '';
            updates.name = name;            
        }

        if(message.length > 0){
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onUpdateForm(updates);
    },
    render: function(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name" placeholder="Enter name..." /><br/>
                <textarea ref="message" placeholder="Enter message..."></textarea><br/>
                <button>Submit</button>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: 'React',
            message: 'This is from the react component'
        };
    },
    getInitialState: function(){
        return{
            name: this.props.name,
            message: this.props.message
        };
    },
    handleUpdateForm: function(updates){
        this.setState(updates);
    },
    render: function(){
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>

                <GreeterForm onUpdateForm={this.handleUpdateForm}/>
            </div>
        );
    }
});

var firstName = 'Rakesh';
var message = 'Some message';
ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);