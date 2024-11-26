import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

const SearchMovieModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/*확인하기 위해 true로 해두었음 나중에 open으로 변경 */}
            <Modal open={true} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        height: 'auto',
                        bgcolor: colors.navy_gray,
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#fff' }}>
                        오랜만이에요! 로그인하고
                        <br />
                        영화에 대한 생각 공유해주세요!
                    </Typography>
                    <img
                        style={{ width: '150px', marginBottom: '20px' }} // 로고
                        src={'public/assets/logo.svg'}
                        alt="로고"
                    />
                    {/*네이버 버튼*/}
                    <Button
                        variant="contained"
                        sx={{
                            width: '100%',
                            mb: 2,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            backgroundColor: '#03C75A',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#028a3b',
                            },
                        }}
                        onClick={handleNaverLogin}
                    >
                        네이버로 계속하기
                    </Button>

                    {/*구글 버튼*/}
                    <Button
                        variant="contained"
                        sx={{
                            width: '100%',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #ccc',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                            },
                        }}
                        onClick={handleGoogleLogin}
                    >
                        구글로 계속하기
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default SearchMovieModal;