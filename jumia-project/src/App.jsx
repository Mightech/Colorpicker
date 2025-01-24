import { useState, useEffect } from 'react';
import Date from './Project/Date';
import OutPut from './Project/output';
import Colorpicker from './Component/Colorpicker';





function App() {
	// const [age, setAge] = useState({});
	// const handleAge = (calculatedAge) => {
	// 	console.log(calculatedAge);
	// 	setAge(calculatedAge);
	// };

	// useEffect(() => {  
	// 	console.log(localStorage.getItem('mode'));
	// 	if (localStorage.getItem('mode') === 'dark') {
	// 		document.querySelector('body').classList.add('dark');
	// 	} else {
	// 		document.querySelector('body').classList.remove('dark');
	// 	}
	// }, []);
	return (
		// <div className='app'>
		// 	<div className='app__content'>
		// 		<Date onAge={handleAge} />
		// 		<OutPut age={age} />
		// 	</div>
		// </div>
		<div>
<Colorpicker/>
		</div>
	);
}

export default App;