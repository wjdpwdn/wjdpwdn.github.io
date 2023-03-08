
import { useState } from "react";
import styled from "styled-components"

const MainNav = styled.nav`
background-color : black;
color : white;
display: flex;
width:100%;
padding-left: 20px;
`
const MainModal = styled.div`
  margin-top : 20px;
  padding : 20px;
  background : #eee;
  text-align : left;
`
const GoodButton = styled.button`
  border : none;
  background : none;
  &:hober{
    background-color : black;
  }
`
function App() {
  let [title, setTitle]=useState(['국수 맛집','돈까스 맛집','짜장면 맛집'])
  let [good, setGood]=useState([0,0,0])
  let [modal, setModal]=useState([false,false,false])

  

  return (
    <div className="App">
      <MainNav>
        <h1>myBlog</h1>
      </MainNav>
      <container>
        제목<input type={'text'}/><br/>
        내용<input type={'text'}/><br/>
        <button>게시</button>
      </container>
      <main>
        {title.map((a,i)=>{
          return(
            <div>
            <h3 onClick={()=>{let copyModal = [...modal]
                                  copyModal[i] = !copyModal[i]
                                  setModal(copyModal)}}>{ title[i] }</h3>
            <GoodButton
            onClick={()=>{let copyGood = [...good]
                              copyGood[i]++
                              setGood(copyGood)}
            }
            >
            👍</GoodButton>
            <span>{ good[i] }</span>
            <p>2022.02.02</p>
            {modal[i] === true ? <Modal title={title} i={i}/> : null}
            <hr/>
          </div>
          )
        })}
        
      </main>
    </div>
  );
}

function Modal( {title , i } ) {
  return(
    <MainModal>
      <h4>{title[i]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </MainModal>
  )
}

export default App;
