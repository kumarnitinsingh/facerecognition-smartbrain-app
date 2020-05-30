import React from 'react';
import Tilt from 'react-tilt';
import Brain from './Brain.png';
import './Logo.css'

const Logo = () => {
	return(
		<div className=' center ma4 nt0'>
		<Tilt className="Tilt br2 shadow-2" options={{max:60}} style={{height:100,width:100}}>
			<div className="Tilt-inner pa3"><img style={{paddingTop:'5px'}}alt='Brainlogo'src={Brain} /></div>
		</Tilt>

		</div>


		);
		
		
		
			
}
export default Logo;