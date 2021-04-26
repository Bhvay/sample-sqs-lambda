async function qtweet(event, context) {
    for (const { body } of event.Records) {
        console.log(`qtweet body: ${body}`);
    }
};

export const processor = qtweet;