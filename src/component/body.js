import React, {useState} from 'react'
import './body.css'
import { MyCard } from './bodyElement';
import { useTheme } from '@mui/material/styles';
import Data from "../data/info.json";
import CardContent from "@mui/material/CardContent";
import img from '../images/fork.svg'
import img2 from '../images/star.svg'
import ReactPaginate from "react-paginate"
import './navbar.css'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Body = () => {
    const theme = useTheme();
    const [users, setUsers] = useState(Data.slice(0,30));
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;

    
    const displayUsers = users.slice(pagesVisited, pagesVisited+usersPerPage).map(post=>{
        return(
            
            <CardContent sx={{width:300, height:350}} className="card" key={post.id} >
                <MyCard href={post.html_url} target="_blank">
                <div className='cardContainer'>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {post.owner.login}
                </Typography>
                <Typography variant="h5" component="div">
                    {post.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.language}
                </Typography>
                <Typography variant="body2">
                    {post.description}
                    
                    <br />
                    <br />
                    <img src={img2} style={{width:"15px",height:"15px"}}/>{post.stargazers_count} &nbsp;&nbsp;&nbsp;
                    <img src={img} style={{width:"15px",height:"15px"}}/> {post.forks_count}
                </Typography>
                </div>
                </MyCard>
            </CardContent>
            
        )
    })

    const pageCount = Math.ceil(users.length/usersPerPage);
    const changePage = ({selected}) =>{
        setPageNumber(selected)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

    }

  return (
    <>
    <div className='body'>
            
        {displayUsers}
        <br/><br/><br/><br/><br/>
        <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previosBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"paginationActive"}
        />
    </div>
    </>
  )
}

export default Body
