import React from 'react'
import styled from  "styled-components"
import arrow from './assets/arrow.png';

const Container=styled.div`
    box-size: cover;
    margin:0;
    padding:0;
    width:1000px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
background-image: linear-gradient(to right, #ff5722, #ff9800);
   

    .container
{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    
    flex-wrap: wrap; 
    margin-top: auto;
    margin-bottom: auto;
    padding-top: auto;
    padding-bottom: auto;

   
}
.row1{
    text-align: center; 
    margin-left: 10%;
    margin-right: auto;
    margin-top: 150px;
    margin-bottom: auto;
    

}
.row2{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 100px;
  
}
.row1 img{
    margin-top: 60px;
    margin-bottom: 18px;
    width: 130px;
}
.reg{
    background: white;
    display: flex;
    flex-direction:column;
    padding: 100px;
    border: none;
    border-top-left-radius: 20% 50%;
    border-bottom-left-radius: 20% 50%;
    margin-top:150px;
    
    
}
.bt{
    margin-top: 30px;
    margin-left: auto; 
}
.b{
    border: none;
    border-radius: 100px;
    background-color: #ff9800;
    border-radius: 1500px;
    width: 100px;
    height: 35px;
    color: white;
    font-weight: 600;
}
.b1{
    border: none;
    border-radius: 100px;
    border-radius: 1500px;
    width: 100px;
    height: 35px;
    color: black; 
    font-weight: 600;
}

@media (max-width: 768px) {
        .container {
            flex-direction: column;
            
        }

        .row1{
          margin-left: auto;
            margin-right: auto;
            margin-top: -70px;
            margin-bottom: 50px;
        }
        .row2 {
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            margin-bottom: 50px;
        }

        .reg {
            padding: 50px;
            margin-top: -40px;
        }
    }


`;


const reg = () => {
  return (
<Container>
    <div class="container">
    <div class="row1">
        <img src={arrow} alt=""/>
        <h1>Join Us</h1>
        <p>Subscribe Easy Tutorials Youtube Channel to watch more videos</p>
        <button type="button" class="b1">About Us</button>
    </div>
        <div class="row2">
            <div class="reg">
                <h1>REGISTER HERE</h1>
                <div class="form-group">
                   <form action="#">
                    <label for="Name"><input type="text" placeholder="NAME" required/></label><br/><br/>
                    <label for="Username"><input type="text" placeholder="USER NAME" pattern="[a-z]{8}" required/></label><br/><br/>
                    <label for="Email"><input type="email" placeholder="EMAIL" required/></label><br/><br/>
                    <label for="Password"><input type="password" placeholder="PASSWORD" pattern="[A-Za-z0-9]{8}" required/></label><br/><br/>
                <div class="bt">
                  <label for="submit"><input type="submit" class="b" value="REGISTER"/></label>
                  </div>
                </form>
                </div>
            </div>
     </div>
  </div>
  </Container>
  )
}

export default reg