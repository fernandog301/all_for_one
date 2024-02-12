const SayHello = async (User) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/SayHello/GreetUser/${User}`)
    const data = await promise.text();
    console.log(data)
    return data;
}

const GreaterOrLess = async (Answer1, Answer2) => {
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
const SumTwoNumbers= async (numberOne, numberTwo) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MiniChallengeFour/GreaterOrLess/${numberOne}/${numberTwo}`);
    const data = await promise.text();
    return data
}
const oddOrEven = async numberThree => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/OddOrEven/CheckEvenOrOdd/${numberThree}`);
    const data = await promise.text();
    return data;
}
const reverseItWord = async TextReverse => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/ReverseItAlphanumeric/reverseItAlphanumeric/${TextReverse}`);
    const data = await promise.text();
    return data;
}

const madLibs = async (charaOne, charaTwo,placeOne,adjectOne,nounOne,optionOne,colorOne,reactionOne,expressOne,WeatherOne,AnswerTwo,ReviewOne) => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/MadLib/MadLib/${charaOne}/${charaTwo}/${placeOne}/${adjectOne}/${nounOne}/${optionOne}/${colorOne}/${reactionOne}/${expressOne}/${WeatherOne}/${AnswerTwo}/${ReviewOne}`);
    const data = await promise.text();
    return data;
}
const Magic8Ball = async Responses => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/EightBall/Magic/${Responses}`);
    const data = await promise.text();
    return data;
}
const restaurantPicker = async playerChoice => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/RestaurantPicker/restaurantPicker/${playerChoice}`);
    const data = await promise.text();
    return data;
}
const ReverseItNumbersOnly = async value => {
    const promise = await fetch(`https://gutierrezfallforone.azurewebsites.net/ReverseItNumbersOnly/ReverseIt/${value}`);
    const data = await promise.text();
    return data;
}

export { SayHello ,SumTwoNumbers, askingQuestions, GreaterOrLess, oddOrEven, reverseItWord, madLibs ,Magic8Ball, restaurantPicker, ReverseItNumbersOnly};