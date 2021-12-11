import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Box } from "@material-ui/core";
import { Logo } from '../components/ui/Logo';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function DialPage() {
  return (
    <Page>
        <Logo />

        <h1>Dial page</h1>
        
        <div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '75vw'
          }}>
          <div>
            <AddBoxIcon style={{
              fontSize: '5rem'
            }}/>
          </div>
          <div>
            <AddBoxIcon style={{
              fontSize: '5rem'
            }}/>
          </div>
          <div>
            <AddBoxIcon style={{
              fontSize: '5rem'
            }}/>
          </div>
        </div>
        </div>

        <div style={{
          width: '75vw',
          marginBottom: '15px'
        }}>
        <Button 
          variant="outlined" 
          color="primary"
          fullWidth
          size='large'
          >
          Dial
        </Button>
        </div>

        <div>
        <Box>
            <ButtonGroup 
              size="large" 
              color="primary" 
              aria-label="large outlined primary button group"
              fullWidth
              style={{
                width: '75vw'
              }}>
              <Button href="/register">
                <PersonAddIcon/>
              </Button>
              <Button href="/login">
                <LockOpenIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </div>

    </Page>
  );
}

export default DialPage;
