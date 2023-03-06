
import { useState } from "react";
import styled from "styled-components"

const MainNav = styled.nav`
background-color : black;
color : white;
display: flex;
width:100%;
padding-left: 20px;
`
const List = styled.li`
 padding-left : 20px;
 text-align : left;
 border-bottom: 1px solid grey;
 list-style : none;
`

function App() {
  let [title, setTitle]=useState('title')

  return (
    <div className="App">
      <MainNav>
        <h1>myBlog</h1>
      </MainNav>
      <main>
        <List>
          <h3>{title}</h3>
          <p>2022.02.02</p>
        </List>
        <List>
          <h3>{title}</h3>
          <p>2022.02.02</p>
        </List>
      </main>
    </div>
  );
}

export default App;
