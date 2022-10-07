import React, { Fragment, useState, useEffect } from 'react';

function Welcome(){
  return (<center>
    <iframe src="https://giphy.com/embed/vzO0Vc8b2VBLi" width="480" height="360" frameBorder="0" class="giphy-embed" title="Welcome" allowFullScreen></iframe>
    <h1>Welcome!</h1>
  </center>);
}
// export default Welcome;

/*
Review 1: what is wrong with this invoice?
*/
function Billing(){

	const amountOverdue = 0.3;
	const paymentA = 0.2;
	const paymentB = 0.1;
  
  const isPaid = Math.round(((amountOverdue - paymentA - paymentB) * 1000)) /1000
  console.log(isPaid)
  
  

	return (<Fragment>
		<h2>Billing Balance</h2>
		<pre>Amount Overdue: $ -{amountOverdue}</pre>
		<pre>Payment A       $  {paymentA}</pre>
		<pre>Payment B       $  {paymentB}</pre>
		<strong>isPaid? {isPaid === 0.0 ? 'PAGADO' : 'NO PAGADO'}</strong>
	</Fragment>)
}

// export default Billing;


/*
Review 2: what is wrong with this clock?
*/

let counter = 0;
function Clock(){

	const [ now, setNow ] = useState(new Date());

	useEffect( () => {
		setInterval( () => {
			setNow(new Date());
		}, 1000);
	}, []);

	return (<Fragment>
		<h2>Clock: {now.toString()}</h2>
		<pre>Renders: {counter++}</pre>
	</Fragment>);
}

// export default Clock;
