import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd';
import axios from 'axios';
import constants from '../constants';
import {useHistory} from "react-router-dom"
const CellTable = () => {
    const history = useHistory()
    const [dataSource,setDataSource] = useState([])
    const columns = [
        {
          title: 'Cell',
          dataIndex: 'cell',
          key: 'cell',
        },
        {
          title: 'Subject',
          dataIndex: 'subject',
          key: 'subject',
        },
        {
          title: 'Teacher',
          dataIndex: 'teacher',
          key: 'teacher',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Classroom',
          dataIndex: 'classroom',
          key: 'classroom',
        },
        {
          title: 'Actions',
          dataIndex: 'actions',
          key: 'actions',
          render: (_, record) => (
            <div>
              <Button onClick={() => handleUpdate(record)}>Update</Button>
              <Button danger onClick={() => handleDelete(record)}>Delete</Button>
            </div>
          ),
        },
      ];
      
      const handleUpdate = (record) => {
        console.log(`Update record with key ${record.id}`);
        history.push("/update/"+record.id)
      };
      
      const handleDelete = async(key) => {
         await axios.delete(`${constants.baseUrl}/cells/${key.id}`);
        window.location.reload()
      };

      useEffect(()=>{
        axios.get(constants.baseUrl + '/cells').then((value)=>{
            console.log(value.data)
            let b = []
            for(let a of value.data){
                const d = {
                    id : a["_id"],
                    cell: a['cell'],
                    subject: a['subject'],
                    teacher: a['teacher'],
                    date: a['date'],
                    classroom: a['classroom']
                }
                b.push(d)
            }
            setDataSource(b)
        }).catch(err=>{
          console.log("get cells failed "+err)
        })
      },[])
  return (
     <Table 
     style={{width : 800}}
     dataSource={dataSource} columns={columns} />
  )
}

export default CellTable