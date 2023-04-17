import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom"
import constants from '../constants';
import styled from 'styled-components';
import { Form, Row, Col, Select, Button } from 'antd';
import CustomFormItem from '../Components/CustomFormField';
const { Option } = Select;

const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const UpdateForm = () => {
    const history = useHistory()
    const params = useParams()
    const _id = params.id;
    const [cell, setCell] = useState("")
    const [subject, setSubject] = useState("")
    const [teacher, setTeacher] = useState("")
    const [day, setDay] = useState("")
    const [classRoom, setClassRoom] = useState("")

    useEffect(() => {
        axios.get(`${constants.baseUrl}/cells/${_id}`).then((data) => {
            setCell(data.data["cell"])
            setSubject(data.data["subject"])
            setTeacher(data.data["teacher"])
            setDay(data.data["date"])
            setClassRoom(data.data["classroom"])
        })
    }, [_id])


    const updateCell = async () => {
        const data = {
            cell: cell,
            subject: subject,
            teacher: teacher,
            date: day,
            classroom: classRoom
        }
        console.log(data)
        await axios.put(constants.baseUrl + '/cells/' + _id, data)
            .then(response => {
                console.log('Cell created:', response.data);
                history.push("/")
            })
            .catch(error => {
                console.error('Error creating cell:', error);
            });
    }


    return (
        <Container>
            <Title level={3}>Update Cell</Title>
            <Form
                title='Create Table Cell'
                style={{ width: "80vw", margin: 0, padding: 0 }}
            >

                <Row>
                    <CustomFormItem
                        value={cell}
                        onChange={(val) => { setCell(val.target.value) }}
                        label={"Cell"}
                        message={"Please enter message"}
                        colspan={8}
                        required={true}
                    />
                    <Col span={4} />
                    <CustomFormItem
                        value={teacher}
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
                                value={subject}
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
                                value={day}
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
                        value={classRoom}
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
                            onClick={(e) => { updateCell() }}
                            type='primary'>
                            Update Cell
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default UpdateForm