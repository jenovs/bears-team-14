import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="head-field has-text-centered">
              <h2 className="is-size-4">Log in to Jobbatical</h2>
            </div>
            <div className="box">
              <div className="field has-addons">
                <a
                  href="https://web.facebook.com"
                  className="button is-large is-fullwidth facebook-btn"
                >
                  <span className="icon is-medium">
                    <i className="fa fa-facebook-square" />
                  </span>
                  <span>Log in with Facebook</span>
                </a>
              </div>

              <div className="field has-addons">
                <a
                  href="https://google.com"
                  className="button is-large is-fullwidth google-btn"
                >
                  <span className="icon is-medium">
                    <i className="fa fa-google" />
                  </span>
                  <span>Log in with Google</span>
                </a>
              </div>

              <div className="field has-addons">
                <a
                  href="https://www.linkedin.com"
                  className="button is-large is-fullwidth linkedin-btn"
                >
                  <span className="icon is-medium">
                    <i className="fa fa-linkedin-square" />
                  </span>
                  <span>Log in with LinkedIn</span>
                </a>
              </div>

              <div className="divider line">OR</div>

              <form action="#">
                <div className="field">
                  <label className="label" htmlFor="email">
                    Your Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="password"
                      name="password"
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                </div>

                <div className="field has-addons">
                  <button
                    type="submit"
                    className="button is-fullwidth is-large is-primary"
                  >
                    <span>LOG IN</span>
                    <span className="icon is-medium">
                      <i className="fa fa-sign-in" />
                    </span>
                  </button>
                </div>
              </form>
              <hr />
              <div className="columns">
                <div className="column">
                  <Link className="is-size-10" to="/forgot-password">
                    Forgot password?
                  </Link>
                </div>
                <div className="column">
                  <Link className="is-size-10" to="/support">
                    Need other help?
                  </Link>
                </div>
                <div className="column">
                  <Link className="is-size-10" to="join">
                    Sugn up here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
