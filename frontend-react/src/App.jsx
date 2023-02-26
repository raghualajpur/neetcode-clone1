import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import OurNavbar from './Components/Navbar'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Badge from "react-bootstrap/Badge"

function App() {
  const [number,setNumber]=useState(0)
  const [problemList,setproblemList]=useState([])
  const increase=()=>{
    setNumber(number+1)
  }
  useEffect(()=>{
    fetch(" https://bz-neetcode-clone.cyclic.app/api/problems?sheet=NeetCode%20All")
    .then(function(res){
      return res.json()
    })
    .then(function(data){
      setproblemList(data)
    })
  },[])
  return (
    <div className="App">
      <OurNavbar></OurNavbar>
      <Container>
      <div style={{ minWidth: "300px", overflowY: "scroll" }}>
                    <Table
                        striped
                        bordered
                        hover
                        style={{ textAlign: "center" }}
                    >
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Star</th>
                                <th>Problem</th>
                                <th>Difficulty</th>
                                <th>Video Solution</th>
                                <th>Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {problemList.map((el) => {
                                return  <tr key={el._id}>
                                <td>
                                    <Form.Check type={"checkbox"} id={`default-checkbox`} />
                                </td>
                                <td>
                                    <i className="fa-regular fa-star"></i>
                                </td>
                                <td style={{ textAlign: "left" }}>
                                    <a href={el.url} target={"_blank"}>
                                        {el.title}
                                    </a>
                                </td>
                                <td>
                                    <Badge
                                        bg={
                                            el.difficulty === "Easy"
                                                ? "success"
                                                : el.difficulty === "Medium"
                                                ? "warning"
                                                : "danger"
                                        }
                                    >
                                        {el.difficulty}
                                    </Badge>
                                </td>
                                <td>
                                    <Button variant="outline-primary">
                                        {" "}
                                        <i className="fa-solid fa-video"></i>
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="primary"> Python </Button>
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
      </Container>
    </div>
  )
}

export default App