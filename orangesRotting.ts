function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: [number, number][] = [];
  let freshOranges = 0;

  // Directions for 4-directional movement (up, down, left, right)
  const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  // Initialize the queue with all rotten oranges and count fresh oranges
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 2) {
              queue.push([r, c]);
          } else if (grid[r][c] === 1) {
              freshOranges++;
          }
      }
  }
  console.log('total num of freshOranges is ', freshOranges)
  console.log('queue is ', queue)

  if (freshOranges === 0) return 0; // No fresh oranges to rot

  let minutesElapsed = -1;

  // Perform BFS
  while (queue.length > 0) {
      let size = queue.length;
      console.log('size of queue is currently ', size);
      minutesElapsed++;
      console.log('minutesElapsed is ', minutesElapsed)
      for (let i = 0; i < size; i++) {
          const [r, c] = queue.shift()!;
            console.log ('r and c is respectively ', r, c)
          for (const [dr, dc] of directions) {
              const newRow = r + dr;
              const newCol = c + dc;
              
              if (
                  newRow >= 0 && newRow < rows &&
                  newCol >= 0 && newCol < cols &&
                  grid[newRow][newCol] === 1
              ) {
                console.log('newRow is ', newRow, 'newCol is ', newCol)
                  grid[newRow][newCol] = 2; // Mark as rotten
                  freshOranges--;
                  queue.push([newRow, newCol]);
              }
          }
      }
  }

  // If there are still fresh oranges left, return -1
  return freshOranges === 0 ? minutesElapsed : -1;
}

// Example usage
const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];
console.log(orangesRotting(grid)); // Output: 4
