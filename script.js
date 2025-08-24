
    // Registration event listener
    document.getElementById('register').addEventListener('submit', function (event) {
        event.preventDefault();

        let users = JSON.parse(localStorage.getItem('users')) || {};
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const messageDiv = document.getElementById('registerMessage');

        if (users[username]) {
            messageDiv.textContent = 'Username already exists.';
            messageDiv.style.color = 'red';
        } else {
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));

            messageDiv.textContent = 'Registration successful!';
            messageDiv.style.color = 'green';

            // Clear input fields after registration
            document.getElementById('registerUsername').value = "";
            document.getElementById('registerPassword').value = "";

            showLogin();
        }
    });

    // Login event listener
    document.getElementById('login').addEventListener('submit', function (event) {
        event.preventDefault();

        // Always get latest users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || {};

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const messageDiv = document.getElementById('loginMessage');

        if (users[username] && users[username] === password) {
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';

            // Save login session
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInUser', username);

            // Redirect after 1 second
            setTimeout(() => {
                window.location.href = 'https://arronmagsalay24.github.io/myloginportfolio.github/';
                // siguraduhin na meron kang myportfolio.html sa repo mo
            }, 1000);
        } else {
            messageDiv.textContent = 'Invalid username or password.';
            messageDiv.style.color = 'red';
        }
    });

    // Show register form
    function showRegister() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
        document.getElementById('loginMessage').textContent = "";
        document.getElementById('registerMessage').textContent = "";
    }

    // Show login form
    function showLogin() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginMessage').textContent = "";
        document.getElementById('registerMessage').textContent = "";
    }

    // Logout function (call this sa myportfolio.html)
    function logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html'; // balik sa login page
    }
