import React from 'react';
import {marked} from 'marked';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `
# h1
## h2
[myWebsite](http://visitMyWebsite.com)
\`myCode is great\`
\`\`\`
{
"firstName" : "Johnnyboy",
"secondName" : "korleone",
"age" : 25
}
\`\`\`
- myList First item
- myList second item

> blockquote

![alt text](logo192.png)


**boldText**
      `
    };
    this.setText = this.setText.bind(this);
    marked.setOptions({
      breaks: true
    });
  }

  setText(value){
    this.setState({text: value})
  }


  render() {
    return (
      <div className="App">
        <textarea id="editor" value={this.state.text} onChange={(event) => {
          console.log(event, event.target, event.target.value);
          this.setText(event.target.value);}} />
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.text)}}></div>
      </div>
    );
  }
}

export default App;
