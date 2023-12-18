
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
    const [amount,setAmount]=useState(0);
    const [per,setPer]=useState(0);
    const [discount,setDiscount]=useState('');
    const [balance,setBalance]=useState('');

  function calculate(e){
     const dis = amount*(per/100);
     const bal = amount-dis;
    setDiscount(dis);
    setBalance(bal);
  }
  const reset=(e)=>{
    setAmount(0);
    setDiscount(0);
    setBalance(0);
    setPer(0);

  }

 


  return (
    <div className="App">


     <div className="row mx-auto">
      <div className="col ps-5"> <div className='ms-5'>
      <p style={{fontSize:'70px'}}>Discount</p>
      <p  style={{fontSize:'30px',position:'absolute',top:'75px'}}>Calculator</p>
      </div>
      <div style={{width:'500px',zIndex:'1',backgroundColor:' rgba(255, 255, 255, 0.566)'}} className='m-5 p-3 card shadow border-0'>
      <TextField value={amount||''} className='mt-3 shadow '  onChange={(e)=>setAmount(e.target.value)} id="outlined-basic" label="Amount" variant="outlined" />
      <TextField value={per||''}  className='mt-3 shadow '  onChange={(e)=>setPer(e.target.value)} id="outlined-basic" label="Discount %" variant="outlined" />
      <div>
      <Button  className='mt-3 shadow '   onClick={(e)=>calculate(e)} variant="contained">Calculate</Button>
      <Button  className='mt-3 ms-3 shadow '   onClick={(e)=>reset(e)} variant="contained">RESET</Button>
      </div>
      </div>
      <div id="result" style={{width:'500px',backgroundColor:'rgba(255, 255, 255, 0.566)',zIndex:'1'}} className='m-5 p-3 card shadow border-0'>
      <b>Discount : <span > {per}%</span></b>
        <b>Discount amount : <span style={{opacity:'50%'}}> Rs {discount}</span> </b>
        <b >Total Amount After Discount :  <span style={{color:'green'}}>Rs {balance}</span></b>

      </div>
     
</div>
      <div className="col">
       <div style={{marginTop:'70px', position:'absolute',left:'470px'}}> <img style={{width:'700px'}} src="https://thumbs.dreamstime.com/b/calculator-earnings-growth-chart-isolated-white-background-financial-concept-isometric-d-vector-finance-illustration-icons-149389832.jpg" alt="" /></div>
       <div className='p-3' style={{marginTop:'370px', position:'absolute',left:'650px',width:'530px',textAlign:'justify',backgroundColor:' rgba(255, 255, 255, 0.566)',}}>
       <b> <p>A discount is the reduction of either the monetary amount or a percentage of the normal selling price of a product or service. A discount can be deducted from the invoice price or the amount receivable at a fixed rate. A discount benefits the payer of the sum, but results in a loss to the receiver of the sum. <a href="/">more</a></p></b>
       
       </div>
          
     

      </div>
     
     
     </div>
       
    </div>
  );
}

export default App;
