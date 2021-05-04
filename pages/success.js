import styled from 'styled-components'

export default function Success() {
 const Success = styled.div`
  margin: 10rem auto;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  opacity: 80%;
 `
 const Mark = styled.mark`
  padding: 1rem;
 `

 return (
  <Success>
   <Mark>Form successfully submitted!</Mark>
  </Success>
 )
}
