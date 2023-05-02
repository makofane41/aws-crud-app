import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, DeleteCommand } from '@aws-sdk/lib-dynamodb';
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.MY_DATABASE;

export const deleteByIdHandler = async (event) => {
  if (event.httpMethod !== 'DELETE') {
    throw new Error(`deleteByIdHandler only accept DELETE method, you tried: ${event.httpMethod}`);
  }
  // All log statements are written to CloudWatch
  console.info('received:', event);
 
  const id = event.pathParameters.id;
 
  
  var params = {
    TableName : tableName,
    Key: { id: id },
  };

  try {
    await ddbDocClient.send(new DeleteCommand(params));
  } catch (err) {
    console.log("Error", err);
  }
 
  const response = {
    statusCode: 204,
    body: ""
  };
 
  // All log statements are written to CloudWatch
  console.info(`response from: ${event.path} statusCode: ${response.statusCode}`);
  return response;
}