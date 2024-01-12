import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import JobsDataJson from '../jobs.json';
import { Box, Container, ListItem, Stack } from '@mui/material';

const JobList = () => {
  const [data, setData] = useState({
    jobsList: JobsDataJson.collection,
    totalCount: 2
  });
  const itemsPerPage = 6; // Number of items to display per page
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle page change
  const handlePageChange = (event, value) => {
    // setIsLoading(true);
    // setPage(value);
  };

  return (
    <Stack>
      {
        data.jobsList.map((item, index) => (
          <Container sx={{ border: "1px solid red" }}>
            <Typography><strong>Job Title:</strong> {item['job_title']} </Typography>
            <Typography> <strong>Company:</strong> {item['company']} </Typography>
          </Container>
        ))
      }
    </Stack>
    // <div style={{ marginTop: '20px' }}>
    // <Grid container spacing={2}>
    // {isLoading ? (
    // <Grid item xs={12}>
    // <p>Loading...</p>
    // </Grid>
    // ) : (
    // <>
    // {data.jobsList.length > 0 ? (
    // data.jobsList.map((item, index) => (
    // <Stack direction="row">
    // <ListItem style={{ border: '1px solid #ccc' }}>
    // <strong>Job Title:</strong> {item['job_title']} <br />
    // <strong>Company:</strong> {item['company']}
    // </ListItem>
    // </Stack>
    // ))
    // ) : (
    // <Grid item xs={12}>
    // <Typography>No Data</Typography>
    // </Grid>
    // )}
    // <Grid item xs={12}>
    // <Pagination
    // count={Math.ceil(data.jobsList.length / itemsPerPage)}
    // page={page}
    // onChange={handlePageChange}
    // color="primary"
    // />
    // </Grid>
    // </>
    // )}
    // </Grid>
    // </div>
  );
};

export default JobList;
