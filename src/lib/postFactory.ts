import {IPost} from '~/models/post'

export default function postFactory(): IPost[] {

    const data = [
        ['Dance 🕺🏻', 'Someone who wants to get freaky', 'I\'m dancing in the middle 💋' ],
        ['Meet a Friend 👋', 'Someone who likes Hurricane Iced Teas', 'Come buy me a drink 🍹'],
        ['Play Pool 🎱', 'Any couples out there?', 'We\'re at table 8! 🍻'],
        ['Crossword at the bar 🖊', 'Maybe you like to crossword in public too?', 'Can\'t miss me 🤓 '],
        ['Darts🎯', 'Need one more', '"Mountain Top!"'],
        ['Trivia Team Needs 1 more', 'Hurry!!', 'I\m wearing a [ ... ] T - shirt 👕'],
        ['Shots 🥃', '👀', 'If you\'re cute, you don\'t even have to pay 😈'],
        ['Pet My Dog 🐕', 'It\'s safe, I Promise!', 'Yes she\'s an albino chihuahua'],
        ['Watching 🏈', 'Let\s go Bronco\s!!!', 'Hightop by the window - jump in!'],
        ['Come drink tequila', 'Body shots 😅', 'I\'m at the bar 😏'],
        ['Kareoke', '🎤', 'Taking my next song recommendation'],
    ] 

    let postArray = data.map((post) => {
        return ({
            'title': post[0],
            'post': post[1],
            'details': post[2]
        })
    })

    console.log(postArray);

    return postArray
}