// import { ref } from 'vue';

export default {
	install(Vue) {
		
		const global = 'UI';
		if (!window[global]) {
			window[global] = {};
		}
		
		window[global] = {
			toastModal: {
				/**
				 * options 
				 * during: short[2s] | long[3.5s] 유지시간
				 * status: assertive[중요도 높은 경우] | polite[중요도가 낮은 경우] | off[default]
				 */
				options : {
					during: 'short',
					classAdd : '',
					content: '',
					status: 'assertive',
					auto: true,
					callback : false,
				},
				show (option) {
					const opt = Object.assign({}, this.options, option);
					const during = opt.during;
					const classAdd = opt.classAdd ? opt.classAdd : '';
					const callback = opt.callback;
					const content = opt.content ? opt.content : '';
					const status = opt.status;
					const el_body = document.querySelector('.base-toast');
					const toastId = 'toast_' + Math.random();
					let el_toast;
					let toast_html = `<div class="toast ${classAdd}" aria-live="${status}" data-id="${toastId}" role="alert">${content}</div>`;
					let time = (during === 'short') ? 2000 : 3500;
					
					const clear = e => {
						const _this = e.currentTarget;
						
						_this.removeEventListener('animationend', clear);
						_this.remove();
						el_toast.removeAttribute('aria-hidden');
						!!callback && callback();
					}
					const hide = (v) => {
						setTimeout(() => {
							el_toast.setAttribute('aria-hidden','true');
							el_toast.addEventListener('animationend', clear);
						}, v);
					}
					const act = e => {
						const _this = e.currentTarget;
						_this.removeEventListener('animationend', act);
						hide(time);
					}

					//toast 생성
					el_body.insertAdjacentHTML('beforeend', toast_html);
					toast_html = null;
					el_toast = document.querySelector(`.toast[data-id="${toastId}"`);
					setTimeout(() => {
						el_toast.setAttribute('aria-hidden','false');
						el_toast.addEventListener('animationend', act);
					}, 100);
				}   
			},
			systemModal: {
				options : {
					id:'alert_' + Math.random(),
					title: '',
					content: '',
					control: null,
					type: 'alert',
					/*
					[{
						name: '버튼이름',
						class: ' btn--box-dark'
						callback: () => { console.log('aaa')}
					}]
					*/
					callback : false,
				},
				show(option) {
					const opt = Object.assign({}, this.options, option);
					const title = opt.title;
					const content = opt.content;
					const control = opt.control;
					const alertId = opt.id;
					// const btn = opt.button;
		
					let html = `<div class="alert" aria-live="${status}" data-id="${alertId}" data-type="center">
						<div class="alert--wrap">
							<strong class="alert--title">${title}</strong>
							<div class="alert-content">
								${content}
							</div>`;
					if (control) {
						html += `<div class="btn--wrap">`;
						for (let i = 0, len = control.length; i < len; i++) {
							const item = control[i];
							html += `<button type="button" class="btn--box" data-style="${i === 0 && len > 1 ? 'white' : 'primary'}"><span>${item.name}</span></button>`;
						}
						html += `</div>`;
					} else {
						html += `<button type="button" class="btn--close"><span>${title} 닫기</span></button>`;
					}
					html += `</div>
						<div class="alert--dim"></div>
					</div>`;
					document.querySelector('.base-alert').insertAdjacentHTML('beforeend', html);
					html = null;
		
					const el_alert = document.querySelector(`.alert[data-id="${alertId}"]`);
					const el_close = el_alert.querySelector('.btn--close');
					const el_first = el_alert.querySelector('.btn--box:nth-child(1)');
					const el_last = el_alert.querySelector('.btn--box:nth-child(2)');
		
					setTimeout(() => {
						el_alert.setAttribute('aria-hidden','false');
					}, 100);
					
					//이벤트
					if (el_first) {
						el_first.addEventListener('click', () => {
							control[0].callback && control[0].callback();
							this.hide(el_alert);
						});
					}
					if (el_last) {
						el_last.addEventListener('click', () => {
							control[1].callback && control[1].callback();
							this.hide(el_alert);
						});
					}
					if (el_close) {
						el_close.addEventListener('click', () => {
							this.hide(el_alert);
						});
					}
				},
				hide(el_alert) {
					const clear = e => {
						const _this = e.currentTarget;
						const _alert = _this.closest('.alert')
						_this.removeEventListener('animationend', clear);
						_alert.remove();
					}
					el_alert.setAttribute('aria-hidden','true');
					el_alert.addEventListener('animationend', clear);
				}
			},
			layerModal: {
				open(v) {
					const dataModal = v.modal;
					const _id = dataModal.id;
					const _type = dataModal.type;
					const _body = document.querySelector('body');
					const baseWrap = document.querySelector('.base-wrap');
					//이전 포커스 저장
					//aria-hidden 값 > css animation
	
					//페이지 좌우 이동 효과
					if (_type === 'full-slide') {
						_body.dataset.pageSwiper = "on";
					}
					_body.dataset.layer = true;
					const layerItem = document.querySelector(`.layer-item[data-id="${_id}"]`);
	
					console.log(layerItem)
	
					const layerWrap = layerItem.querySelector('.layer-item--wrap');
					const closeBtn = layerItem.querySelector('.layer-item--close');
					const closeBtHide = layerItem.querySelector('.layer-item--close-hide');
	
					//외부영역 접근막기
					// console.log('baseWrap', baseWrap, layerItem);
					baseWrap.setAttribute('inert', 'true');
					baseWrap.setAttribute('aria-hidden', 'true');
	
					layerItem.dataset.active = 'true';
					layerItem.setAttribute('aria-hidden', 'false');
					// store.commit("setZindex", store.getters.zindexUp);
	
					//z-index 값 설정
				
					layerItem.style.zIndex = 110;
	
					//웹접근성 탭 포커스 가두기
					const a11y_keyStart = (e) => {
						if (e.shiftKey && e.key === 'Tab') {
							e.preventDefault();
							closeBtHide.focus();
						}
					}
					const a11y_keyEnd = (e) => {
						if (!e.shiftKey && e.key === 'Tab') {
							e.preventDefault();
							closeBtn.focus();
						}
					}
					closeBtn.addEventListener('keydown', a11y_keyStart);
					closeBtHide.addEventListener('keydown', a11y_keyEnd);
	
					//css animation 끝나는 시점
					const actMotionEnd = () => {
						closeBtn.focus();
						// const viewLayers = document.querySelectorAll('.layer-item[aria-hidden="false"]');
						// console.log(viewLayers.length);
						layerWrap.removeEventListener('animationend', actMotionEnd);
					}
					layerWrap.addEventListener('animationend', actMotionEnd);
				},
				close(v) {
					console.log('닫아볼까')
					// const _this = e.currentTarget;
					const layerItem = document.querySelector(`.layer-item[data-id="${v}"]`);
					const baseWrap = document.querySelector('.base-wrap');
					const _body = document.querySelector('body');
					//aria-hidden 값 > css animation
					_body.dataset.layer = false;
					
					layerItem.dataset.active = 'false';
					layerItem.setAttribute('aria-hidden', 'true');
					layerItem.removeAttribute('style');
					//페이지 좌우 이동 효과
					if (layerItem.dataset.type === 'full-slide') {
						_body.dataset.pageSwiper = "off";
					}

					//현재 활성화 되어 있는 레이어 체크하여 하나일때 본문접근 가능설정
					const viewLayers = document.querySelectorAll('.layer-item[aria-hidden="false"]');
					if (viewLayers.length < 2) {
						baseWrap.removeAttribute('inert');
						baseWrap.setAttribute('aria-hidden', 'false');
					}
				}
			},
		}

		const Global = window[global];
		console.log(Global)
		Vue.provide('UI', Global);
	}
}