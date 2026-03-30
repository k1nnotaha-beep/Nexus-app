const logs = document.getElementById('terminal');
const logicDB = [
    { trigger: "OPEC+ production cut sentiment on Reuters", asset: "Crude Oil", roi: "8.4%", conf: "92%", steps: ["Accumulate Energy ETFs", "Set trailing stop at 3%", "Exit at T+72h peak"] },
    { trigger: "Fed Rate Hike pause speculation via Platform X", asset: "Gold (XAU)", roi: "5.1%", conf: "88%", steps: ["Hedge 20% into Physical Gold", "Monitor Silver correlation", "Hold for 6-month horizon"] },
    { trigger: "Institutional volume spike in Top 10 Crypto", asset: "Bitcoin / ETH", roi: "15.9%", conf: "84%", steps: ["DCA into position over 24h", "Verify exchange outflows", "Watch for liquidity gap at T+12h"] }
];

function addLog(msg) {
    const div = document.createElement('div');
    div.innerHTML = `> ${msg}`;
    logs.appendChild(div);
    logs.scrollTop = logs.scrollHeight;
}

function executeNexus() {
    document.getElementById('resultCard').classList.add('hidden');
    logs.innerHTML = "";
    
    addLog("SYNCHRONIZING TEMPORAL DATA...");
    setTimeout(() => addLog("FETCHING GLOBAL SENTIMENT VECTORS..."), 400);
    setTimeout(() => addLog("RUNNING 10,000 PROFIT SIMULATIONS..."), 900);
    
    setTimeout(() => {
        const data = logicDB[Math.floor(Math.random() * logicDB.length)];
        addLog(`<span style="color: #D4AF37">LOGIC LINK ESTABLISHED: ${data.asset}</span>`);
        
        document.getElementById('catalystTitle').innerText = data.trigger;
        document.getElementById('confidence').innerText = data.conf;
        document.getElementById('assetType').innerText = data.asset;
        document.getElementById('roiValue').innerText = "+" + data.roi;
        
        const stepsList = document.getElementById('steps');
        stepsList.innerHTML = data.steps.map(s => `<li>• ${s}</li>`).join('');
        
        document.getElementById('resultCard').classList.remove('hidden');
        addLog("ADVICE OPTIMIZED FOR YOUR BRACKET.");
    }, 1800);
}
