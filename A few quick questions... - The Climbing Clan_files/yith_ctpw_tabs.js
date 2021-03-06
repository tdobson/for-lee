/**
 * Social Box Tabs Admin Script Doc Comment
 *
 * @category Script
 * @package  Yith Custom Thank You Page for Woocommerce
 * @author    Armando Liccardo
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * @link http://www.yithemes.com
 */
!function(){"use strict";window.tabs=function(t){var e=document.querySelector(t.el),i=e.querySelectorAll(t.tabNavigationLinks),n=e.querySelectorAll(t.tabContentContainers),s=0,a=!1,c=function(t,e){t.addEventListener("click",function(t){return t.preventDefault(),o(e),!1})},o=function(t){t!==s&&t>=0&&t<=i.length&&(i[s].classList.remove("is-active"),i[t].classList.add("is-active"),n[s].classList.remove("is-active"),n[t].classList.add("is-active"),s=t)};return{init:function(){if(!a){a=!0,e.classList.remove("no-js");for(var t=i.length,n=0;n<t;n++){var s=i[n];c(s,n)}}},goToTab:o}}}();