import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      memos: []
    }
  }

  componentWillMount() {
    fetch('/memo', {
      method: "GET",
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json',
        },
      mode:"cors",
    }).then( res => {
      return res.json();
    })
    .then( memos => {
      this.setState({memos: memos});
      console.log( "Network success - memo : ", memos );
    })
    .catch( error =>
      console.log( "Network Error : ", error )
    );
  }

  render() {
    return (
      <div className='container'>
      <div className='App'>
        <h1> 메모장 </h1><br/><br/>
        <table>
        	<tbody>
         		<tr className='trList'>
                {
                this.state.memos.map ( memo =>
                	<td className='cell' key={memo._id}>
                    	<div className='inner'>
                        	<h2> {memo.title} </h2>
                            <h5> {memo.author} </h5><br/><br/>
                            <h4> {memo.content} </h4><br/>
                        </div>
					</td>
                )}
				</tr>
			</tbody>
      	 </table>
      </div>
      </div>
    );
  }
}


export default App;