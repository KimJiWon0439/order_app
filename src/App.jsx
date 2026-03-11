import React from 'react';

const App = () => {
  const handleAction = (title) => alert(`'${title}' 페이지로 이동합니다!`);

  const styles = {
    // 브라우저 기본 여백 제거 및 전체 컨테이너
    container: {
      margin: 0,
      padding: 0,
      backgroundColor: '#F8FAFC',
      fontFamily: "'Pretendard', -apple-system, sans-serif",
      scrollBehavior: 'smooth',
      width: '100%',
    },
    // 1. 메인 섹션: 수직/수평 무조건 정중앙
    heroSection: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // 세로 중앙
      alignItems: 'center',     // 가로 중앙
      textAlign: 'center',
      background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
      boxSizing: 'border-box'
    },
    // 칙코데이가 아닌 영어 CHICKODE
    title: { 
      fontSize: '80px', 
      fontWeight: '900', 
      color: '#1E3A8A', 
      margin: '0', 
      letterSpacing: '-2px',
      lineHeight: '1.1'
    },
    subtitle: { fontSize: '24px', color: '#475569', marginTop: '15px', fontWeight: '500' },
    
    // 버튼 그리드 (중앙 정렬 유지)
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginTop: '60px',
      width: '90%',
      maxWidth: '1100px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '30px 20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '1px solid #F1F5F9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    // 2. 마케팅 홍보 섹션
    marketingSection: {
      height: '100vh', // 스크롤 시 몰입감을 위해 꽉 차게 변경
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1E293B',
      color: 'white',
      textAlign: 'center',
      padding: '0 40px'
    },
    marketingTag: { backgroundColor: '#3B82F6', padding: '6px 16px', borderRadius: '100px', fontSize: '14px', fontWeight: 'bold', marginBottom: '20px' },
    marketingTitle: { fontSize: '48px', fontWeight: '800', lineHeight: '1.4', marginBottom: '24px' },
    highlight: { color: '#FBBF24' }
  };

  return (
    <div style={styles.container}>
      {/* 섹션 1: 홈 (CHICKODE) */}
      <section style={styles.heroSection}>
        <h1 style={styles.title}>CHICKODE:</h1>
        <p style={styles.subtitle}>데이터와 함께 자라나는 코딩 세계</p>

        <div style={styles.grid}>
          {[
            { t: '문제 풀기', i: '💡' },
            { t: '오답 노트', i: '📒' },
            { t: '캐릭터 키우기', i: '🐥' },
            { t: '패턴 분석', i: '📊' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              style={styles.card}
              onClick={() => handleAction(item.t)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#3B82F6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#F1F5F9';
              }}
            >
              <div style={{fontSize: '48px', marginBottom: '15px'}}>{item.i}</div>
              <div style={{fontSize: '18px', fontWeight: '800', color: '#1E293B'}}>{item.t}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop: '60px', fontSize: '24px', opacity: 0.3, animation: 'bounce 2s infinite'}}>↓</div>
      </section>

      {/* 섹션 2: 마케팅 홍보 */}
      <section style={styles.marketingSection}>
        <div style={styles.marketingTag}>CHICKODE EXCLUSIVE</div>
        <h2 style={styles.marketingTitle}>
          단순한 코딩 교육이 아닙니다.<br />
          <span style={styles.highlight}>코딩 사고력</span>을 깨우는 특별한 방식.
        </h2>
        <p style={{fontSize: '20px', color: '#94A3B8', maxWidth: '750px', lineHeight: '1.7'}}>
          막막한 문제 앞에서도 포기하지 마세요. <br />
          CHICKODE만의 <span style={{color: 'white', fontWeight: 'bold'}}>전략적 힌트 3번</span> 시스템이 <br />
          여러분의 논리적 근육을 스스로 키울 수 있게 도와드립니다.
        </p>
        <button 
          style={{marginTop: '40px', padding: '16px 48px', borderRadius: '16px', border: 'none', backgroundColor: '#3B82F6', color: 'white', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'}}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          첫 번째 문제 도전하기
        </button>
      </section>
    </div>
  );
};

export default App;