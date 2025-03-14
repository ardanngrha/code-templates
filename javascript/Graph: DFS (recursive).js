// For the graph templates, assume the nodes are numbered from 0 to n - 1 and the graph is given as an adjacency list. 
// Depending on the problem, you may need to convert the input into an equivalent adjacency list before using the templates.
let fn = graph => {
  let dfs = node => {
      let ans = 0;
      // do some logic
      for (const neighbor of graph[node]) {
          if (!seen.has(neighbor)) {
              seen.add(neighbor);
              ans += dfs(neighbor);
          }
      }

      return ans;
  }

  let seen = new Set([START_NODE]);
  return dfs(START_NODE);
}