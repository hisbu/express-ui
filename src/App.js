import React,{Component} from 'react';
import Axios from 'axios';

class App extends Component{
  componentDidMount=()=>{
    Axios.get('http://localhost:2017')
    .then((res)=>{
      console.log('masuk then')
      console.log(res.data)
    })
    .catch((err)=>{
      console.log('terjadi error')
    })
  }

  onBtnAddClick=()=>{
    Axios.post('http://localhost:2017/addproduct', {
      id:4,
      nama: 'React js',
      description: 'react js'
    })
    .then((res)=>{
      console.log(res.data)
    })
  }

  render(){
    return(
      <div>
        <h1>Selamat datang disini</h1>
        <input type='button' value='Add product' onClick={this.onBtnAddClick}/>
      </div>
    )
  }
}

export default App;
