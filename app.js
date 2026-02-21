const REPORT_PATH = "./data/latest-report.json";

function formatDelta(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function changeClass(value) {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "";
}

function renderReport(report) {
  const top = report.top_stock;

  document.getElementById("report-date").textContent = `Report date: ${report.report_date}`;
  document.getElementById("top-ticker").textContent = `${top.stock_name} (${top.ticker})`;
  document.getElementById("top-mentions").textContent = top.mentions;

  const topChange = document.getElementById("top-change");
  topChange.textContent = formatDelta(top.weekly_change_percent);
  topChange.className = `value ${changeClass(top.weekly_change_percent)}`;

  document.getElementById("seasonal-context").textContent = top.seasonal_context || "Seasonal context unavailable for this run.";

  const leaderboardBody = document.getElementById("leaderboard-body");
  leaderboardBody.innerHTML = "";

  report.leaderboard.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.stock_name}</td>
      <td>${entry.ticker}</td>
      <td>${entry.mentions}</td>
      <td class="${changeClass(entry.weekly_change_percent)}">${formatDelta(entry.weekly_change_percent)}</td>
    `;
    leaderboardBody.appendChild(row);
  });

  document.getElementById("weekly-summary").textContent = report.weekly_summary;
}

async function loadReport() {
  try {
    const response = await fetch(REPORT_PATH);
    if (!response.ok) {
      throw new Error(`Failed to load report (${response.status})`);
    }

    const report = await response.json();
    renderReport(report);
  } catch (error) {
    document.getElementById("weekly-summary").textContent = `Unable to load report data: ${error.message}`;
  }
}

loadReport();
