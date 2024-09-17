// see https://genezio.com/docs/tutorials/how-to-deploy-a-serverless-function/ to learn more about function usage and parameters

export const handler = async (event) => {
  console.log("Function was called");
  console.log(event);
  const name = event.queryStringParameters?.name || "World";
  return {
    statusCode: 200,
    body: `Hello, ${name}! Welcome to Genezio Functions!`,
  };
};
