import styled from 'styled-components'

export default function Success() {
  
  const Success = styled.div`
    margin: 5rem auto;
    display: flex;
    justify-content: center;
  `

  return (
        <Success>
          <mark>Form successfully submitted!</mark>
        </Success>
      )
  }  