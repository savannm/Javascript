//async
async function myFunction() {
  return "Hello";
}

myFunction().then(
  function(value) { console.log("success")},
  function(error) { console.log("error") }
);
