import Car from './Car.js';

function Garage(){
    let cars = ['Mitsubishi', 'Peugeot', 'BMW', 'Nissan'];
    return(
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
        {cars.map((car) => <Car brand={car}/>)}
        </ul>
        </>
    );
}

export default Garage