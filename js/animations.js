// ========================================
// EXceed Zero 애니메이션 JavaScript
// ========================================

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. Intersection Observer (스크롤 감지)
    // ========================================
    
    // Intersection Observer 설정
    // 이 API는 요소가 화면에 보이는지 감지합니다
    const observerOptions = {
        // 루트: 뷰포트 (브라우저 창)
        root: null,
        
        // 루트 여백: 요소가 화면에 들어오기 전에 미리 감지
        // 100px 전에 감지 시작
        rootMargin: '0px 0px -100px 0px',
        
        // 임계값: 요소의 10%가 보이면 감지
        threshold: 0.1
    };
    
    // Observer 콜백 함수
    // entries: 감지된 요소들의 배열
    const observerCallback = function(entries, observer) {
        // 각 감지된 요소에 대해 실행
        entries.forEach(function(entry) {
            // 요소가 화면에 보이는 경우
            if (entry.isIntersecting) {
                // 'visible' 클래스 추가 (CSS에서 애니메이션 정의)
                entry.target.classList.add('visible');
                
                // 한 번만 실행하고 싶다면 감지 중지
                // observer.unobserve(entry.target);
            }
        });
    };
    
    // Intersection Observer 생성
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // ========================================
    // 2. 애니메이션 대상 요소 찾기
    // ========================================
    
    // 모든 섹션 요소 찾기
    const sections = document.querySelectorAll('.section');
    
    // 각 섹션에 Observer 적용
    sections.forEach(function(section) {
        // 초기 상태: 투명하게 설정
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observer 시작
        observer.observe(section);
    });
    
    // 경고 항목 애니메이션
    const warningItems = document.querySelectorAll('.warning-item');
    
    warningItems.forEach(function(item, index) {
        // 초기 상태
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        // Observer 시작
        observer.observe(item);
    });
    
    // 적합한 항목 애니메이션
    const suitableItems = document.querySelectorAll('.suitable-item');
    
    suitableItems.forEach(function(item, index) {
        // 초기 상태
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        // Observer 시작
        observer.observe(item);
    });
    
    // ========================================
    // 3. CSS 클래스 추가 (visible 상태)
    // ========================================
    
    // CSS에서 .visible 클래스가 추가되면 애니메이션 실행
    // 스타일 태그 동적 추가
    const style = document.createElement('style');
    style.textContent = `
        /* 요소가 보이면 실행되는 애니메이션 */
        .visible {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // 4. 히어로 섹션 타이핑 효과 (선택 사항)
    // ========================================
    
    // 히어로 섹션의 제목 요소 찾기
    const heroTitle = document.querySelector('.hero h1');
    
    // 히어로 제목이 있는 경우에만 실행
    if (heroTitle) {
        // 원본 텍스트 저장
        const originalText = heroTitle.textContent;
        
        // 텍스트 비우기
        heroTitle.textContent = '';
        
        // 한 글자씩 추가하는 함수
        let charIndex = 0;
        const typingSpeed = 50; // 밀리초 (50ms = 0.05초)
        
        function typeWriter() {
            // 모든 글자를 다 쓴 경우
            if (charIndex < originalText.length) {
                // 한 글자 추가
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                
                // 다음 글자를 위해 재귀 호출
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // 페이지 로드 후 1초 뒤에 타이핑 시작
        setTimeout(typeWriter, 1000);
    }
    
    // ========================================
    // 5. 로딩 완료 로그
    // ========================================
    
    console.log('애니메이션 초기화 완료 ✨');
});
