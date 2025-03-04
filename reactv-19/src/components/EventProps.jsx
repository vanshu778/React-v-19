export const EventProps = () => {
    
    const HandleWelcomeUser = (user) => {
        alert(`Hey,${user}`);
    }
    const handleHover = () => {
        alert(`Hey Thanks for hovering me`);
    }
    return (
    <>
    <WelcomeUser 
    onClick={()=>HandleWelcomeUser("Vanshika")}
        onMouseEnter={handleHover}
        />
        </>)
}

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting=()=>{
        console.log(`Hey User, Welcome`);
        onClick();
    }
    return(
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}