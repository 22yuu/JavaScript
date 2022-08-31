/**
 * 패키지를 불러올 때 순서 상 외부 패키지 먼저 오는게 좋음
 * 
 */

import {html} from 'lit';
import View from './view.js';

export default class App extends View {
    
    constructor() {
        super();
    }

    /**
     * Lit 라이브러리 데코레이터 (decorator)
     * 
     */
    // 상태 만들기
    static get properties() {
        return {
            message: {
                type: String
            },
        };
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`<div className="container">
            <!--<order-header></order-header>-->
            <menu-page></menu-page>
        </div>`;
    }

    changeMessage(event) {
     this.message = 'Hello World Click!!!';
    }
}

