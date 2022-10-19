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
  const finalRoot = nextMoves(rootNode, 0, endPos);

  return { finalRoot };

  function nextMoves(inpNode, depth, endPos) {
    console.log(inpNode.pos, depth);
    const outNode = inpNode;
    const LU = [inpNode.pos[0] - 2, inpNode.pos[1] + 1];
    const LD = [inpNode.pos[0] - 2, inpNode.pos[1] - 1];
    const UL = [inpNode.pos[0] - 1, inpNode.pos[1] + 2];
    const UR = [inpNode.pos[0] + 1, inpNode.pos[1] + 2];
    const RU = [inpNode.pos[0] + 2, inpNode.pos[1] + 1];
    const RD = [inpNode.pos[0] + 2, inpNode.pos[1] - 1];
    const DL = [inpNode.pos[0] - 1, inpNode.pos[1] - 2];
    const DR = [inpNode.pos[0] + 1, inpNode.pos[1] - 2];

    const insideBoard = (v) => {
      return v >= 0 && v < 8;
    };
    if (LU.every(insideBoard)) {
      if (LU == endPos) {
        outNode.LU = Position(LU);
        //console.log("1");
      } else {
        // console.log("11");
        outNode.LU = Position(LU, nextMoves(Position(LU), depth + 1, endPos));
      }
    }
    if (LD.every(insideBoard)) {
      if (LD == endPos) {
        outNode.LD = Position(LD);
        //console.log("2");
      } else {
        // console.log("22");
        outNode.LD = Position(
          LD,
          null,
          nextMoves(Position(LD), depth + 1, endPos)
        );
      }
    }
    if (UL.every(insideBoard)) {
      if (UL == endPos) {
        outNode.UL = Position(UL);
        //console.log("3");
      } else {
        // console.log("33");
        outNode.UL = Position(
          UL,
          null,
          null,
          nextMoves(Position(UL), depth + 1, endPos)
        );
      }
    }
    if (UR.every(insideBoard)) {
      if (UR == endPos) {
        outNode.UR = Position(UR);
        //console.log("4");
      } else {
        // console.log("44");
        outNode.UR = Position(
          UR,
          null,
          null,
          null,
          nextMoves(Position(UR), depth + 1, endPos)
        );
      }
    }
    if (RU.every(insideBoard)) {
      if (RU == endPos) {
        outNode.RU = Position(RU);
        //console.log("5");
      } else {
        // console.log("55");
        outNode.RU = Position(
          RU,
          null,
          null,
          null,
          null,
          nextMoves(Position(RU), depth + 1, endPos)
        );
      }
    }
    if (RD.every(insideBoard)) {
      inpNode.RD = Position(RD);
      if (RD == endPos) {
        outNode.RD = Position(RD);
        //console.log("6");
      } else {
        // console.log("66");
        outNode.RD = Position(RD, null, null);
        null, null, null, nextMoves(Position(RD), depth + 1, endPos);
      }
    }
    if (DL.every(insideBoard)) {
      if (DL == endPos) {
        outNode.DL = Position(DL);
        //console.log("7");
      } else {
        // console.log("77");
        outNode.DL = Position(
          DL,
          null,
          null,
          null,
          null,
          null,
          null,
          nextMoves(Position(DL), depth + 1, endPos)
        );
      }
    }
    if (DR.every(insideBoard)) {
      if (DR == endPos) {
        outNode.DR = Position(DR);
        //console.log("8");
      } else {
        // console.log("88");
        outNode.DR = Position(
          DR,
          null,
          null,
          null,
          null,
          null,
          null,
          nextMoves(Position(DR), depth + 1, endPos)
        );
      }
    }
    return outNode;
  }
};
const iep = Path([0, 0], [5, 5]);
console.log(JSON.stringify(iep));
