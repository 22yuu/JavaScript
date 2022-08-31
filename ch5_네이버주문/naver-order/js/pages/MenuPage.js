import {html} from 'lit';
import { fetchGetRecentOrders } from '../api/index.js';

import View from '../view.js';

const TABS = [
    {
        text: html`🛍&nbsp;&nbsp;포장`,
        imageUrl: '/assets/images/ico-check.svg',
    },
    {
        text: html`🍽&nbsp;&nbsp;매장`,
        imageUrl: '/assets/images/ico-check.svg',
    },
    {
        text: html`🛵&nbsp;&nbsp;배달`,
        imageUrl: '/assets/images/ico-check.svg',
    },
];

const ORDER_TYPE_MESSAGE = [
    "가지고 가실 수 있게 포장해 드립니다.",
    "매장에서 드실 수 있게 준비됩니다.",
    "계신 곳으로 배달됩니다.",
];


export default class MenuPage extends View {

    constructor() {
        super();
        
        this.tabIndex = 0;
        this.recentMenuItems = [];

        fetchGetRecentOrders().then(
            (response) => (this.recentMenuItems = response),
        );
    }

    static get properties() {
        return {
            tabIndex: { type: Number},
            recentMenuItems: {type: Array},
        };
    }

    onChangeTab(index) {
        this.tabIndex = index;
    }

    redirectDetailPage(id) {
        history.pushState(null, null, `/detail/${id}`)
        this.dispatchEvent(new PopStateEvent('popstate'));
    }

    render() {
        return html`<div class="order-info-area">
        <div class="common-inner">
            <div class="info-main-title">
                <div class="title">
                    <svg viewBox="0 0 18 18" class="ico-n-logo"><path fill-rule="evenodd" fill="currentColor"  d="M18 0v18H0V0h18zM7.255 4.582H4.473v9.054h2.915V8.79l3.357 4.846h2.782V4.582h-2.915v4.846L7.255 4.582z"></path></svg>
                    주문
                </div>
            </div>
            <!-- 주문 분류 -->
            <div class="tab-switch-box" role="tablist">
                ${TABS.map((tab, index) => 
                    html`<a href="#" class="tab-switch ${index === this.tabIndex ? 'is-active' : ''}" role="tab" @click=${() => this.onChangeTab(index)} >${tab.text}<img src="${tab.imageUrl}" alt="${tab.text}" class="ico-check" aria-hidden="${index === this.tabIndex}"></a>`
                )}
            </div>

            <div class="info-main-notice">
                ${ORDER_TYPE_MESSAGE[this.tabIndex]}
            </div>

            <!-- break time 이나 영업 시간이 아닐 때 출력될 내용 -->
            <div class="info-main-notice alert hidden">
                <svg aria-hidden="true" class="ico-clock" viewBox="0 0 13 13" width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M6.5 0a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm.492 1.137v4.157l2.792 2.674-.692.722-3.1-2.97V2.137h1z"></path>
                </svg>
                지금은 주문할 수 없습니다.
            </div>

            <!-- 최근 주문 내역 -->
            <div class="recent-order-area">
                <div class="recent-title">
                    <img src="../assets/images/ico-clock.svg" alt="최근주문" class="ico-clock"> 최근<br/>주문
                </div>
                <div class="recent-menu-area scroll-x">
                    <ul class="recent-menu-list">
                        ${this.recentMenuItems.map(({id, isPopular, imageUrl, name, price}) => html`<li class="recent-menu-item is-ordered" @click=${() => this.redirectDetailPage(id)}>
                        <a>
                            <div class="menu-img-area">
                                ${isPopular? '<span class="badge-popular hidden">인기</span>' : ''}
                                <img src="https://via.placeholder.com/80" alt="메뉴사진" class="menu-img">
                            </div>
                        </a>
                        <a href="#" class="badge-cart">
                            <img src="${imageUrl}" alt="장바구니" class="ico-cart">
                        </a>
                        <p class="menu-name">${name}</p>
                        <p class="menu-price">${price}</p>
                    </li>`)}
   
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
    }
}

