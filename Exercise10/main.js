// main.js
document.getElementById('fetchButton').addEventListener('click', function () {
    var characterInput = document.getElementById('characterInput');
    var characterName = characterInput.value.trim();
    if (characterName !== '') {
        var apiUri = `https://www.swapi.tech/api/people/?name=${characterName}`;

        fetch(apiUri)
            .then(response => response.json())
            .then(data => {
                var biometricData = data.result[0].properties;
                var height = biometricData.height;
                var mass = biometricData.mass;
                var gender = biometricData.gender;
                var hairColor = biometricData.hair_color;

                var outputTextarea = document.getElementById('output');
                outputTextarea.value = `Height: ${height}\nMass: ${mass}\nGender: ${gender}\nHair Color: ${hairColor}`;
            })
            .catch(error => console.error(error));

        characterInput.value = '';
    }
});