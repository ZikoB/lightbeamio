async function fetchData(url) {
  try {
    let request = await fetch(url);
    let text = await request.text();
    return JSON.parse(text);
  } catch (err) {
    console.log(`Error: ${err.stack}`);
  }
}

var myFunc = function(name) {
  return name;
};
