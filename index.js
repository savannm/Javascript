//async
async function myFunction() {
  return "Hello";
}

myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
