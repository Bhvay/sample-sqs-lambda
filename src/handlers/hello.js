async function hello (event, context){
  for (const {body} of event.Records) {
    console.log(`Sqs Message: ${body}`);
	console.log('adding new message');
  }
};

export const handler = hello;