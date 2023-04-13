
function MissedGoal(){
    return <h1>You missed!</h1>;
}

function MadeGoal(){
    return <h1>You scored a goal!</h1>
}

function Goal(props){
    const isGoal = props.isGoal;
    return (
        <>
        {isGoal ? <MadeGoal/> : <MissedGoal/>}
        </>
    );
}

export default Goal