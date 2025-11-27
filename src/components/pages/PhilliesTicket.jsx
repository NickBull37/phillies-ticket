import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { stadiumOne, stadiumTwo, gram, philliesText, philliesLogo, barcode } from '../../utils/constants';

const PageWrapper = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8rem',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
        flexDirection: 'column',
        padding: '5rem 0',
    },
}));

const AthleticText = styled(Typography)(() => ({
    fontFamily: 'Athletic',
    fontSize: '1.125rem'
}));

const AnandaText = styled(Typography)(() => ({
    fontFamily: 'Ananda',
    fontSize: '1.65rem'
}));

const QuelqueText = styled(Typography)(() => ({
    fontFamily: 'Quelque',
    fontSize: '1.65rem',
    color: '#E81828',
    fontSize: '1.875rem',
    lineHeight: 1,
    textAlign: 'center',
    marginTop: '4px'
}));

const SwanseaText = styled(Typography)(() => ({
    fontFamily: 'Swansea',
    fontSize: '1.65rem',
    color: '#E81828',
    fontSize: '1.875rem',
    lineHeight: 1.14,
    textAlign: 'center',
    fontWeight: '600'
}));

const AnandaNameText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Ananda',
    fontSize: '1.65rem',
    color: '#E81828',
    fontSize: '1.5rem',
    lineHeight: 1.4,
    textAlign: 'center',
}));

const RedStack = styled(Stack)(() => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#E81828',
    color: '#fff',
    gap: 4
}));

const WhiteStack = styled(Stack)(() => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#E81828',
    height: '100%',
    width: '100%',
    gap: 4
}));

const PhilliesTicket = () => {

    return (
        <PageWrapper>

            {/* FRONT */}
            <Stack
                sx={{
                    height: '700px',
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >

                <Box
                    sx={{
                        minHeight: '100px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>08</AthleticText>
                    </RedStack>
                    <WhiteStack>
                        <AthleticText>ROW</AthleticText>
                        <AthleticText>02</AthleticText>
                    </WhiteStack>
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>33</AthleticText>
                    </RedStack>
                </Box>

                <Stack
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${stadiumOne})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 0 20px 0',
                    }}
                >
                    <AthleticText
                        sx={{
                            width: '100%',
                            fontSize: '0.875rem',
                            textAlign: 'center',
                            color: '#E81828',
                            background: 'rgba(255, 255, 255, 0.75)'
                        }}
                    >
                        CELEBRATING THE LIFE OF
                    </AthleticText>

                    <Box
                        sx={{
                            height: '270px',
                            width: '150px',
                            border: '6px solid #fff',
                            backgroundImage: `url(${gram})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            boxShadow: '12px 12px 18px rgba(0, 0, 0, 0.75)'
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            height: '70px',
                            width: '185px',
                            backgroundImage: `url(${philliesText})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            marginTop: '-85px'
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            width: '100%',
                            borderTop: '3px solid #E81828',
                            borderBottom: '3px solid #E81828',
                            background: 'rgba(255, 255, 255, 0.65)',
                            padding: '2px 0',
                        }}
                    >
                        <QuelqueText>
                            Joan
                        </QuelqueText>
                        <QuelqueText>
                            Van Horn
                        </QuelqueText>
                    </Box>
                </Stack>

                <Box
                    sx={{
                        minHeight: '100px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>11</AthleticText>
                    </RedStack>
                    <WhiteStack>
                        <AthleticText>ROW</AthleticText>
                        <AthleticText>21</AthleticText>
                    </WhiteStack>
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>25</AthleticText>
                    </RedStack>
                </Box>
            </Stack>


            {/* FRONT */}
            <Stack
                sx={{
                    height: '700px',
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >

                <Box
                    sx={{
                        minHeight: '100px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>08</AthleticText>
                    </RedStack>
                    <WhiteStack>
                        <AthleticText>ROW</AthleticText>
                        <AthleticText>02</AthleticText>
                    </WhiteStack>
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>33</AthleticText>
                    </RedStack>
                </Box>

                <Stack
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${stadiumOne})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 0 20px 0',
                    }}
                >
                    <AthleticText
                        sx={{
                            width: '100%',
                            fontSize: '0.875rem',
                            textAlign: 'center',
                            color: '#E81828',
                            background: 'rgba(255, 255, 255, 0.75)'
                        }}
                    >
                        CELEBRATING THE LIFE OF
                    </AthleticText>

                    <Box
                        sx={{
                            height: '270px',
                            width: '150px',
                            border: '6px solid #fff',
                            backgroundImage: `url(${gram})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            boxShadow: '12px 12px 18px rgba(0, 0, 0, 0.75)'
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            height: '70px',
                            width: '185px',
                            backgroundImage: `url(${philliesText})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            marginTop: '-85px'
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            width: '100%',
                            borderTop: '3px solid #E81828',
                            borderBottom: '3px solid #E81828',
                            background: 'rgba(255, 255, 255, 0.65)',
                            padding: '1px 0',
                        }}
                    >
                        <SwanseaText>
                            Joan
                        </SwanseaText>
                        <SwanseaText>
                            Van Horn
                        </SwanseaText>
                    </Box>
                </Stack>

                <Box
                    sx={{
                        minHeight: '100px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>11</AthleticText>
                    </RedStack>
                    <WhiteStack>
                        <AthleticText>ROW</AthleticText>
                        <AthleticText>21</AthleticText>
                    </WhiteStack>
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>25</AthleticText>
                    </RedStack>
                </Box>
            </Stack>



            {/* FRONT */}
            <Stack
                sx={{
                    height: '700px',
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >

                <Box
                    sx={{
                        minHeight: '100px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>08</AthleticText>
                    </RedStack>
                    <WhiteStack>
                        <AthleticText>ROW</AthleticText>
                        <AthleticText>02</AthleticText>
                    </WhiteStack>
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>33</AthleticText>
                    </RedStack>
                </Box>

                <Stack
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${stadiumOne})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 0 20px 0',
                    }}
                >
                    <AthleticText
                        sx={{
                            width: '100%',
                            fontSize: '0.875rem',
                            textAlign: 'center',
                            color: '#E81828',
                            background: 'rgba(255, 255, 255, 0.75)'
                        }}
                    >
                        CELEBRATING THE LIFE OF
                    </AthleticText>

                    <Box
                        sx={{
                            height: '270px',
                            width: '150px',
                            border: '6px solid #fff',
                            backgroundImage: `url(${gram})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            boxShadow: '12px 12px 18px rgba(0, 0, 0, 0.75)'
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            height: '70px',
                            width: '185px',
                            backgroundImage: `url(${philliesText})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            marginTop: '-85px'
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            width: '100%',
                            borderTop: '3px solid #E81828',
                            borderBottom: '3px solid #E81828',
                            background: 'rgba(255, 255, 255, 0.65)',
                            padding: '4px 0 1px 0',
                        }}
                    >
                        <AnandaNameText>
                            Joan
                        </AnandaNameText>
                        <AnandaNameText>
                            Van&nbsp;&nbsp;Horn
                        </AnandaNameText>
                    </Box>
                </Stack>

                <Box
                    sx={{
                        minHeight: '100px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>11</AthleticText>
                    </RedStack>
                    <WhiteStack>
                        <AthleticText>ROW</AthleticText>
                        <AthleticText>21</AthleticText>
                    </WhiteStack>
                    <RedStack>
                        <AthleticText>SEC</AthleticText>
                        <AthleticText>25</AthleticText>
                    </RedStack>
                </Box>
            </Stack>


            {/* BACK */}
            <Stack
                sx={{
                    height: '700px',
                    width: '200px',
                    backgroundImage: `url(${stadiumTwo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '4rem 1rem 2rem 1rem',
                    gap: 4
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            height: '120px',
                            width: '120px',
                            backgroundImage: `url(${philliesLogo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >

                    </Box>
                </Box>

                <Stack
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <AnandaText>
                        "Around the
                    </AnandaText>
                    <AnandaText>
                        bases of
                    </AnandaText>
                    <AnandaText>
                        life and
                    </AnandaText>
                    <AnandaText>
                        safely home."
                    </AnandaText>
                </Stack>

                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1
                    }}
                >
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            height: '50px',
                            width: '150px',
                            backgroundImage: `url(${barcode})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </Box>
                </Box>
            </Stack>
        </PageWrapper>
    );
}

export default PhilliesTicket;