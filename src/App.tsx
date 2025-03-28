import React from 'react';
import {
  Box,
  Typography,
  Container,
  Tooltip,
  IconButton,
  Divider,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import weddingBells from './assets/images/wedding-bells.png';
import introVideo from './assets/videos/intro.mov';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert(`복사되었습니다:\n${text}`);
  });
};

function App() {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', backgroundColor: '#2E3B2C', fontFamily: 'Nanum Myeongjo, serif' }}>
      {/* 🎥 비디오 + 오버레이 텍스트 */}
      <Box sx={{ position: 'relative', width: '100%',  overflow: 'hidden' }}>
        {/* 🎥 비디오 */}
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
            transform: 'scale(1.6)',
            transformOrigin: 'center center'
          }}
        >
          <source
            src={introVideo}
            type="video/mp4"
          />
        </video>

        {/* 🎞️ 비네팅 효과 */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0, // top, right, bottom, left = 0
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* 📝 텍스트 */}
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
            zIndex: 2, // 텍스트는 위로
          }}
        >
          <img
            src={weddingBells}
            alt="우리의 웨딩"
            style={{ width: '36px' }}
          />
          <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', sm: '1.8rem' } }}>
            <strong>김대기</strong>, <strong>이슬</strong> 결혼합니다!
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem' }, mt: 1, fontWeight: 300 }}>
            2025년 5월 5일 월요일 오후 5시
          </Typography>
        </Box>
      </Box>

      {/* 📄 본문 */}
      <Box sx={{ backgroundColor: '#2E3B2C', py: 8 }}>
        <Container
          sx={{
            textAlign: 'center',
            lineHeight: { xs: 1.8, sm: 2 },
            color: '#F5F5DC',
            px: { xs: 3, sm: 4 },
          }}
        >
          <Typography
            sx={{ fontSize: { xs: '1.05rem', sm: '1.15rem' }, fontWeight: 500, mb: 4 }}
          >
            이슬이랑 노는게 제일 좋은 대기<br />
            대기랑 함께하는게 재밌는 이슬<br />
            매일매일 보는 것만으로도 부족해<br />
            평생 같이 살기로 했습니다.
          </Typography>

          <Divider sx={{ backgroundColor: '#D4AF37', width: '40%', mx: 'auto', my: 5, opacity: 0.5 }} />

          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.05rem' },
              opacity: 0.95,
            }}
          >
            저희 두 사람의 뜻에 따라<br />
            가족들과 함께하는 작은 결혼식으로 치르게 되었습니다.
          </Typography>

          <Typography
            sx={{
              mt: 5,
              fontStyle: 'italic',
              color: '#ccc',
              fontSize: { xs: '1rem', sm: '1.05rem' },
            }}
          >
            한 분 한 분, 소중한 분들을 초대하지 못하여 죄송할 따름입니다.<br />
            멀리서 저희 두 사람의 미래를 축복해주시면<br />
            그 귀중한 마음을 소중히 간직하며 예쁘게 잘 살겠습니다 :)
          </Typography>

          <Box sx={{ mt: 7, fontSize: { xs: '1.05rem', sm: '1.1rem' }, lineHeight: 2 }}>
            <Typography sx={{ color: '#D4AF37', fontWeight: 'bold', mb: 2 }}>
              2025년 5월 5일 오후 5시, 제주에서
            </Typography>

            <Typography>
              <strong>김진용 & 지연수</strong>의 아들 ♥ <strong>김대기</strong>
            </Typography>
            <Typography>
              <strong>이종우 & 이경희</strong>의 딸 ♥ <strong>이슬</strong>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 💸 계좌 안내 */}
      <Box sx={{ backgroundColor: '#263322', py: 6, borderTop: '1px solid #444' }}>
        <Container sx={{ textAlign: 'center', px: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 700,
              fontSize: { xs: '1.2rem', sm: '1.3rem' },
              color: '#F5F5DC',
              letterSpacing: '0.05em',
            }}
          >
            💌 마음 전하실 곳
          </Typography>

          <Box
            sx={{
              backgroundColor: '#1F271C',
              borderRadius: 3,
              boxShadow: '0 0 10px rgba(0,0,0,0.35)',
              p: 4,
              mb: 4,
              color: '#D4AF37',
              textAlign: 'left',
            }}
          >
            {[
              { name: '김진용', bank: '농협', number: '423070-52-042084' },
              { name: '이종우', bank: '국민', number: '233-21-0281-289' },
              { name: '이슬', bank: '신한', number: '110-438-058681' },
            ].map((account, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2,
                }}
              >
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.05rem' } }}>
                  {account.name} | {account.bank} {account.number}
                </Typography>
                <Tooltip title="복사하기" arrow>
                  <IconButton
                    size="small"
                    onClick={() => copyToClipboard(`${account.bank} ${account.number}`)}
                    sx={{
                      color: '#D4AF37',
                      ml: 1,
                      '& svg': {
                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                      },
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>

          <Typography sx={{ fontSize: '0.9rem', color: '#aaa' }}>
            © 2025 대기 & 이슬의 청첩장
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
