import React from 'react';

export default function Login() {
  return (
    <>
       <main className="form-signin w-50 m-auto text-center">
            <form>
                <img className="mb-8" src="assets/img/specials-2.png" alt="" width="100" height="100" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-50 btn btn-md btn-primary" type="submit"> <a href="/home">Sign in</a> </button>
                <button className="w-50 btn btn-md btn-danger" type="submit"><a href="/register">Sign Up</a> </button>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>
        </main>
    </>
  )
}
