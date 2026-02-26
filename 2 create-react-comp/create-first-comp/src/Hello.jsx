function Hello(){

    let myName = "Ajit";
    let number = 404
    let fullName = () => {
        return 'Ajit Yadav';
    };


    return <p>Hello {myName}! Your number is {number}. Full name: {fullName()}</p>;
}
export default Hello;