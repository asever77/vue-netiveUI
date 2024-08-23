<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import ListItem from '@/components/contents/ListItem';
import ModalItem from '@/components/contents/ModalItem';
import AccoItem from '@/components/contents/AccoItem';

import JsonBasic from '@/assets/data/basic.json';
import JsonBasicImg from '@/assets/data/basic_img.json';
import JsonStandard from '@/assets/data/standard.json';
import JsonPremium from '@/assets/data/premium.json';
 

const route = useRoute();
const store = useStore();

//기본 제목부분
store.state.PageInfo.title = '추천 플랜 상세';
store.commit("titleChange", store.state.PageInfo.title);


const age = store.state.PageInfo.my.age || '--'; 
const gender = store.state.PageInfo.my.gender || '--'; 
const planLevel = route.params.planID; //'basic', 'standard', 'premium'
let planName = '--- --';
let jsonPlanList = JsonBasic;
let jsonPlanListImg = JsonBasicImg;
switch (planLevel) {
  case 'basic' : 
    planName = '베이직 플랜';
    jsonPlanList = JsonBasic;
    break;

  case 'standard' : 
    planName = '스탠다드 플랜';
    jsonPlanList = JsonStandard;
    break;

  case 'premium' : 
    planName = '프리미엄 플랜';
    jsonPlanList = JsonPremium;
    break;

  default:
    planName = '스탠다드 플랜';
    jsonPlanList = JsonStandard;
    break;
}

//아코디언 리스트
let planList = [];
let n = 0;
for (let i = 0, len = jsonPlanList.length; i < len; i++) {
  const item = jsonPlanList[i];
  if (item.ctg !== "") {
    planList.push({
      icon:"icon-" + item.id,
      title: item.ctg,
      style: 'checkup',
      event: true,
      list: []
    });
    n = n + 1;
  }
  planList[n - 1].list.push({
    id: 'a_' + item.id, 
    name: item.name,
    event: (item.info1 || item.info2 || item.info3 || item.info4) ? true : false,
  })
}

//검사항목 상세팝업
const checkupID = ref(null);
const info_data = ref(null);
const img_data = ref(null);
const data_NEW_FE_ST_03_01 = {
  modal: {
    id: 'NEW_FE_ST_03_01',
    type: 'full-page', //full-page
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
  let idNum = v.split('a_')

  for (let i = 0, len = jsonPlanList.length; i < len; i++) {
    const item = jsonPlanList[i];
    if (item.id === idNum[1]) {
      info_data.value = item;
      img_data.value = jsonPlanListImg[i];
      break;
    }
  }

  const _thisModal = document.querySelector(`[data-id="${data_NEW_FE_ST_03_01.modal.id}"]`);
  const _modalBody = _thisModal.querySelector('.layer-item--body');
  const item = info_data.value;
 
  let html_cont = ``;
   
  html_cont += `<article class="wrap-sec">`;
  const actInfo = (t,v) => {
    const info = item[v];
    if (info !== "") {
      html_cont += `<section class="checkup-info--cont">
        <h3>${t}</h3>`;
      if (typeof info === 'string') {
        html_cont += `<div>${info}</div>`;
      }
      else {
        html_cont += `<ul data-bullet="dot">`;
        for (const li of info) {
          html_cont += `<li>${li}</li>`;
        }
        html_cont += `</ul>`;
      }
      html_cont += `</section>`;
    }
  }
  const actImg = () => {
  if (img_data.value.img !== "") {
      html_cont += 
      `<div class="checkup-info--img">
        <div class="checkup-info--img-wrap">
          <figure class="checkup-info--img-item"><img src="/images/sample/${img_data.value.img}.png" alt=""></figure>
        </div>
      </div>`;
    }
  }
  actInfo('개요','info1');
  actInfo('방법','info2');
  actImg();
  actInfo('목적','info3');
  actInfo('유의사항','info4');
  actInfo('준비사항','info5');
 
  
  html_cont += `</article>`;
  _modalBody.innerHTML = html_cont;

  if (_thisModal) {
    const _thisModal_tit = _thisModal.querySelector('.layer-item--title');

    if (_thisModal_tit && info_data.value.name) {
      _thisModal_tit.textContent = info_data.value.name;
    }
  }
}

watch(() => checkupID.value, (newValue) => {
    checkupID.value = newValue;
});

</script>

<template>
	<main class="base-main" >
		<div class="base-content">
      <div class="wrap-box" data-style="plan" :data-plan="planLevel">
        <div class="subject-group" role="text">
          <h2 class="subject-group--heading">
            <em>{{ age }}세 {{ gender }}을 위한</em> <br>
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
      <button type="button" class="btn--box" data-style="primary" @click="alertShow">
        <span>플랜 목록 보기</span>
      </button>
      <button type="button" class="btn--box" data-style="primary" @click="alertShow">
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
    font-size: 2.6rem;
    font-weight: 700;
    color: #0B1A23;
    margin-bottom: 1.8rem;
    line-height:3.9rem;
    em{
      font-size: 1.6rem;
      font-weight: 700;
      color: #505866;
    }
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