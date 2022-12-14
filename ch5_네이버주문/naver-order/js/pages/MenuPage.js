import {html} from 'lit';
import { fetchGetRecentOrders, fetchGetMenuGroups } from '../api/index.js';

import View from '../view.js';

const TABS = [
    {
        text: html`π&nbsp;&nbsp;ν¬μ₯`,
        imageUrl: '/assets/images/ico-check.svg',
    },
    {
        text: html`π½&nbsp;&nbsp;λ§€μ₯`,
        imageUrl: '/assets/images/ico-check.svg',
    },
    {
        text: html`π΅&nbsp;&nbsp;λ°°λ¬`,
        imageUrl: '/assets/images/ico-check.svg',
    },
];

const ORDER_TYPE_MESSAGE = [
    "κ°μ§κ³  κ°μ€ μ μκ² ν¬μ₯ν΄ λλ¦½λλ€.",
    "λ§€μ₯μμ λμ€ μ μκ² μ€λΉλ©λλ€.",
    "κ³μ  κ³³μΌλ‘ λ°°λ¬λ©λλ€.",
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
                    μ£Όλ¬Έ
                </div>
            </div>
            <!-- μ£Όλ¬Έ λΆλ₯ -->
            <div class="tab-switch-box" role="tablist">
                ${TABS.map((tab, index) => 
                    html`<a href="#" class="tab-switch ${index === this.tabIndex ? 'is-active' : ''}" role="tab" @click=${() => this.onChangeTab(index)} >${tab.text}<img src="${tab.imageUrl}" alt="${tab.text}" class="ico-check" aria-hidden="${index === this.tabIndex}"></a>`
                )}
            </div>

            <div class="info-main-notice">
                ${ORDER_TYPE_MESSAGE[this.tabIndex]}
            </div>

            <!-- break time μ΄λ μμ μκ°μ΄ μλ λ μΆλ ₯λ  λ΄μ© -->
            <div class="info-main-notice alert hidden">
                <svg aria-hidden="true" class="ico-clock" viewBox="0 0 13 13" width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M6.5 0a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm.492 1.137v4.157l2.792 2.674-.692.722-3.1-2.97V2.137h1z"></path>
                </svg>
                μ§κΈμ μ£Όλ¬Έν  μ μμ΅λλ€.
            </div>

            <!-- μ΅κ·Ό μ£Όλ¬Έ λ΄μ­ -->
            <div class="recent-order-area">
                <div class="recent-title">
                    <img src="../assets/images/ico-clock.svg" alt="μ΅κ·Όμ£Όλ¬Έ" class="ico-clock"> μ΅κ·Ό<br/>μ£Όλ¬Έ
                </div>
                <div class="recent-menu-area scroll-x">
                    <ul class="recent-menu-list">
                    ${this.recentMenuItems.map(({id, isPopular, imageUrl, name, price}) => html`<li class="recent-menu-item is-ordered" @click=${() => this.redirectDetailPage(id)}>
                        <a>
                            <div class="menu-img-area">
                                ${isPopular? html`<span class="badge-popular hidden">μΈκΈ°</span>` : ''}
                                <img src="https://via.placeholder.com/80" alt="λ©λ΄μ¬μ§" class="menu-img">
                            </div>
                        </a>
                        <a href="#" class="badge-cart">
                            <img src="${imageUrl}" alt="μ₯λ°κ΅¬λ" class="ico-cart">
                        </a>
                        <p class="menu-name">${name}</p>
                        <p class="menu-price">${price}</p>
                    </li>`)}
   
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- //μ£Όλ¬Έμ λ³΄μμ­ -->
        
    <!-- λ©λ΄ μΉ΄νκ³ λ¦¬ μμ­-->
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
    <!-- //λ©λ΄ μΉ΄νκ³ λ¦¬ μμ­-->
    ${this.menuGroups.map((menuGroup) => (
        html`<div class="menu-list-area new">
        <div class="common-inner">
            <div class="menu-category">
                <p class="title">μλ‘ λμ¨ λ©λ΄</p>
            </div>
            <ul class="menu-list">
                <li class="menu-item">
                    <a href="./detail.html" class="menu-detail">
                        <div class="menu-img-area">
                            <img src="https://via.placeholder.com/100x110/ffffff/000000" alt="{λ©λ΄λͺ}" class="menu-img" width="100" height="110"> <!-- μ¬μ΄μ¦κ° λ³κ²½λμ§ μλ νμ€ν λΆλΆμ width, height κ°μ λͺμν΄μ£Όλκ² μ’λ€.-->
                        </div>
                        <div class="menu-info-area">
                            <p class="menu-name-group">
                                <span class="menu-name">λ©λ΄μ΄λ¦</span>
                                <img src="../assets/images/ico-new.svg" alt="new" class="ico-new">
                            </p>
                            <div class="menu-order-info">
                                <span class="menu-grade">
                                    <img src="../assets/images/ico-star.svg" alt="λ³μ " class="ico-star">5.00
                                </span>
                                <span class="menu-number-of-order">μ£Όλ¬Έμ<em>999</em></span>
                            </div>
                            <p class="menu-desc">λ©λ΄μ λν κ°λ¨ν μ€λͺμ΄ μ νμμ΅λλ€.</p>
                            <p class="menu-price">9,999μ</p>
                        </div>
                    </a>
                    <a href="#" class="btn-cart">
                        <img class="ico-cart" src="../assets/images/ico-cart-fill-green.svg" alt="μ£Όλ¬ΈνκΈ°">
                        <span class="num">1</span>
                    </a>
                </li>
                <li class="menu-item">
                    <a href="./detail.html" class="menu-detail">
                        <div class="menu-img-area">
                            <img src="https://via.placeholder.com/100x110/ffffff/000000" alt="{λ©λ΄λͺ}" class="menu-img" width="100" height="110"> <!-- μ¬μ΄μ¦κ° λ³κ²½λμ§ μλ νμ€ν λΆλΆμ width, height κ°μ λͺμν΄μ£Όλκ² μ’λ€.-->
                        </div>
                        <div class="menu-info-area">
                            <p class="menu-name-group">
                                <span class="menu-name">λ©λ΄μ΄λ¦</span>
                                <img src="../assets/images/ico-new.svg" alt="new" class="ico-new">
                            </p>
                            <div class="menu-order-info">
                                <span class="menu-grade">
                                    <img src="../assets/images/ico-star.svg" alt="λ³μ " class="ico-star">5.00
                                </span>
                                <span class="menu-number-of-order">μ£Όλ¬Έμ<em>999</em></span>
                            </div>
                            <p class="menu-desc">λ©λ΄μ λν κ°λ¨ν μ€λͺμ΄ μ νμμ΅λλ€.</p>
                            <p class="menu-price">9,999μ</p>
                        </div>
                    </a>
                    <a href="#" class="btn-cart">
                        <img class="ico-cart" src="../assets/images/ico-cart.svg" alt="μ£Όλ¬ΈνκΈ°">
                    </a>
                </li>
                <li class="menu-item">
                    <a href="./detail.html" class="menu-detail">
                        <div class="menu-img-area">
                            <img src="https://via.placeholder.com/100x110/ffffff/000000" alt="{λ©λ΄λͺ}" class="menu-img" width="100" height="110"> <!-- μ¬μ΄μ¦κ° λ³κ²½λμ§ μλ νμ€ν λΆλΆμ width, height κ°μ λͺμν΄μ£Όλκ² μ’λ€.-->
                        </div>
                        <div class="menu-info-area">
                            <p class="menu-name-group">
                                <span class="menu-name">λ©λ΄μ΄λ¦</span>
                                <img src="../assets/images/ico-new.svg" alt="new" class="ico-new">
                            </p>
                            <div class="menu-order-info">
                                <span class="menu-grade">
                                    <img src="../assets/images/ico-star.svg" alt="λ³μ " class="ico-star">5.00
                                </span>
                                <span class="menu-number-of-order">μ£Όλ¬Έμ<em>999</em></span>
                            </div>
                            <p class="menu-desc">λ©λ΄μ λν κ°λ¨ν μ€λͺμ΄ μ νμμ΅λλ€.λ©λ΄μ λν κ°λ¨ν μ€λͺμ΄ μ νμμ΅λλ€.</p>
                            <p class="menu-price">9,999μ</p>
                        </div>
                    </a>
                    <a href="#" class="btn-cart disabled">
                        νμ 
                    </a>
                </li>
            </ul>
        </div>
    </div>`
    ))}
    <!-- λ©λ΄ λ¦¬μ€νΈμμ­ -->
    
    
    `;
    }
}

