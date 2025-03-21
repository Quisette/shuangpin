export class TypingSummary {
  constructor() {}

  onKeyPressed() {
    this.pressCount += 1;

    this.accumTime();
  }

  onValid(result: boolean) {
    this.totalValid += 1;
    this.totalCorrect += Number(result);
  }

  /**
   * 擊鍵間隔大於 5s，不收集時間
   */
  private accumTime() {
    const time = performance.now();
    const diff = time - this.lastTime;

    if (diff < 5000) {
      this.totalTime += diff;
    }
    this.lastTime = time;
  }

  get hanziPerMinutes() {
    if (this.totalTime === 0) return 0;
    return (this.totalCorrect / this.totalTime) * 1000 * 60;
  }

  get pressPerHanzi() {
    if (this.totalCorrect === 0) return 0;
    return this.pressCount / this.totalCorrect;
  }

  get accuracy() {
    if (this.totalValid === 0) return 0;
    return this.totalCorrect / this.totalValid;
  }

  private lastTime = 0;
  private pressCount = 0;
  private totalTime = 0;
  private totalValid = 0;
  private totalCorrect = 0;
}

export type AchievementCond =
  | "correctMatches"
  | "bestCombos"
  | "bestAccuracy"
  | "bestHPW"
  | "bestWPM";

export const lowerIsBetter = new Set<AchievementCond>(["bestHPW"]);
export const achievementConds: Record<
  AchievementCond,
  Record<number, string>
> = {
  correctMatches: {
    1: "你好雙拼",
    10: "整挺好",
    100: "小試牛刀",
    1000: "漸入佳境",
    5000: "小有所得",
    10000: "輕車熟路",
    20000: "真正的粉絲",
    50000: "學無止境",
  },
  bestCombos: {
    17: "格洛克",
    30: "突擊手",
    42: "終極答案",
    100: "精準制導",
    238: "鈾",
  },
  bestAccuracy: {
    50: "日取其半",
    60: "及格了",
    75: "中堅力量",
    85: "尖子生",
    90: "開悟之坡",
    95: "平流層",
    99: "就差一點",
    100: "完美主義",
  },
  bestWPM: {
    10: "一指禪",
    20: "二指禪",
    40: "四平八穩",
    60: "順溜",
    80: "指尖飛舞",
    100: "無情鐵手",
    120: "芝加哥打字機",
    160: "我是傳奇",
    200: "我是人類",
  },
  bestHPW: {
    3.0: "馴服手指",
    2.8: "手眼協調",
    2.5: "肌肉記憶",
    2.3: "精準點射",
    2.1: "狙擊手",
    2.0: "複印機",
  },
};
export const finalAchievement: Record<
  string,
  { [k in AchievementCond]?: number }
> = {
  初級雙拼認證: {
    correctMatches: 1000,
    bestAccuracy: 75,
  },
  中級雙拼認證: {
    correctMatches: 1000,
    bestAccuracy: 90,
  },
  高級雙拼認證: {
    correctMatches: 1000,
    bestAccuracy: 95,
  },
  雙拼大師: {
    correctMatches: 1000,
    bestAccuracy: 99,
    bestHPW: 2.1,
    bestWPM: 120,
  },
};

export class Achievement {
  hits = 0; // 擊鍵次數
  totalMatches = 0; // 總匹配次數
  correctMatches = 0; // 成功匹配次數
  bestCombos = 0; // 最佳連擊次數
  bestAccuracy = 1; // 最佳準確率
  bestWPM = 0; // 最佳字每分
  bestHPM = 0; // 最佳碼長

  currentCombos = 0; // 當前連擊次數
  currentAccuracy = 1; // 當前準確率
  currentWPM = 0; // 當前字每分
  currentHPW = 0; // 當前碼長

  check() {}
}
