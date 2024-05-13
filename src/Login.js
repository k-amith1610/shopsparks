import styled from "styled-components";

const Login = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .textcolor {
        color: blue;
      }

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Login</h2>

      <div className="container">
        <div className="contact-form">
          <form action="/login" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              autoComplete="off"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              required
            />
            <h3>
              Don't have an account ?{" "}
              <a href="/register">
                <span className="textcolor">sign up !</span>
              </a>
            </h3>

            <input type="submit" value="Log in" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
