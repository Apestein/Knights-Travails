function Node(position) {
  return { position }
}

function Tree(start = [0, 0]) {
  let root

  function buildTree(start) {
    let root = new Node(start)
    let knownPositions = [start.join("")]
    const KNIGHT_MOVES = [
      [1, 2],
      [1, -2],
      [2, 1],
      [2, -1],
      [-1, 2],
      [-1, -2],
      [-2, 1],
      [-2, -1],
    ]
    for (let i = 0, j = 1; i < KNIGHT_MOVES.length; i++) {
      let x = KNIGHT_MOVES[i][0] + start[0]
      let y = KNIGHT_MOVES[i][1] + start[1]
      if (!(x >= 0) || !(x <= 7) || !(y >= 0) || !(y <= 7)) continue
      if (knownPositions.includes([x, y].join(""))) continue
      knownPositions.push([x, y].join(""))
      root[j] = [x, y]
      j++
    }
    console.log(knownPositions)
    console.log(root)
  }
  return { root, buildTree }
}

let tree = Tree()
//tree.buildTree([4, 3])
tree.buildTree([0, 0])
