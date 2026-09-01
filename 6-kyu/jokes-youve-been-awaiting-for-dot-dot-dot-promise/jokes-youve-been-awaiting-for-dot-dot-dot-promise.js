async function sayJoke(apiUrl, jokeId) {
  if (apiUrl != 'http://great.jokes/christmas') {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  
  const res = await fetch(apiUrl);
  const { jokes } = await res.json();
  const joke = jokes.find(({id}) => id == jokeId);
  
  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }
  
  const { setup, punchLine } = joke;
  
  return {
    saySetup: () => setup,
    sayPunchLine: () => punchLine
  };
}