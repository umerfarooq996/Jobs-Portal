import React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const SearchContainer = styled('div')({
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#f0f0f0',
	borderRadius: 4,
	padding: '8px',
});

const SearchIconWrapper = styled('div')({
	marginRight: '8px',
});

const SearchComponent = ({ iconName, placeholder, additionalText }) => {
	return (
		<SearchContainer>
			{additionalText && <div>{additionalText}</div>}
			<InputBase
				placeholder={placeholder}
				fullWidth
				inputProps={{ 'aria-label': 'search' }}
				/>
				<SearchIconWrapper>
					{iconName && React.createElement(iconName)}
				</SearchIconWrapper>
		</SearchContainer>
	);
};

export default SearchComponent;
