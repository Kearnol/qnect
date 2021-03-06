import {IPost} from '~/models/post'

export default function postFactory(): IPost[] {

    const data = [
        ['Dance πΊπ»', 'Someone who wants to get freaky', 'I\'m dancing in the middle π' ],
        ['Meet a Friend π', 'Someone who likes Hurricane Iced Teas', 'Come buy me a drink πΉ'],
        ['Play Pool π±', 'Any couples out there?', 'We\'re at table 8! π»'],
        ['Crossword at the bar π', 'Maybe you like to crossword in public too?', 'Can\'t miss me π€ '],
        ['Dartsπ―', 'Need one more', '"Mountain Top!"'],
        ['Trivia Team Needs 1 more', 'Hurry!!', 'I\m wearing a [ ... ] T - shirt π'],
        ['Shots π₯', 'π', 'If you\'re cute, you don\'t even have to pay π'],
        ['Pet My Dog π', 'It\'s safe, I Promise!', 'Yes she\'s an albino chihuahua'],
        ['Watching π', 'Let\s go Bronco\s!!!', 'Hightop by the window - jump in!'],
        ['Come drink tequila', 'Body shots π', 'I\'m at the bar π'],
        ['Kareoke', 'π€', 'Taking my next song recommendation'],
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