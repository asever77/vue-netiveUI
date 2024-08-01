(() => {

    'use strict';

    const global = 'UI';

    if (!window[global]) {
        window[global] = {};
    } 
    const Global = window[global];

    Global.page = {};
    Global.data = {};
    Global.exe = {};
    Global.callback = {};
    Global.state = {};
    Global.parts = {};

    
	Global.toast = {
		timer : null,
		/**
		 * options 
		 * delay: short[2s] | long[3.5s]
		 * status: assertive[중요도 높은 경우] | polite[중요도가 낮은 경우] | off[default]
		 */
		options : {
			delay: 'short',
			classAdd : '',
			content: '',
			status: 'assertive',
			auto: true,
			callback : false,
		},
		show (option) {
			const opt = Object.assign({}, this.options, option);
			const delay = opt.delay;
			const classAdd = opt.classAdd ? opt.classAdd : '';
			const callback = opt.callback;
			const content = opt.content ? opt.content : '';
			const status = opt.status;
			const el_body = document.querySelector('.base-toast');
            const toastId = 'toast_' + Math.random();
			let el_toast;
            let toast_html = `<div class="toast ${classAdd}" aria-live="${status}" data-id="${toastId}" role="alert">${content}</div>`;
			let time = (delay === 'short') ? 2000 : 3500;
            
			const clear = e => {
				const _this = e.currentTarget;
                
				_this.removeEventListener('animationend', clear);
				_this.remove();
				el_toast.removeAttribute('aria-hidden');
				!!callback && callback();
			}
			const hide = (v) => {
                console.log('hide', v)
				clearTimeout(Global.toast.timer);
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
	}
   
	Global.alert = {
        options : {
            title: '',
			content: '',
			control: null,
            /*
            [{
                name: '버튼이름',
                class: ' btn--box-dark'
                callback: () => { console.log('aaa')}
            }]
            */
			callback : false,
		},
		init(option) {
            const opt = Object.assign({}, this.options, option);
			const title = opt.title;
			const content = opt.content;
            const control = opt.control;
			const alertId = 'alert_' + Math.random();
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
					html += `<button type="button" class="btn--box" data-n=><span>${item.name}</span></button>`;
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

			setTimeout(() => {
                el_alert.setAttribute('aria-hidden','false');
            }, 100);
			

			el_close.addEventListener('click', this.hide);

			// if (!!btn[0]) {
			// 	document.querySelector('.mdl-modal[data-id="'+ id +'"] .mdl-btn[data-state="ok"]').addEventListener('click', btn[0].callback);
			// } 
			// if (!!btn[1]) {
			// 	document.querySelector('.mdl-modal[data-id="'+ id +'"] .mdl-btn[data-state="cancel"]').addEventListener('click', btn[1].callback);
			// } 
		},
		hide() {
			console.log('hide');
		}
	}

	
})();
