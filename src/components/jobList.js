import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { Box, Button, CircularProgress, Container, ListItem, Stack, TablePagination } from '@mui/material';
import axios from 'axios';
import { BACKEND_URL } from "../config/config"
import { useNavigate } from 'react-router-dom';
const JobList = ({ title, location }) => {
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({ jobs: [], totalCount: 0 });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const loadJobs = async () => {
    setLoading(true)
    try {
      const resp = await axios.get(`${BACKEND_URL}/api/getJobs`, {
        params: { title, location, page, limit: rowsPerPage },
      })
      setData(resp.data)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }
  useEffect(() => {
    // loadJobs()

  }, [title, location, rowsPerPage, page])
  const handleChangePage = () => {
    setPage(page + 1)
  }
  const handleChangeRowsPerPage = (value) => {
    setRowsPerPage(value)
  }
  const handleJobClick = (item) => {
    navigate(`/job/${item._id}`, { state: { jobData: item } });
    
  }
  return (
    <Stack sx={{ marginTop: '10px' }}>
      {
        loading ? <CircularProgress /> :
          <>
            <Typography sx={{ alignSelf: 'flex-end' }}>Total Jobs {data.totalCount}</Typography>
            {
              data.jobs.map((item, index) => (
                <Container sx={{ border: '1px solid #eee', borderRadius: 1, marginTop: '10px', padding: "10px 0px",cursor:'pointer' }} key={{ index }} onClick={() => handleJobClick(item)}>
                  <Box sx={{ display: "flex", flexDirection: 'col', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                    <Typography>{item.location}</Typography>
                  </Box>
                  <Typography>{item.company}</Typography>
                  <Typography variant="body1">
                    {item.description}
                  </Typography>
                </Container>
              ))
            }
            {
              data.totalCount > 0 &&
              <TablePagination
                component="div"
                count={data.totalCount}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) => handleChangeRowsPerPage(event.target.value)}
                sx={{ margin: "10px 0px", alignSelf: 'center' }}
              />
            }
          </>
      }
    </Stack>

  );
};

export default JobList;
