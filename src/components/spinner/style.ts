import styled from 'styled-components'

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 10px;
 div {
  position: absolute;
  top: 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #f4f4f4;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
 div:nth-child(1) {
  left: 10px;
  animation: lds-ellipsis1 0.6s infinite;
}
div:nth-child(2) {
  left: 10px;
  animation: lds-ellipsis2 0.6s infinite;
}
div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

`