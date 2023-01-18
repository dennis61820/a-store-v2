// domain/.netlify/functions/hello

exports.handler = async function (event, context) {
  return {
    statusCode: 299,
    body: 'hello World',
  }
}
