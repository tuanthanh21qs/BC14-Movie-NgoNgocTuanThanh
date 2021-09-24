import { DATGHE, HUYGHE } from "../type/movie";

export const datGheAction = (ghe) => {
  return { type: DATGHE, ghe };
};

export const huyGheAction = (soGhe) => {
    return { type: HUYGHE, soGhe };
  };