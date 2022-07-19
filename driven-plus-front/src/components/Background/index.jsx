import styled from "styled-components";

function Background({children}){
  return (
    <Container>
      {children}
    </Container>
  )
}


const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  background-color: ${props => props.theme.background.main}
`

export default Background;