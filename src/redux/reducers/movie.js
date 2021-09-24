import { DATGHE, HUYGHE } from "../type/movie";

const stateDefaults = {
  dsGheDangDat: [],
};



const datVeReducer = (state = stateDefaults, action) => {
  switch (action.type) {
    case DATGHE: {
      let dsGheDangDatUpdate = [...state.dsGheDangDat];
      let index = dsGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        dsGheDangDatUpdate.splice(index, 1);
      } else {
        dsGheDangDatUpdate.push(action.ghe);
      }
      state.dsGheDangDat = dsGheDangDatUpdate;
      return { ...state };
    }
    case HUYGHE: {
      let dsGheDangDatUpdate = [...state.dsGheDangDat];
      let index = dsGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        dsGheDangDatUpdate.splice(index, 1);
      }
      state.dsGheDangDat = dsGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default datVeReducer;
