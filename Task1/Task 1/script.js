
        document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
            event.preventDefault();
            calculateAge();
        });

        function calculateAge() {
            const dob = new Date(document.getElementById('dob').value);
            if (dob > new Date()) {
                document.getElementById('result').innerHTML = '<div class="alert alert-danger">Date of birth cannot be in the future.</div>';
                return;
            }
            
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            const dayDiff = today.getDate() - dob.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }
            document.getElementById('result').innerHTML = `<div class="alert alert-success">You are ${age} years old.</div>`;
        }
    
        