import { ref } from 'vue';

export default {
	install(Vue) {
		const timer = ref();
		console.log(timer);
		
		const toastModal = {
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
					console.log('hide', this)
					setTimeout(() => {
						el_toast.setAttribute('aria-hidden','true');
						el_toast.addEventListener('animationend', clear);
					}, v);
				}
				const act = e => {
					console.log('act', this)
					const _this = e.currentTarget;
					_this.removeEventListener('animationend', act);
					hide(time);
				}

				//toast 생성
				el_body.insertAdjacentHTML('beforeend', toast_html);
				toast_html = null;
				el_toast = document.querySelector(`.toast[data-id="${toastId}"`);
				setTimeout(() => {
					console.log('show', this)
					el_toast.setAttribute('aria-hidden','false');
					el_toast.addEventListener('animationend', act);
				}, 100);
			}   
		}

		const systemModal = {
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
						html += `<button type="button" class="btn--box"><span>${item.name}</span></button>`;
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
					
					_this.removeEventListener('animationend', clear);
					_this.remove();
				}
				el_alert.setAttribute('aria-hidden','true');
				el_alert.addEventListener('animationend', clear);
			}
		}

		Vue.provide('toastModal', toastModal);
        Vue.provide('systemModal', systemModal);
	}
}