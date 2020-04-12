document.getElementById('mInput').addEventListener('input',

    function(e) {

        // Declare variable m
        let m = e.target.value;

        // Convert m to km
        document.getElementById('kmOutput').innerHTML = (m / 1000);
        // Convert m to cmm
        document.getElementById('cmOutput').innerHTML = (m * 100);
        // Convert m to mm
        document.getElementById('mmOutput').innerHTML = (m * 1000);
        // Convert m to mi
        document.getElementById('miOutput').innerHTML = (m / 1609).toFixed(6);
        // Convert m to ft
        document.getElementById('ftOutput').innerHTML = (m * 3.281);
        // Convert m to in
        document.getElementById('inOutput').innerHTML = (m * 39.37);

    });