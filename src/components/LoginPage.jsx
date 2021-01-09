
function LoginPage() {
    return (
        <div className="view">
            <div className="logincontainer">
                <label for="username">Username</label>
                <input type="text" placeholder="Enter Username" name="username" required />
                <label for="password">Password</label>
                <input type="password" placehholder="Enter Password" name="password" required />
                <button type="submit">Login</button>
            </div>
        </div>

    )
}

export default LoginPage;