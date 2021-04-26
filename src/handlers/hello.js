async function hello (event, context){
  for (const {body} of event.Records) {
    console.log(`Sqs Message: ${body}`);
  }
};

export const handler = hello;