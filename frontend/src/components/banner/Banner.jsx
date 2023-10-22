
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: 100%; 
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    background: #FFFFFF;
    font-weight:600;
    padding:10px;
`;

const Banner = () => {

    return (
        <Image>
            <SubHeading>Create your Space</SubHeading>
        </Image>
    )
}

export default Banner;