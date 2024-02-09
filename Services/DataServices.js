const SayHello = async (User) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/SayHello/GreetUser/${User}`)
    const data = await promise.text();
    console.log(data)
    return data;
}

const SumTwoNumbers = async (Answer1, Answer2) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MiniChallengeTwo/GreaterOrLess/${Answer1}/${Answer2}`)
    const data = await promise.text();
    console.log(data)
    return data;
}

const askingQuestions = async (Name , WakeUpTime) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MiniChallengeThree/Sentence/${Name}/${WakeUpTime}`);
    const data = await promise.text();
    return data;
}
const GreaterOrLess = async (numberOne, numberTwo) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MiniChallengeFour/GreaterOrLess/${numberOne}/${numberTwo}`);
    const data = await promise.text();
    return data
}
const oddOrEven = async (numberThree) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/OddOrEven/CheckEvenOrOdd/${numberThree}`);
    const data = await promise.text();

    return data;
}

export { SayHello ,SumTwoNumbers, askingQuestions, GreaterOrLess, oddOrEven };