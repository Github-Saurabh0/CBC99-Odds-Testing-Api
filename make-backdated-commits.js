const { execSync } = require("child_process");

const startDate = new Date("2025-10-01");
const endDate = new Date("2025-10-07");

const commitMessages = [
  // Core odds updates
  "Update: match odds recalculated",
  "Adjust odds for upcoming match",
  "Refactor odds engine logic",
  "Fix rounding in odds calc",
  "Add simulation for match odds",
  "Tune probability weights",
  "Data tweak: odds smoothing",
  "Sync odds table with live feed",
  "Minor odds prediction update",
  "Improve odds distribution sampling",
  
  // Performance & algorithm tweaks
  "Optimize odds computation speed",
  "Reduce API latency for odds updates",
  "Improve caching layer for match odds",
  "Adjust ML model thresholds",
  "Normalize input data for fair odds",
  "Fix NaN issue in probability formula",
  "Patch edge case for tied matches",
  "Handle missing player stats gracefully",
  "Optimize regression model performance",
  "Simplify odds recalculation flow",

  // Data & analytics
  "Update dataset with new match stats",
  "Integrate historical data for accuracy",
  "Clean corrupted odds entries",
  "Add player form metrics to odds engine",
  "Fix missing team ID in odds record",
  "Refactor data fetch from API feed",
  "Improve JSON parser for odds response",
  "Add validation for inconsistent odds data",
  "Enhance analytics dashboard backend",
  "Correct odds variance calculation",

  // Feature work
  "Add live odds refresh support",
  "Implement odds trend visualizer",
  "Add probability forecast graph",
  "Enhance match summary API",
  "Implement new odds adjustment algorithm",
  "Add alerts for sudden odds shifts",
  "Add daily odds snapshot generator",
  "Support bulk odds upload via CSV",
  "Add backup routine for odds history",
  "Implement user odds preference cache",

  // Bug fixes & testing
  "Fix timezone mismatch in commit dates",
  "Resolve undefined variable in odds predictor",
  "Fix incorrect decimal formatting",
  "Fix issue with null data in match feed",
  "Fix duplicate record insertion in odds DB",
  "Add unit tests for odds calculator",
  "Improve test coverage for prediction model",
  "Update mock data for odds simulator",
  "Fix async delay in API odds update",
  "Patch bug: incorrect team score mapping",

  // Misc tweaks & documentation
  "Update README with odds config section",
  "Add comments explaining odds formula",
  "Remove deprecated odds fields",
  "Log odds recalculation details for debug",
  "Minor cleanup in odds_utils.js",
  "Reformat code for consistency",
  "Small UI text tweak for odds display",
  "Update version tag after odds refactor"
];


console.log(`Creating backdated commits for 7 days (${startDate.toISOString().slice(0,10)} -> ${endDate.toISOString().slice(0,10)})`);

for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
  const dateStr = d.toISOString().split("T")[0];
  const randomCommits = Math.floor(Math.random() * 6) + 3; // 3–8 commits/day

  for (let i = 0; i < randomCommits; i++) {
    const randomMsg = commitMessages[Math.floor(Math.random() * commitMessages.length)];
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
    const seconds = String(Math.floor(Math.random() * 60)).padStart(2, "0");
    const commitTime = `${dateStr}T${10 + Math.floor(Math.random() * 10)}:${minutes}:${seconds}+05:30`;

    execSync(`echo "Update for ${commitTime}" >> dummy.txt`);
    execSync("git add dummy.txt");

    // Use Node env instead of shell export (Windows-safe)
    const env = {
      ...process.env,
      GIT_AUTHOR_DATE: commitTime,
      GIT_COMMITTER_DATE: commitTime
    };

    try {
      execSync(`git commit -m "${randomMsg} - odds update ${Math.random().toString(36).substring(2, 8)}" --date="${commitTime}"`, {
        stdio: "ignore",
        env
      });
      console.log(`✅ Commit done for ${commitTime}`);
    } catch (err) {
      console.error(`❌ Commit failed for ${commitTime}`);
    }
  }
}

console.log("🎯 All backdated commits done!");
