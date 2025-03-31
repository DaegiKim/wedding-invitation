import React, {useEffect, useState} from 'react';
import {Box, Container, Divider, Grid, IconButton, Paper, Stack, Typography,} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar from '@mui/material/Snackbar';

import weddingBells from './assets/images/wedding-bells.png';
import loveLetter from './assets/images/love-letter.png';
import introVideo from './assets/videos/intro.mov';
import outroVideo from './assets/videos/outro.mov';
import gallery1 from './assets/images/gallery1.jpeg';
import gallery2 from './assets/images/gallery2.jpeg';
import gallery3 from './assets/images/gallery3.jpeg';
import gallery4 from './assets/images/gallery4.jpeg';

function logConsoleMessage() {
  console.log(
    `%c✨ 개발자들이란, 이런 걸 보고 웃는다죠? ✨`,
    'color: #F2C94C; background-color: #1B241B; font-size: 16px; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
  );

  console.log(
    `%c\
    https://0505.wedding
    
    이 청첩장은 손으로 쓰듯,
    한 줄 한 줄 마음을 담아 만든 코드입니다.
    감성은 콘솔에도 머뭅니다 💻
    
    김대기 ᐧ 이슬의 결혼식에
    개발자의 방식으로 오신 걸
    환영합니다 💍`,
    'color: #5C6F5B; font-family: "Gowun Batang", serif; font-size: 13px; line-height: 1.8;'
  );

  console.log(
    `%c🌿 From developer with love. – devin.kim`,
    'color: #7BA488; font-size: 12px; font-style: italic; margin-top: 8px;'
  );
}

function App() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState('');

  useEffect(() => {
    logConsoleMessage();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAccount(text);
      setSnackbarOpen(true);
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', bgcolor: '#1F2B20' }}>
      {/* 🎥 비디오 + 오버레이 텍스트 */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
            transform: 'scale(1.8)',
            transformOrigin: 'center center',
          }}
        >
          <source src={introVideo} type="video/mp4" />
        </video>

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F2C94C',
            textAlign: 'center',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
          }}
        >
          <img src={weddingBells} style={{ width: '36px', marginBottom: 8 }} />
          <Typography variant="h5" gutterBottom>
            <strong>김대기</strong> ᐧ <strong>이슬</strong> 결혼합니다!
          </Typography>
          <Typography variant="subtitle1">
            2025년 5월 5일 월요일 오후 5시
          </Typography>
        </Box>
      </Box>

      {/* 📄 본문 */}
      <Box sx={{ bgcolor: '#1F2B20', py: { xs: 6, sm: 8 } }}>
        <Container sx={{ textAlign: 'center', color: '#FAF3E0', px: { xs: 3, sm: 5 } }}>
          <Typography variant="body1" sx={{ fontWeight: 500, mb: 5 }}>
            이슬이랑 노는 게 제일 좋은 대기,<br />
            대기랑 함께하는 게 가장 즐거운 이슬,<br />
            매일 보는 것도 부족해서,<br />
            평생을 함께하기로 했습니다.
          </Typography>

          <Divider
            sx={{ backgroundColor: '#F2C94C', width: '40%', mx: 'auto', my: { xs: 4, sm: 5 }, opacity: 0.5 }}
          />

          <Typography variant="body1" sx={{ opacity: 0.95, mb: 5 }}>
            저희 두 사람의 뜻에 따라<br />
            가족들과 함께하는<br />
            작은 결혼식으로 치르게 되었습니다.
          </Typography>

          <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#BDBDBD', mb: 6 }}>
            한 분 한 분, <br />
            소중한 분들을 초대하지 못하여<br />
            죄송할 따름입니다.<br /><br />
            멀리서 저희 두 사람의 미래를 축복해주시면<br />
            그 귀중한 마음을 소중히 간직하며<br />
            예쁘게 잘 살겠습니다.
          </Typography>

          <Box sx={{ mt: 6, lineHeight: 2 }}>
            {/* 🗓️ 미니 캘린더 */}
            <Box
              sx={{
                width: 120,
                mx: 'auto',
                mb: 3,
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
                border: '1px solid #3D4A39',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  bgcolor: '#29362B',
                  color: '#F2C94C',
                  py: 0.75,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.03em',
                }}
              >
                2025년 5월
              </Typography>
              <Box sx={{py: 1.2, bgcolor: '#1F2B20'}}>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#FAF3E0',
                    fontWeight: 700,
                    fontSize: '1.75rem',
                    lineHeight: 1.2,
                  }}
                >
                  5
                </Typography>
                <Typography variant="caption" sx={{color: '#999', fontSize: '0.75rem'}}>
                  월요일
                </Typography>
              </Box>
            </Box>

            {/* 🔔 안내 문구 */}
            <Typography variant="h6" sx={{ color: '#F2C94C', fontWeight: 'bold', mb: 2 }}>
              오후 5시, 제주에서
            </Typography>
            <Typography variant="body1">
              <strong>김진용 & 지연수</strong>의 아들 ♥ <strong>김대기</strong>
            </Typography>
            <Typography variant="body1">
              <strong>이종우 & 이경희</strong>의 딸 ♥ <strong>이슬</strong>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 💸 계좌 안내 */}
      <Box sx={{ bgcolor: '#2C3A29', py: { xs: 6, sm: 8 }, borderTop: '1px solid #555' }}>
        <Container sx={{ textAlign: 'center', px: { xs: 3, sm: 5 } }}>
          <img src={loveLetter} width={20} />
          <Typography variant="h6" sx={{ mb: 4, color: '#FAF3E0', letterSpacing: '0.05em' }}>
            마음 전하실 곳
          </Typography>

          <Stack spacing={2}>
            {[{ name: '김진용', bank: '농협', number: '423070-52-042084' }, { name: '이종우', bank: '국민', number: '233-21-0281-289' }, { name: '이슬', bank: '신한', number: '110-438-058681' }].map((account, idx) => (
              <Paper
                key={idx}
                elevation={3}
                sx={{
                  bgcolor: '#1A211A',
                  color: '#F2C94C',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  px: 3,
                  py: 2,
                  borderRadius: 2,
                }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{account.name}</Typography>
                  <Typography variant="body2">{account.bank} {account.number}</Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => copyToClipboard(`${account.bank} ${account.number}`)}
                  sx={{ color: '#F2C94C' }}
                >
                  <ContentCopyIcon sx={{ fontSize: '1.2rem' }} />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* 🖼️ 갤러리 */}
      <Box sx={{ bgcolor: '#1B241B', py: { xs: 6, sm: 8 } }}>
        <Container>
          <Typography variant="h6" sx={{ color: '#F2C94C', mb: 4, textAlign: 'center' }}>
            우리의 순간들
          </Typography>
          <Grid container spacing={2}>
            {[gallery1, gallery2, gallery3, gallery4].map((img, idx) => (
              <Grid size={12} key={idx}>
                <Box
                  component="img"
                  src={img}
                  alt={`gallery${idx + 1}`}
                  sx={{ width: '100%', borderRadius: 2 }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🎬 아웃트로 비디오 */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
            transform: 'scale(2)',
            transformOrigin: 'center center',
          }}
        >
          <source src={outroVideo} type="video/mp4" />
        </video>

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            px: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#D2D2D2' }}>
            소중한 분들을 모두 모시지 못해 아쉬운 마음입니다.<br />
            멀리서 보내주신 따뜻한 축복, 깊이 감사드립니다.<br /><br />
            김대기 ᐧ 이슬 드림
          </Typography>
        </Box>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message={`복사되었습니다: ${copiedAccount}`}
      />
    </Box>
  );
}

export default App;
