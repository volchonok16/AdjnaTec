import {requestWithBody} from '../requestFunction';

export type PostFeedbackBody = {
    name: string,
    contacts: string,
    comment: string
}

export const postFeedback = (body: PostFeedbackBody) => {
    return requestWithBody('http://adjnatech.ru:2000/feedback', 'POST', body)
}