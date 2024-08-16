<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import ListItem from '@/components/contents/ListItem';
import ModalItem from '@/components/contents/ModalItem';
import AccoItem from '@/components/contents/AccoItem';

import JsonData from '@/assets/data/checkup.json';

//header title
const store = useStore();
store.state.PageInfo.title = '추천 플랜 상세';
store.commit("titleChange", store.state.PageInfo.title);
const planNum = ref(store.state.PageInfo.tab);

//기본 제목부분
let planLevel = 'basic'; //'basic', 'standard', 'premium'
const age = '43'; 
const gender = '남성'; 
let planName = '베이직 플랜';

switch (Number(planNum.value)) {
  case 0 : 
    planLevel = 'basic';
    planName = '베이직 플랜';
    break;

  case 1 : 
    planLevel = 'standard';
    planName = '스탠다드 플랜';
    break;

  case 2 : 
    planLevel = 'premium';
    planName = '프리미엄 플랜';
    break;

  default:
    planLevel = 'standard';
    planName = '스탠다드 플랜';
    break;
}


console.log('tab', store.state.PageInfo.tab);

//아코디언 리스트
const planList = [
  {
    icon:'a-1',
    title: '지질대사 및 심혈관계 검사',
    style: 'checkup',
    event: true,
    list: [
			{ id: 'a_1', name: '총콜레스테롤' },
			{ id: 'a_2', name: '고밀도콜레스테롤(HDL)' },
			{ id: 'a_3', name: '저밀도콜레스테롤(LDL)' },
			{ id: 'a_4', name: '중성지방' }
		]
  },
  {
    icon:'a-2',
    title: '성, 연령별 추가 검사',
    style: 'checkup',
    event: true,
    list: [
			{ id: 'b_1', name: 'B형간염' },
			{ id: 'b_2', name: '치면세균막' },
			{ id: 'b_3', name: '골다공증' },
			{ id: 'b_4', name: '우울증' },
			{ id: 'b_5', name: '생활습관' },
			{ id: 'b_6', name: '노인신체기능' },
			{ id: 'b_7', name: '인지기능장애' },
		]
  },
  {
    icon:'a-3',
    title: '국가암검진 관련 검사',
    style: 'checkup',
    event: true, 
    list: [
			{ id: 'b_1', name: '333B형간염' },
			{ id: 'b_2', name: '치면세균막' },
			{ id: 'b_3', name: '골다공증' },
			{ id: 'b_4', name: '우울증' },
			{ id: 'b_5', name: '생활습관' },
			{ id: 'b_6', name: '노인신체기능' },
			{ id: 'b_7', name: '인지기능장애' },
		]
  },
  {
    icon:'a-4',
    title: '기본검사',
    style: 'checkup',
    event: true,
    list: [
			{ id: 'b_1', name: '444B형간염' },
			{ id: 'b_2', name: '치면세균막' },
			{ id: 'b_3', name: '골다공증' },
			{ id: 'b_4', name: '우울증' },
		]
  }
];

//검사항목 상세팝업
const checkupID = ref(null);
const info_data = ref(null);
const data_NEW_FE_ST_03_01 = {
  modal: {
    id: 'NEW_FE_ST_03_01',
    type: 'bottom-sheet',
    class: 'checkup-info',
    aria: {
      labelledby: 'NEW_FE_ST_03_01_label',
      describedby: 'NEW_FE_ST_03_01_desc'
    }
  },
}
const $childRef = ref();
const callAct = (v) => {
	checkupID.value = v.call;
	actContent(checkupID.value);
	$childRef.value.open();
}

const actContent = (v) => {
  info_data.value = JsonData[v];

  const _thisModal = document.querySelector(`[data-id="${data_NEW_FE_ST_03_01.modal.id}"]`);
  const _modalBody = _thisModal.querySelector('.layer-item--body');
  let html_cont = ``;

  for (let i = 0, len = info_data.value.conts.length; i < len; i++) {
    const item = info_data.value.conts[i];
   
    html_cont += `<section class="wrap-sec">`;
    
      if (item.title) {
      html_cont += `<h3>${item.title}</h3>`;
    }

    if (item.cont) {
      if (typeof item.cont === 'string') {
        html_cont += `<div>${item.cont}</div>`;
      }
      else {
        html_cont += `<ul data-bullet="dot">`;
        for (const li of item.cont) {
          html_cont += `<li>${li}</li>`;
        }
        html_cont += `</ul>`;
      }
    }
    if (item.img) {
      html_cont += `<div class="checkup-info--img">
        <div class="checkup-info--img-wrap">`;
        for (const li of item.img) {
          html_cont += `<figure class="checkup-info--img-item"><img src="${li.src}" alt="${li.alt}"></figure>`;
        }
        html_cont += `</div>
        </div>`;
    }
    html_cont += `</section>`;
  }
  _modalBody.innerHTML = html_cont;

  if (_thisModal) {
    const _thisModal_tit = _thisModal.querySelector('.layer-item--title');

    if (_thisModal_tit && info_data.value.title) {
      _thisModal_tit.textContent = info_data.value.title;
    }
  }
}

watch(() => checkupID.value, (newValue) => {
    // 속성 값이 변경될 때 실행되는 로직
    // console.log('watch', newValue, oldValue);
    // actContent();
    checkupID.value = newValue;
    console.log('watch',checkupID.value);
});
</script>

<template>
	<main class="base-main" >
		<div class="base-content">
      <div class="wrap-box" data-style="plan" :data-plan="planLevel">
        <div class="subject-group">
          <h2 class="subject-group--heading">
            <em data-marker="yellow">{{ age }}세 {{ gender }}</em>을 위한 <br>
            {{ planName }}
          </h2>
          <em class="subject-group--addition">
            실제 검사 가능 항목은 추천 결과와 다를 수 있습니다.
          </em>
        </div>
      </div>

			<div class="checkup-detail-list mt-x4">
        <AccoItem v-for="(_item, index) in planList" 
          :key="index" 
          :data="planList[index]" 
          :current="index" 
          :expanded="0" 
          :level="3" 
          :accoid="('planAcco_' + index)" 
        >
          <ListItem :data="_item" @call-act="callAct" />
        </AccoItem>
			</div>
		</div>

    <div class="wrap--btn">
      <button type="button" class="btn--box" data-style="gray" @click="alertShow">
        <span>플랜 목록 보기</span>
      </button>
      <button type="button" class="btn--box" data-style="gray" @click="alertShow">
        <span>조회 다시 하기</span>
      </button>
    </div>

    <!-- NEW_FE_ST_03_01 -->
		<ModalItem :data="data_NEW_FE_ST_03_01" @call-act="callAct" ref="$childRef">
			<template #head>
				<h2 class="layer-item--title" :id="data_NEW_FE_ST_03_01.modal.aria.labelledby" tabindex="0"></h2>
			</template>
			<template #body></template>
		</ModalItem>
	</main>
  
	
</template>

<style lang="scss" scoped>
.base-content {
	padding:2rem 2.4rem 3.6rem ;
}
.checkup-detail-list {
  display:flex;
  flex-direction:column;
  gap:5.6rem;
}
.wrap--btn {
  padding:2.4rem 2.4rem 3.2rem;
}
.wrap-box[data-style="plan"] {
  padding: 2.4rem;

  &[data-plan]::after {
    content:"";
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    width: 8rem;
    height: 8rem;
  }
  &[data-plan="basic"]::after {
    background: url(@/assets/images/icon/plan_basic.png) no-repeat 50% 50% / 8rem;
  }
  &[data-plan="standard"]::after {
    background: url(@/assets/images/icon/plan_standard.png) no-repeat 50% 50% / 8rem;
  }
  &[data-plan="premium"]::after {
    background: url(@/assets/images/icon/plan_premium.png) no-repeat 50% 50% / 8rem;
  }
  .subject-group--heading {
    color:#101010;
    font-size: 2.2rem;
    margin-bottom: 1.8rem;
    line-height:3.3rem;
  }
  .subject-group--addition {
    background:#ECEEF2;
    border-radius: .8rem;
    padding:.9rem 1rem;
    font-size: 1.3rem;
    color:#505866;
    font-weight: 600;
    text-align: center;
  }
}
</style>