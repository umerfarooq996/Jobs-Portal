import { Container, Stack } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchComponent from "../components/searchBar"
import JobList from "../components/jobList"
const Home = () => {
    return (
        <Stack sx={{ alignItems: 'center' }}>
            <Stack sx={{ backgroundColor: "red", width: "80%" }}>
                <Container sx={{ display: "flex", flexDirection: "col", margin: "10px 0px" }}>
                    <SearchComponent
                        iconName={SearchIcon}
                        placeholder="Jobs Title"
                        additionalText="What"
                    />
                    <SearchComponent
                        iconName={FmdGoodIcon}
                        placeholder="City, State"
                        additionalText="Where"
                    />
                </Container>
                <JobList />
            </Stack>
        </Stack>
    )
}
export default Home
