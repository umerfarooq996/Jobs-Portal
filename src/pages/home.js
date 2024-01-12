import { Chip, Container, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchComponent from "../components/searchBar"
import JobList from "../components/jobList"
import axios from 'axios';
import { BACKEND_URL } from "../config/config"
const Home = () => {
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState('')
    return (
        <Stack sx={{ alignItems: 'center' }}>
            <Stack sx={{ width: "80%" }}>
                <Container>

                    <Container sx={{ display: "flex", flexDirection: "col" }}>
                        <SearchComponent
                            iconName={SearchIcon}
                            placeholder="Jobs Title"
                            additionalText="What"
                            setter={setTitle}
                            value={title}
                        />
                        <SearchComponent
                            iconName={FmdGoodIcon}
                            placeholder="City, State"
                            additionalText="Where"
                            setter={setLocation}
                            value={location}
                        />

                    </Container>
                    <Container>
                        {
                            ["full stack", "python", "react"].map((item, index) => (
                                <Chip label={item} sx={{ marginRight: '10px' }} key={index} />
                            ))
                        }
                    </Container>
                </Container>
                <JobList location={location} title={title}/>
            </Stack>
        </Stack>
    )
}
export default Home
