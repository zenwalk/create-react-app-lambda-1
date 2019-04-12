// show object spread works, i.e. babel works
const obj = {
  foo: 'bar'
};
export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(event['headers']["client-ip"])
  });
}
