import React,{ Component, PropTypes } from 'react';
//父组件给子组件传值
//一个输入框和一个显示天气的俩子组件，在输入框输入温度促发的onChange事件中，
//通过props传给父组件，父组件负责来改变显示的值，另外一个显示天气的子组件的值得以改变。
function TemperatureShow(props) {
    if(props.temperature >38) {
      return <p>天气热</p>
    }else if(props.temperature<=38 && props.temperature >=0){
      return <p>天气正合适</p>
    }else {
      return <p>天气冷</p>
    }
}
function TemperatureInput(props) {
	 function handleTemp(e) {
        // 接受父组件传递过来的函数，调用并传值
        props.onTemperateChange(e.target.value)
    }
    return (
      	<p>
	        <label htmlFor="tempInput">请输入天气温度</label>
	        <input type="text" name="tempInput" value={props.temperature} onChange={handleTemp} />
      	</p>
    )
}
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class NotesList extends Component{
//	propTypes(){
//		name:PropTypes.string.isRequired
//	}
  render (){
  	const t=this.props.name
  	
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
        	
          	return <li name={t}>{child}</li>;
        })
      }
      </ol>
    );
  }
}

class TemperatureContainer extends Component {
    constructor(props) {
      	super(props);
      	this.state = {
        	temperature: ''
      	};
      	this.handleTemp = this.handleTemp.bind(this);
    }
	 handleTemp(temperature) {
        this.setState({
            temperature:temperature
        })
    }
    render() {
        let temperature = this.state.temperature
        return (
            <div>
                <TemperatureInput temperature={temperature} onTemperateChange={this.handleTemp}/>
                <TemperatureShow  temperature={parseFloat(temperature) } />
                <NotesList name='app'>
				    <span>hello</span>
				    <span>world</span>
				    <div>的好的呵呵</div>
				    
			  	</NotesList>
			  	<NameForm />
            </div>
        ) 
      }
}
export { TemperatureContainer }
