/*
 * Simple NMS save data parser
 * Developed by Brayan Iribe
 *
 */

const keys = {
  GAME_MODE_ID: "F2P",
  USER_DATA: "6f=",
  TOTAL_TIME: "Lg8",
  UNITS: "wGS",
  NANITES: "7QL",
  QUICKSILVER: "kN;",
};

const editor = {
  difficulty: {
    NORMAL: 46,
    SURVIVAL: 56,
    CREATIVE: 51,
  },
  parse(str, filename) {
    const verifierByte = str.substr(str.length - 1, 1);
    const f = JSON.parse(str.substr(0, str.length - 1));
    const userdata = f[keys.USER_DATA];
    const pkg = {
      filename,
      raw: str,
      j: f,
      verifierByte,
      GAME_MODE_ID: f[keys.GAME_MODE_ID],
      TOTAL_TIME: Math.round(userdata[keys.TOTAL_TIME] / 60 / 60),
      UNITS: userdata[keys.UNITS],
      NANITES: userdata[keys.NANITES],
      QUICKSILVER: userdata[keys.QUICKSILVER],
      generate() {
        const p = this.j;
        p[keys.GAME_MODE_ID] = this.GAME_MODE_ID;
        return p;
      },
    };
    return pkg;
  },
};

export default editor;
