import React, {useState} from 'react';
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

function App() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAccount(text);
      setSnackbarOpen(true);
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', bgcolor: '#2E3B2C' }}>
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
              'radial-gradient(ellipse at center, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#D4AF37',
            px: 2,
            zIndex: 2,
          }}
        >
          <img src={weddingBells} style={{ width: '36px' }} />
          <Typography variant="h5" gutterBottom>
            <strong>김대기</strong>, <strong>이슬</strong> 결혼합니다!
          </Typography>
          <Typography variant="subtitle1">2025년 5월 5일 월요일 오후 5시</Typography>
        </Box>
      </Box>

      {/* 📄 본문 */}
      <Box sx={{ bgcolor: '#2E3B2C', py: { xs: 8, sm: 10 } }}>
        <Container sx={{ textAlign: 'center', color: '#F5F5DC', px: { xs: 3, sm: 5 } }}>
          <Typography variant="body1" sx={{ fontWeight: 500, mb: 5 }}>
            이슬이랑 노는게 제일 좋은 대기<br />
            대기랑 함께하는게 재밌는 이슬<br />
            매일매일 보는 것만으로도 부족해<br />
            평생 같이 살기로 했습니다.
          </Typography>

          <Divider
            sx={{ backgroundColor: '#D4AF37', width: '40%', mx: 'auto', my: { xs: 4, sm: 6 }, opacity: 0.5 }}
          />

          <Typography variant="body1" sx={{ opacity: 0.95, mb: 5 }}>
            저희 두 사람의 뜻에 따라<br />
            가족들과 함께하는<br />
            작은 결혼식으로 치르게 되었습니다.
          </Typography>

          <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#ccc', mb: 6 }}>
            한 분 한 분, <br />
            소중한 분들을 초대하지 못하여<br />
            죄송할 따름입니다.<br />
            <br />
            멀리서 저희 두 사람의 미래를 축복해주시면<br />
            그 귀중한 마음을 소중히 간직하며<br />
            예쁘게 잘 살겠습니다 :)
          </Typography>

          <Box sx={{ mt: 6, lineHeight: 2 }}>
            <Typography variant="h6" sx={{ color: '#D4AF37', fontWeight: 'bold', mb: 2 }}>
              2025년 5월 5일 오후 5시, 제주에서
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
      <Box sx={{ bgcolor: '#263322', py: { xs: 6, sm: 8 }, borderTop: '1px solid #444' }}>
        <Container sx={{ textAlign: 'center', px: { xs: 3, sm: 5 } }}>
          <img src={loveLetter} width={20} />
          <Typography variant="h6" sx={{ mb: 4, color: '#F5F5DC', letterSpacing: '0.05em' }}>
            마음 전하실 곳
          </Typography>

          <Stack spacing={2}>
            {[{ name: '김진용', bank: '농협', number: '423070-52-042084' }, { name: '이종우', bank: '국민', number: '233-21-0281-289' }, { name: '이슬', bank: '신한', number: '110-438-058681' }].map((account, idx) => (
              <Paper
                key={idx}
                elevation={3}
                sx={{
                  bgcolor: '#1F271C',
                  color: '#D4AF37',
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
                  sx={{ color: '#D4AF37' }}
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
          <Typography variant="h6" sx={{ color: '#D4AF37', mb: 4, textAlign: 'center' }}>
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
              'radial-gradient(ellipse at center, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#D4AF37',
            px: 2,
            zIndex: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            © 2025 대기 & 이슬의 청첩장
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