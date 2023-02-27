import React from 'react'

const LogInPage = () => {
  return (
    <div>
      <section className="auth-section">
        <h2 className="auth-title">Log In</h2>
        <form action="">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </form>
      </section>
    </div>
  );
}

export default LogInPage