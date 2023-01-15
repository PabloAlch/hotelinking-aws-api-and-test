let response;

exports.sayHelloApi = async (event, context) => {
  try {

    const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });

    const name = event.queryStringParameters?.name || 'User!';
    const body = { message: `Hello ${name}!, the time is ${currentDate}`};
  

    response = {
          'statusCode': 200,
          'body': JSON.stringify(body)
      }
  } catch (err) {
      console.log(err);
      return err;
  }

  return response
};

