import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { useRecoilState } from 'recoil';
import { userState } from "../components/UserState"

function List() {



  const [user, setUser] = useRecoilState(userState)
  const [search, setSearch] = useState("")
  const [filterUser, setFilterUser] = useState([])
  



  const handleClick = (row) => {
    console.log(row)
    alert("unable to Redirect")
  }


  const getUser = async () => {
    try {
      const response = await axios.get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      setUser(response.data)
      setFilterUser(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  const colums = [
    {
      name: "First Name",
      selector: row => row.first_name,
      // Cell: e =><Link to={`/details/${e.value}`}> {e.value} </Link>,

      sortable: true,

    },
    {
      name: "Last Name",
      selector: row => row.last_name,
      sortable: true
    },
    {
      name: "Age",
      selector: row => row.age,
      sortable: true
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true
    },
    {
      name: "Website",
      selector: (row) => <a href='row.web' target="_blank">{row.web}</a>,
      sortable: true
    }
  ]

  useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    const result = user.filter((row)=>{
      return row.first_name.toLowerCase().match(search.toLowerCase())
    })
    setFilterUser(result)
  }, [search,user])

  return (

<div>


    <DataTable
      title="Users"
      columns={colums}
    data={filterUser}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='450px'
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search by first or last name" className="form-control" style={{width:"25%"}} />
      }
      subHeaderAlign="Left"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onRowClicked={handleClick}
      />
        
       

      </div>
  )
}

export default List
