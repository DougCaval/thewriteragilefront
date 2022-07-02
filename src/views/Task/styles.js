import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:  #121212;
`
 

export const Form = styled.div`

width : 50%;
margin-botton: 70px;
`

export const TypeIcons = styled.div`
width : 100%;
background: none;
display: flex;
justify-content: center;

.inative{
    opacity: 0.5;
}

button{
    background: none;
    border: none;
}

img {
    width: 70px;
    height:70px;
    margin: 10px;
    cursor: pointer;
}

`

export const Input = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0 ;
span{
    color: #707070;
    margin-bottom: 5px;
    
}
input{
    font-size: 16px;
    padding: 15px;
    border: none ;
    border-bottom: 1px solid #EE6B26
}
img{
    width: 20px;
    height:20px;
    position: relative;
    left: 5%;
    bottom: 80px;
    
}
span{
    color: #000;
    margin: 5px;
    
}



`

export const TextArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0;

span{
    color: #000;
    margin: 5px;
    
}

textarea{
    font-size: 16px;
    padding: 15px;
    border: 1px solid #696969 ;
    
}
`

export const Options =  styled.div`
 color: #EE6B26;
 font-size: 20px;
 display: flex;
 justify-content: space-between;

 button {
     font-size: 20px;
     font-weight: bold;
     border: none;
     background: none;
     color: #20295F;

     &:hover{
         cursor:pointer;
         opacity: 0.7;
     }
 }

 div{
     display: flex:
     align-items: center;
     color: #EE6B26;
     font-size: 20px;
     

 }


`

export const Save =  styled.div`

width: 100%;
margin-top:20px;
margin-bottom:60px;
button{
    width: 100%;
    border: none;
    background: #EE6B26;
    color: #FFF;
    font-size: 20px;
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    &:hover{
        opacity:0.7;
    }

}

`
export const Pdf =  styled.div`

width: 100%;
margin-top:0px;
margin-bottom:80px;
button{
    width: 100%;
    border: none;
    background: #000080;
    color: #FFF;
    font-size: 20px;
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    &:hover{
        opacity:0.7;
    }

}


`


