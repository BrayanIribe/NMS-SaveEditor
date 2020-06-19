/*
 * Simple NMS save data parser
 * Developed by Brayan Iribe
 *
 */

const keys = {
  GAME_MODE_ID: "F2P",
  TOTAL_TIME: "Lg8",
  UNITS: "wGS",
  NANITES: "7QL",
  QUICKSILVER: "kN;",
};

const editor = {
  parse(str) {
    const f = JSON.parse(str);
    const pkg = {
      GAME_MODE_ID: f[keys.GAME_MODE_ID],
      TOTAL_TIME: Math.Round(f[keys.TOTAL_TIME] / 60 / 60),
      UNITS: f[keys.UNITS],
      NANITES: f[keys.NANITES],
      QUICKSILVER: f[keys.QUICKSILVER],
    };
    return pkg;
  },
};

export default editor;
