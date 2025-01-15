import ReactGA from 'react-ga4';

// [1] 페이지뷰 이벤트를 기록하는 함수
export const PageviewTrigger = (path: string): void => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
  });
};

// ----------------------------------------------------------------------------
// [2] 이벤트를 기록하는 함수
interface EventTriggerParams {
  action: string; // 이벤트 액션 (예: 'click')
  category: string; // 이벤트 카테고리 (예: 'login')
  label?: string; // 이벤트 라벨 (옵션, 예: '로그인 버튼 클릭')
  value?: number; // 이벤트 값 (옵션, 예: 1)
}

export const EventTrigger = ({ action, category, label, value }: EventTriggerParams): void => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};
