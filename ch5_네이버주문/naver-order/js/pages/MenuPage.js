import {html} from 'lit';
import { fetchGetRecentOrders, fetchGetMenuGroups } from '../api/index.js';

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
        this.menuGroups = [];

        fetchGetRecentOrders().then(
            (response) => {
                this.recentMenuItems = response
                console.log(response);
            },
        );

        fetchGetMenuGroups().then(
            (response) => {
                // this.menuGroups = response
                console.log(response);
                this.menuGroups = response;
            },
        );

        
    }

    static get properties() {
        return {
            tabIndex: { type: Number},
            selectedCategory: {type: String},
            recentMenuItems: {type: Array},
            menuGroups: {type: Array},
        };
    }

    onChangeTab(index) {
        this.tabIndex = index;
    }

    onChangeCategory(category) {
        this.selectedCategory = category;
    }

    redirectDetailPage(id) {
        history.pushState(null, null, `/detail/${id}`)
        this.dispatchEvent(new PopStateEvent('popstate'));
    }

    render() {
        const categories = this.menuGroups.map(({category, categoryName}) => ({
            category,
            categoryName,
        }));
        console.log(this.menuGroups);
        console.log(categories);


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
                                ${isPopular? html`<span class="badge-popular hidden">인기</span>` : ''}
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
    </div>
    <!-- //주문정보영역 -->
        
    <!-- 메뉴 카테고리 영역-->
    <div class="menu-category-area">
        <div class="common-inner">
            <ul class="category-list scroll-x">
            ${
                categories.map(
                    ({category, categoryName}) =>

                    html`
                    <li class="category-item"><a @click=${this.onChangeCategory} class="category-tab">${categoryName}</a></li>
                    `
                )
            }
            </ul>
        </div>
    </div>
    <!-- //메뉴 카테고리 영역-->
    ${this.menuGroups.map((menuGroup) => (
        html`<div class="menu-list-area new">
        <div class="common-inner">
            <div class="menu-category">
                <p class="title">새로 나온 메뉴</p>
            </div>
            <ul class="menu-list">
                <li class="menu-item">
                    <a href="./detail.html" class="menu-detail">
                        <div class="menu-img-area">
                            <img src="https://via.placeholder.com/100x110/ffffff/000000" alt="{메뉴명}" class="menu-img" width="100" height="110"> <!-- 사이즈가 변경되지 않는 확실한 부분은 width, height 값을 명시해주는게 좋다.-->
                        </div>
                        <div class="menu-info-area">
                            <p class="menu-name-group">
                                <span class="menu-name">메뉴이름</span>
                                <img src="../assets/images/ico-new.svg" alt="new" class="ico-new">
                            </p>
                            <div class="menu-order-info">
                                <span class="menu-grade">
                                    <img src="../assets/images/ico-star.svg" alt="별점" class="ico-star">5.00
                                </span>
                                <span class="menu-number-of-order">주문수<em>999</em></span>
                            </div>
                            <p class="menu-desc">메뉴에 대한 간단한 설명이 적혀있습니다.</p>
                            <p class="menu-price">9,999원</p>
                        </div>
                    </a>
                    <a href="#" class="btn-cart">
                        <img class="ico-cart" src="../assets/images/ico-cart-fill-green.svg" alt="주문하기">
                        <span class="num">1</span>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="./detail.html" class="menu-detail">
                        <div class="menu-img-area">
                            <img src="https://via.placeholder.com/100x110/ffffff/000000" alt="{메뉴명}" class="menu-img" width="100" height="110"> <!-- 사이즈가 변경되지 않는 확실한 부분은 width, height 값을 명시해주는게 좋다.-->
                        </div>
                        <div class="menu-info-area">
                            <p class="menu-name-group">
                                <span class="menu-name">메뉴이름</span>
                                <img src="../assets/images/ico-new.svg" alt="new" class="ico-new">
                            </p>
                            <div class="menu-order-info">
                                <span class="menu-grade">
                                    <img src="../assets/images/ico-star.svg" alt="별점" class="ico-star">5.00
                                </span>
                                <span class="menu-number-of-order">주문수<em>999</em></span>
                            </div>
                            <p class="menu-desc">메뉴에 대한 간단한 설명이 적혀있습니다.</p>
                            <p class="menu-price">9,999원</p>
                        </div>
                    </a>
                    <a href="#" class="btn-cart">
                        <img class="ico-cart" src="../assets/images/ico-cart.svg" alt="주문하기">
                    </a>
                </li>
                <li class="menu-item">
                    <a href="./detail.html" class="menu-detail">
                        <div class="menu-img-area">
                            <img src="https://via.placeholder.com/100x110/ffffff/000000" alt="{메뉴명}" class="menu-img" width="100" height="110"> <!-- 사이즈가 변경되지 않는 확실한 부분은 width, height 값을 명시해주는게 좋다.-->
                        </div>
                        <div class="menu-info-area">
                            <p class="menu-name-group">
                                <span class="menu-name">메뉴이름</span>
                                <img src="../assets/images/ico-new.svg" alt="new" class="ico-new">
                            </p>
                            <div class="menu-order-info">
                                <span class="menu-grade">
                                    <img src="../assets/images/ico-star.svg" alt="별점" class="ico-star">5.00
                                </span>
                                <span class="menu-number-of-order">주문수<em>999</em></span>
                            </div>
                            <p class="menu-desc">메뉴에 대한 간단한 설명이 적혀있습니다.메뉴에 대한 간단한 설명이 적혀있습니다.</p>
                            <p class="menu-price">9,999원</p>
                        </div>
                    </a>
                    <a href="#" class="btn-cart disabled">
                        품절
                    </a>
                </li>
            </ul>
        </div>
    </div>`
    ))}
    <!-- 메뉴 리스트영역 -->
    
    
    `;
    }
}

