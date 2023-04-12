import Car from './Car.js';

function Garage(){
    let color = 'blue';
    let brand = 'mistubishi';
    return(
        <>
        <h1>Who lives in my garage?</h1>
        <Car color={color} brand={brand}/>
        </>
    );
}

export default Garage