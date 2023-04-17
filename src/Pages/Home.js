import { useState } from 'react';
import TimeTable from '../Components/TimeTable';
import styled from 'styled-components';
import { Button, Col, Form, Row, Select, } from 'antd';
import CustomFormItem from '../Components/CustomFormField';
import Title from 'antd/es/typography/Title';
import constants from '../constants';
import CellTable from '../Components/CellTable';
import axios from 'axios';
const { Option } = Select;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
`



const Home = () => {
    const [cell, setCell] = useState("")
  const [subject, setSubject] = useState("")
  const [teacher, setTeacher] = useState("")
  const [day, setDay] = useState("")
  const [classRoom, setClassRoom] = useState("")

  const createSell = async () => {
    const data = {
      cell: cell,
      subject: subject,
      teacher: teacher,
      date: day,
      classroom: classRoom
    }
    console.log(data)
    await axios.post(constants.baseUrl + '/cells', data)
      .then(response => {
        console.log('Cell created:', response.data);

      })
      .catch(error => {
        console.error('Error creating cell:', error);
      });
  }
  return (
    <Wrapper>
   
    <FormContainer>
      <Title level={4}>Create Table Cell</Title>
      <Form
        title='Create Table Cell'
        style={{ width: "80vw", margin: 0, padding: 0 }}
      >

        <Row>
          <CustomFormItem
            onChange={(val) => { setCell(val.target.value) }}
            label={"Cell"}
            message={"Please enter message"}
            colspan={8}
            required={true}
          />
          <Col span={4} />
          <CustomFormItem
            onChange={(val) => { setTeacher(val.target.value) }}
            label={"Teacher"}
            message={"Please enter teacher name"}
            colspan={8}
            required={true}
          />
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item
              label="Subject"
            >
              <Select

                onChange={(val) => { setSubject(val) }}>
                <Option value="Physics">Physics</Option>
                <Option value="Combine Maths">Combine Maths</Option>
                <Option value="Chemistry">Chemistry</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4} />
          <Col span={8}>
            <Form.Item
              label="Day"
            >
              <Select
                onChange={(val) => { setDay(val) }}
              >
                {
                  constants.days.map((day, index) => {
                    return <Option value={day} key={index} >{day}</Option>
                  })
                }
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <CustomFormItem
            colspan={20}
            label={"Class Room"}
            onChange={(val) => { setClassRoom(val.target.value) }}
            message={"Please enter class rooom"}
            required={true}
          />
        </Row>
        <Row>
          <Col span={20}>
            <Button
              onClick={(e) => { createSell()}}
              type='primary'>
              Create Cell
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
    <Title level={4}>
      Cells
    </Title>
    <CellTable />
    <TimeTable />
 
  </Wrapper>
  )
}

export default Home