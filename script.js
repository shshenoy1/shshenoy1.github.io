function calculateBonus() {
    var bonus = parseFloat(document.getElementById("bonus").value);
    var ratingValue = parseInt(document.getElementById("rating").value);

    // Define rating multipliers
    var multiplier = {
        1: [0.0, 0.29],
        2: [0.30, 0.80],
        3: [0.80, 1.05],
        4: [1.06, 1.20],
        5: [1.21, 1.60]
    };

    // Company component
    var company_component = 1.745;

    // Calculate bonus range
    var minBonus = company_component * 0.445 * bonus + multiplier[ratingValue][0] * bonus * 0.555;
    var maxBonus = company_component * 0.445 * bonus + multiplier[ratingValue][1] * bonus * 0.555;

    // Display the bonus range with two decimal places
    var resultDiv = document.getElementById("bonusResult");
    resultDiv.innerHTML = "Bonus Range: [" + minBonus.toFixed(2) + " , " + maxBonus.toFixed(2) + " ]";
}
