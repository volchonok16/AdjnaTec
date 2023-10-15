import {requestWithBody} from '../requestFunction';
import {SEND_FEEDBACK} from '../constantAPI';

export type PostFeedbackBody = {
    name: string,
    mail:string,
    phone: string,
    comment: string
}

export const sendFeedback = (body: PostFeedbackBody) => {
    return requestWithBody(SEND_FEEDBACK, 'POST', body)
}