const Position = (
  pos,
  parent = null,
  LU = null,
  LD = null,
  UL = null,
  UR = null,
  RU = null,
  RD = null,
  DL = null,
  DR = null
) => {
  return { pos, parent, LU, LD, UL, UR, RU, RD, DL, DR };
};

const Path = (startPos, endPos) => {
  const rootNode = Position(startPos);
  let posBuffer = [];
  let knightPath = [];

  posBuffer.push(rootNode);
  nextMoves();

  return knightPath;

  function getPath(inpNode) {
    knightPath.unshift(inpNode.pos);
    if (inpNode.parent !== null) {
      getPath(inpNode.parent);
    }
  }

  function nextMoves() {
    const currNode = posBuffer.shift();
    // Exit if final position is reached
    if (currNode.pos[0] == endPos[0] && currNode.pos[1] == endPos[1]) {
      getPath(currNode);
      return;
    }

    const LU = [currNode.pos[0] - 2, currNode.pos[1] + 1];
    const LD = [currNode.pos[0] - 2, currNode.pos[1] - 1];
    const UL = [currNode.pos[0] - 1, currNode.pos[1] + 2];
    const UR = [currNode.pos[0] + 1, currNode.pos[1] + 2];
    const RU = [currNode.pos[0] + 2, currNode.pos[1] + 1];
    const RD = [currNode.pos[0] + 2, currNode.pos[1] - 1];
    const DL = [currNode.pos[0] - 1, currNode.pos[1] - 2];
    const DR = [currNode.pos[0] + 1, currNode.pos[1] - 2];

    const insideBoard = (v) => {
      return v >= 0 && v < 8;
    };
    if (LU.every(insideBoard)) {
      currNode.LU = Position(LU, currNode);
      posBuffer.push(currNode.LU);
    }
    if (LD.every(insideBoard)) {
      currNode.LD = Position(LD, currNode);
      posBuffer.push(currNode.LD);
    }
    if (UL.every(insideBoard)) {
      currNode.UL = Position(UL, currNode);
      posBuffer.push(currNode.UL);
    }
    if (UR.every(insideBoard)) {
      currNode.UR = Position(UR, currNode);
      posBuffer.push(currNode.UR);
    }
    if (RU.every(insideBoard)) {
      currNode.RU = Position(RU, currNode);
      posBuffer.push(currNode.RU);
    }
    if (RD.every(insideBoard)) {
      currNode.RD = Position(RD, currNode);
      posBuffer.push(currNode.RD);
    }
    if (DL.every(insideBoard)) {
      currNode.DL = Position(DL, currNode);
      posBuffer.push(currNode.DL);
    }
    if (DR.every(insideBoard)) {
      currNode.DR = Position(DR, currNode);
      posBuffer.push(currNode.DR);
    }
    nextMoves();
  }
};
const args = process.argv;
if (
  JSON.parse(args[2])
    .concat(JSON.parse(args[3]))
    .some((v) => v > 7)
) {
  console.log("invalid coordinates");
} else {
  const kPath = Path(JSON.parse(args[2]), JSON.parse(args[3]));
  console.log(`You made it in ${kPath.length - 1} moves!  Here's your path:`);
  kPath.forEach((v) => console.log(v));
}
