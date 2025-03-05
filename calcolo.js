document.getElementById("calculateButton").addEventListener("click", function () {
    const rounds = [];
  
    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`round${i}`).value;
        if (input.trim() !== "") {
            const roundScores = parseScores(input);
            rounds.push(roundScores);
        }
    }
  
    const finalScores = calculateFinalScores(rounds);
    const leaderboard = getSortedLeaderboard(finalScores);
    displayLeaderboard(leaderboard);
  });
  
  function parseScores(input) {
    const scores = {};
    const lines = input.split(/,|\n/); // Gestisce sia virgole che nuove righe
    
    lines.forEach(line => {
        const parts = line.split(":");
        if (parts.length === 2) {
            const player = parts[0].trim();
            const score = parseFloat(parts[1].trim());
            if (!isNaN(score)) {
                scores[player] = score;
            }
        }
    });
    
    return scores;
  }
  
  function calculateFinalScores(rounds) {
    const totalScores = {};
    
    rounds.forEach(round => {
        for (const [player, score] of Object.entries(round)) {
            if (!totalScores[player]) {
                totalScores[player] = 0;
            }
            totalScores[player] += score;
        }
    });
    
    return totalScores;
  }
  
  function getSortedLeaderboard(totalScores) {
    return Object.entries(totalScores)
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .map(([player, score], rank) => ({
            rank: rank + 1,
            player,
            score,
        }));
  }
  
  function displayLeaderboard(leaderboard) {
    const leaderboardContainer = document.getElementById("leaderboard");
    leaderboardContainer.innerHTML = "";
    leaderboardContainer.style.color = "white";
    leaderboardContainer.style.display = "flex";
    leaderboardContainer.style.flexDirection = "column";
    leaderboardContainer.style.paddingLeft = "10%";
  
    
    const wrapperDiv = document.createElement("div");
    wrapperDiv.style.display = "flex";
    wrapperDiv.style.justifyContent = "center";
  
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-results");
  
    leaderboard.forEach(({ rank, player, score }) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${rank}. ${player}: ${score}`;
        
        if (rank === 1) {
            listItem.classList.add("btn","btn-results", "btn-success", "mt-2",);
        } else if (rank === 2) {
            listItem.classList.add("btn","btn-results", "btn-warning", "mt-2",);
        } else if (rank === 3) {
            listItem.classList.add("btn","btn-results", "btn-primary", "mt-2",);
        } else {
            listItem.classList.add("btn","btn-results", "btn-info", "mt-2",);
        }
        
        leaderboardContainer.appendChild(listItem);
    });
  
    cardDiv.appendChild(leaderboardContainer);
    wrapperDiv.appendChild(cardDiv);
    
    document.body.appendChild(wrapperDiv);
  }
  
