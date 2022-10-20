const Position = (
  pos,
  LU = null,
  LD = null,
  UL = null,
  UR = null,
  RU = null,
  RD = null,
  DL = null,
  DR = null
) => {
  return { pos, LU, LD, UL, UR, RU, RD, DL, DR };
};

const Path = (startPos, endPos) => {
  const rootNode = Position(startPos);
  let posBuffer = [];

  posBuffer.push(rootNode);
  nextMoves();

  return { rootNode };

  function nextMoves() {
    const currNode = posBuffer.shift();
    console.log(currNode.pos);
    // Exit if final position is reached
    if (currNode.pos[0] == endPos[0] && currNode.pos[1] == endPos[1]) {
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
      currNode.LU = Position(LU);
      posBuffer.push(currNode.LU);
    }
    if (LD.every(insideBoard)) {
      currNode.LD = Position(LD);
      posBuffer.push(currNode.LD);
    }
    if (UL.every(insideBoard)) {
      currNode.UL = Position(UL);
      posBuffer.push(currNode.UL);
    }
    if (UR.every(insideBoard)) {
      currNode.UR = Position(UR);
      posBuffer.push(currNode.UR);
    }
    if (RU.every(insideBoard)) {
      currNode.RU = Position(RU);
      posBuffer.push(currNode.RU);
    }
    if (RD.every(insideBoard)) {
      currNode.RD = Position(RD);
      posBuffer.push(currNode.RD);
    }
    if (DL.every(insideBoard)) {
      currNode.DL = Position(DL);
      posBuffer.push(currNode.DL);
    }
    if (DR.every(insideBoard)) {
      currNode.DR = Position(DR);
      posBuffer.push(currNode.DR);
    }
    nextMoves();
  }
};
const iep = Path([0, 0], [5, 5]);
console.log(JSON.stringify(iep));
