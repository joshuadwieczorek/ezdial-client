import Login from '../components/forms/Login'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function LoginPage() {
    return (
      <Page>
          <Login/>
      </Page>
    );
  }
  
  export default LoginPage;
  