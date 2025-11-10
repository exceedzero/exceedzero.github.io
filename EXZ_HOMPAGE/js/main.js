// ========================================
// EXceed Zero 웹사이트 메인 JavaScript
// ========================================

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. 네비게이션 드롭다운 기능
    // ========================================
    
    // 드롭다운 버튼 찾기
    const dropdownButton = document.querySelector('.navbar-dropdown-button');
    // 드롭다운 메뉴 찾기
    const dropdownMenu = document.querySelector('.navbar-dropdown-menu');
    
    // 드롭다운 버튼이 있는 경우에만 실행
    if (dropdownButton && dropdownMenu) {
        // 버튼 클릭 시 메뉴 토글 (열기/닫기)
        dropdownButton.addEventListener('click', function(e) {
            // 기본 동작 방지 (페이지 이동 방지)
            e.preventDefault();
            
            // 메뉴가 열려있으면 닫고, 닫혀있으면 열기
            dropdownMenu.classList.toggle('show');
        });
        
        // 메뉴 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', function(e) {
            // 클릭한 곳이 드롭다운 버튼이나 메뉴가 아닌 경우
            if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                // 드롭다운 메뉴 닫기
                dropdownMenu.classList.remove('show');
            }
        });
    }
    
    // ========================================
    // 2. 부드러운 스크롤 (앵커 링크)
    // ========================================
    
    // 모든 앵커 링크 찾기 (예: #about, #services)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // 각 앵커 링크에 클릭 이벤트 추가
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // href 속성 가져오기 (예: "#about")
            const targetId = this.getAttribute('href');
            
            // # 만 있는 경우 (예: href="#") 기본 동작 실행
            if (targetId === '#') return;
            
            // 대상 요소 찾기
            const targetElement = document.querySelector(targetId);
            
            // 대상 요소가 존재하는 경우
            if (targetElement) {
                // 기본 동작 방지 (페이지 점프 방지)
                e.preventDefault();
                
                // 부드럽게 스크롤
                targetElement.scrollIntoView({
                    behavior: 'smooth',  // 부드러운 애니메이션
                    block: 'start'       // 요소의 상단으로 스크롤
                });
            }
        });
    });
    
    // ========================================
    // 3. 스크롤 시 네비게이션 바 스타일 변경
    // ========================================
    
    // 네비게이션 바 찾기
    const navbar = document.querySelector('.navbar');
    
    // 네비게이션 바가 있는 경우에만 실행
    if (navbar) {
        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', function() {
            // 현재 스크롤 위치 (픽셀 단위)
            const scrollPosition = window.scrollY;
            
            // 50픽셀 이상 스크롤한 경우
            if (scrollPosition > 50) {
                // 'scrolled' 클래스 추가 (CSS에서 스타일 정의 필요)
                navbar.classList.add('scrolled');
            } else {
                // 'scrolled' 클래스 제거
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ========================================
    // 4. 비활성화된 링크 처리
    // ========================================
    
    // 모든 비활성화된 링크 찾기 (class="disabled")
    const disabledLinks = document.querySelectorAll('a.disabled');
    
    // 각 비활성화된 링크에 클릭 이벤트 추가
    disabledLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // 기본 동작 방지 (링크 이동 방지)
            e.preventDefault();
            
            // 선택 사항: 알림 표시
            // alert('준비 중입니다.');
        });
    });
    
    // ========================================
    // 5. 로딩 완료 로그
    // ========================================
    
    console.log('EXceed Zero 웹사이트 로드 완료 ✅');
});
