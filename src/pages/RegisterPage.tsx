import Register from '../components/forms/Register'
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

function RegisterPage() {
    return (
      <Page>
          <Register/>
      </Page>
    );
  }
  
  export default RegisterPage;
  