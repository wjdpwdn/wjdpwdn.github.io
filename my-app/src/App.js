
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
  let [title, setTitle]=useState(['국수 맛집','돈까스 맛집','짜장면 맛집','다음 맛집은?'])
  let [mainText, setMainText]=useState(['국수 맛집','돈까스 맛집','짜장면 맛집','비밀'])
  let [good, setGood]=useState([0,0,0,0])
  let [modal, setModal]=useState([false,false,false])
  let [input, setInput]=useState('')
  let [textarea, setTextarea]=useState('')

  return (
    <div className="App">
      <MainNav>
        <h1>myBlog</h1>
      </MainNav>

      <container>
        제목<input type={'text'} onChange={(e)=>{setInput(e.target.value)}}/><br/>
        내용<textarea type={'text'} onChange={(e)=>{setTextarea(e.target.value)}}/><br/>
        <button onClick={()=>{

          let titleCopy = [...title]; // 리엑트 특성상 변화를 감지해야하기 때문에 '수정하고자 하는 배열'을 얕은 복사 해준다.
          titleCopy.unshift(input); // 얕은 복사한 배열앞에 setInput state에 입력된 값을 넣어준다.
          setTitle(titleCopy) // [Title state] 를 [setTitle 함수] 를 이용하여 [새로운 값이 추가된 얕은 복사한 배열] 로 바꾸어준다.
          setInput('')
          setInput.reset()

          let textCopy = [...mainText];
          textCopy.unshift(textarea);
          setMainText(textCopy)
          setTextarea('')

        }}>게시</button>
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
            {(modal[i] === true) ? <Modal title={title} mainText={mainText} i={i} setTitle={setTitle}/> : null}
            <hr/>
          </div>
          )
        })}
      </main>
    </div>
  );
}

function Modal( {title , mainText , i , setTitle } ) {
  return(
    <MainModal>
      <h4>{title[i]}</h4>
      <p>날짜</p>
      <p>{mainText[i]}</p>
      <button onClick={()=>{
        let copy = [...title];
        copy.splice(i,1);
        setTitle(copy)
      }}>삭제하기</button>
    </MainModal>
  )
}

export default App;
