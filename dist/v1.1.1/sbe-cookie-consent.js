/* 
sbe-cookie-consent v0.0.1 
(c) 2022 Developed By Tom Ruff
Ruff Web Development
MIT License
*/
;'use strict';
const createCookieConsentHtml = () => {
    return `
    <!-- Code injected by Sign Builder Express ©: sbe-cookie-consent CDN -->
    <div class="sbe_cookie_consent_cont">
                <style>
                /* Cookie Consent Main Container */
                    .sbe_cookie_consent_cont {
                        display:none;
                        position: absolute;
                        left: 25px;
                        bottom: 25px;
                        z-index: 999999;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 6px 13px rgba(0, 0, 0, 0.16);
                        max-width: 375px;
                        line-height: 1.5;
                        background-color: #f7f7f7;
                    }

                    .sbe_cc_sec1 {
                        width: 100%;
                        margin-bottom: 15px;
                    }
                    .sbe_cc_sec1>img{
                        max-width: 75px;
                        margin-bottom: 10px;
                    }
                    .sbe_cc_sec1>h3 {
                        margin-bottom: 10px;
                    }

                    .sbe_cc_sec2 {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    #sbe_cc_accpt_btn{
                        margin-top:10px;
                    }
                    .sbe_cookie_doc_link{
                        display: inline;
                        color: #1F9FFF;
                        font-weight: bold;
                        text-decoration: none;
                    }

                    /* END Cookie Consent Main Container */
                    /* Cookie Settings Container and overlay */
                    /* overlay */
                    .sbe_cc_overlay {
                        display: none; 
                        position: absolute;
                        z-index: 9999999;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        backdrop-filter: blur(2px);
                        background-color: #1f9eff27;
                    }

                    .sbe_cc_settings_cont {
                        position: relative;
                        max-width: 680px;
                        height: auto;
                        background-color: white;
                        border-radius: 10px;
                        margin: auto;
                        padding: 25px;
                        line-height: 1.5;
                    }
                    /* close Btn */
                    .sbe_ccs_close_btn{
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        width:30;
                        height:30;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        background-color: #f7f7f7;
                        border-radius: 5px;
                    }
                    .sbe_ccs_close_btn:hover{
                        cursor: pointer;
                        background-color: #ef3f36ba;
                        color: white;
                    }
                    .sbe_close_btn_overlay{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    /* END close Btn */
                    /* Cookie settings toggle block */
                    .sbe_ccscccb_toggle_sec{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-top: 15px;

                    }
                    .sbe_ccscccb_title {
                        cursor: pointer;
                    }


                    /* Toggle switch */
                    .sbe_toggle_cont {
                        position: relative;
                        display: inline-block;
                        width: 50px;
                        height: 28px;
                    }

                    .sbe_toggle_cont input {
                        opacity: 0;
                        width: 0;
                        height: 0;
                    }

                    .sbe_toggle {
                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: #ccc;
                        -webkit-transition: .4s;
                        transition: .4s;
                    }

                    .sbe_toggle:before {
                        position: absolute;
                        content: "";
                        height: 20px;
                        width: 20px;
                        left: 4px;
                        bottom: 4px;
                        background-color: white;
                        -webkit-transition: .4s;
                        transition: .4s;
                    }

                    input:checked+.sbe_toggle {
                        background-color: #1F9FFF;
                    }

                    input:focus+.sbe_toggle {
                        box-shadow: 0 0 1px #1F9FFF;
                    }

                    input:checked+.sbe_toggle:before {
                        -webkit-transform: translateX(22px);
                        -ms-transform: translateX(22px);
                        transform: translateX(22px);
                    }

                    /* Rounded sliders */
                    .sbe_toggle.sbe_toggle_round {
                        border-radius: 34px;
                    }

                    .sbe_toggle.sbe_toggle_round:before {
                        border-radius: 50%;
                    }

                    #sbe_cc_strn_tog:hover>* {
                        cursor: not-allowed;
                        cursor: no-drop;
                        opacity: .5;
                    }

                    /* END toggle switch */
                    /* cookie category info */
                    .sbe_ccsccb_info_cont{
                        display: none;
                        margin-top: 15px;
                        padding: 15px;
                        background: #f7f7f7;
                        border-radius: 10px;
                    }
                    .sbe_ccs_lower{
                        margin-top: 15px;
                    }
                    #sbe_cc_confirm_btn:disabled{
                        cursor: default;
                        opacity: .5;
                    }
                    #sbe_cc_accpt_btn_2{
                        margin:0;
                        margin-left:10px;
                    }
                    /* media Query */
                    @media only screen and (max-width: 600px) {
                        /*Big smartphones and smaller [426px -> 600px]*/
                        /* Consent Container */
                        .sbe_cookie_consent_cont {
                            width: 90%;
                            left: 50%;
                            transform: translate(-50%);
                        }
                        /* settings overlay and container */
                        .sbe_cc_overlay{
                            padding: 10px;
                        }
                        .sbe_cc_settings_cont{
                            line-height: 1.2;
                            padding: 15px;
                            box-shadow: 0 6px 13px rgba(0, 0, 0, 0.122);
                        }
                        .sbe_cc_settings_cont>h2{
                            margin-bottom: 10px;
                        }
                        .sbe_cc_settings_cont>p{
                            font-size: 14px;
                            text-align: justify;
                        }
                        .sbe_cc_s_cookie_cat_cont{
                            max-height: 250px;
                            overflow-y: scroll;
                        }
                        .sbe_ccs_close_btn{
                            top: 15px;
                            right: 15px;
                        }
                        .sbe_ccsccb_i_para{
                            font-size: 14px;
                            margin-top: 5px;
                        }
                        .sbe_ccs_lower{
                        display: flex;
                        flex-direction: column;
                        }
                        #sbe_cc_accpt_btn_2{
                            margin:0;
                            margin-top:10px;
                        }
                    }
                    /* END Cookie Settings Container and overlay */
                </style>
        <div class="sbe_cc_sec1">
            <img src="https://www.signbuilderexpress.com/-77442822/Handler/Picture/GU/F/ThemeImages/sbe-cookie.png" alt="cookie">
            <h3>Your Privacy</h3>
            <p>By clicking "Accept all Cookies", you agree <strong>Sign Builder Express</strong> can store cookies on
                your browser and disclose information in accordance with our <a class="sbe_cookie_doc_link" target="_blank"
                    href="https://www.signbuilderexpress.com/t/CookieInfo">Cookie Policy</a>.</p>
        </div>
        <div class="sbe_cc_sec2">
            <button id="sbe_cc_choose_btn" class="catfish-button">Choose Settings</button>
            <button id="sbe_cc_accpt_btn" class="catfish-button">Accept All Cookies</button>
        </div>
    </div>
    <div class="sbe_cc_overlay">
        <div class="sbe_cc_settings_cont">
            <h2>Cookie Settings</h2>
            <p>When you visit our website your information may get stored on your browser
                mainly in the form of a cookie. No, these aren't edible. However, they help keep you connected with this
                website so it can work the way you expect the next time you visit. This information allows the website
                to provide you with a more personalized web experience. Because we at Sign Builder Express respect your
                right to privacy, you can choose below what cookies you would like to allow and not allow. Click or tap
                on the category headings to find out more information. Do understand that turning some of these cookies
                off can impact how you use the site.</p>
            <div class="sbe_cc_s_cookie_cat_cont">
                <div class="sbe_ccsccc_block">
                    <div class="sbe_ccscccb_toggle_sec">
                        <h4 class="sbe_ccscccb_title" data-cccinfo="sbe-ci-sn">Strictly Necessary <i
                                class="fa fa-question-circle-o" aria-hidden="true"></i></h4>
                        <label id="sbe_cc_strn_tog" class="sbe_toggle_cont">
                            <input class="sbe_ccs_checkbox" data-cookietype="sbe-sn" type="checkbox" checked disabled>
                            <span class="sbe_toggle sbe_toggle_round"></span>
                        </label>
                    </div>
                    <div class="sbe_ccsccb_info_cont" data-cccinfo="sbe-ci-sn">
                        <p class="sbe_ccsccb_i_para">These cookies are strictly necessary to provide you with services
                            available through our Websites and to use some of its features, such as access to secure
                            areas.</p>
                    </div>
                </div>
                <div class="sbe_ccsccc_block">
                    <div class="sbe_ccscccb_toggle_sec">
                        <h4 class="sbe_ccscccb_title" data-cccinfo="sbe-ci-pc">Performance Cookies <i
                                class="fa fa-question-circle-o" aria-hidden="true"></i></h4>
                        <label class="sbe_toggle_cont">
                            <input class="sbe_ccs_checkbox" data-cookietype="sbe-pc" checked type="checkbox">
                            <span class="sbe_toggle sbe_toggle_round"></span>
                        </label>
                    </div>
                    <div class="sbe_ccsccb_info_cont" data-cccinfo="sbe-ci-pc">
                        <p class="sbe_ccsccb_i_para">These cookies are used to enhance the performance and functionality
                            of our Websites but are non-essential to their use. However, without these cookies, certain
                            functionality (like videos) may become unavailable.</p>
                    </div>
                </div>
                <!-- <div class="sbe_ccsccc_block">
                    <div class="sbe_ccscccb_toggle_sec">
                        <h4 class="sbe_ccscccb_title" data-cccinfo="sbe-ci-fc">Functional Cookies <i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>
                        <label class="sbe_toggle_cont">
                            <input data-cookietype="sbe-sn" type="checkbox">
                            <span class="sbe_toggle sbe_toggle_round"></span>
                        </label>
                    </div>
                    <div class="sbe_ccsccb_info_cont">
                        <p class="sbe_ccsccb_i_para"></p>
                    </div>
                </div> -->
                <!-- <div class="sbe_ccsccc_block">
                    <div class="sbe_ccscccb_toggle_sec">
                        <h4 class="sbe_ccscccb_title" data-cccinfo="sbe-ci-tc">Targeting Cookies <i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>
                        <label class="sbe_toggle_cont">
                            <input data-cookietype="sbe-sn" type="checkbox">
                            <span class="sbe_toggle sbe_toggle_round"></span>
                        </label>
                    </div>
                    <div class="sbe_ccsccb_info_cont">
                        <p class="sbe_ccsccb_i_para"></p>
                    </div>
                </div> -->
            </div>
            <div class="sbe_ccs_lower">
                <button id="sbe_cc_confirm_btn" disabled class="catfish-button">Confirm Selection</button>
                <button id="sbe_cc_accpt_btn_2" class="catfish-button">Accept All Cookies</button>
            </div>
            <div class="sbe_ccs_close_btn">
                <div id="sbe_ccs_close_btn" class="sbe_close_btn_overlay"></div>
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
        <script>
        // cookie script FallBack
        /*! js-cookie v3.0.1 | MIT */
        function e(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) e[n] = r[n] } return e } var t = function t(r, n) { function o(t, o, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, n, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + r.write(o, t) + c } } return Object.create({ set: o, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var t = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < t.length; o++) { var i = t[o].split("="), c = i.slice(1).join("="); try { var u = decodeURIComponent(i[0]); if (n[u] = r.read(c, u), e === u) break } catch (e) { } } return e ? n[e] : n } }, remove: function (t, r) { o(t, "", e({}, r, { expires: -1 })) }, withAttributes: function (r) { return t(this.converter, e({}, this.attributes, r)) }, withConverter: function (r) { return t(e({}, this.converter, r), this.attributes) } }, { attributes: { value: Object.freeze(n) }, converter: { value: Object.freeze(r) } }) }({ read: function (e) { return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }, { path: "/" }); export default t;
    </script>
    <script>
        // Cookie Script minified
        /*! js-cookie v3.0.1 | MIT */
        !function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, o = e.Cookies = t(); o.noConflict = function () { return e.Cookies = n, o } }()) }(this, (function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) e[o] = n[o] } return e } return function t(n, o) { function r(t, r, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n.write(r, t) + c } } return Object.create({ set: r, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var t = document.cookie ? document.cookie.split("; ") : [], o = {}, r = 0; r < t.length; r++) { var i = t[r].split("="), c = i.slice(1).join("="); try { var u = decodeURIComponent(i[0]); if (o[u] = n.read(c, u), e === u) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { r(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (n) { return t(this.converter, e({}, this.attributes, n)) }, withConverter: function (n) { return t(e({}, this.converter, n), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(n) } }) }({ read: function (e) { return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }, { path: "/" }) }));
    </script>
    <script>
        // SBE-Cookie pop up functionality
        // Buttons
        const openSettingsBtnElm = $('#sbe_cc_choose_btn');
        const acceptAllCookiesBtnElm = $('#sbe_cc_accpt_btn');
        const acceptAllCookiesBtn2Elm = $('#sbe_cc_accpt_btn_2');
        const confirmChosenCookiesBtnElm = $('#sbe_cc_confirm_btn');
        const closeSettingsElm = $('#sbe_ccs_close_btn');
        const cookieInfoTitleBtnElm = $('.sbe_ccscccb_title');
        // Container Elements
        const cookieConsentPopElm = $('.sbe_cookie_consent_cont');
        const cookieSettingsContElm = $('.sbe_cc_overlay');
        const cookieInfoContElm = $('.sbe_ccsccb_info_cont');
        // other elements
        const checkboxes = $('.sbe_ccs_checkbox');
        // ID maker
        function makeId() {
            const charList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&{}[]<>';
            let _id = '';
            function loadChars() {
                let a = ''
                for (let i = 0; i < 15; i++) {
                    a += charList[Math.floor(Math.random() * charList.length - 1) + 1]
                }
                return a
            }
            _id = "sbe-" + loadChars() + "-" + loadChars() + "-" + loadChars()
            return _id
        };
        // userState
        let activeUser = {
            token: makeId(),
            cookie_settings: [
                {
                    cookie_id: 'sbe-sn',
                    cookie_active: true
                }, {
                    cookie_id: 'sbe-pc', //cookies start as checked
                    cookie_active: true
                }
            ],
            pop_open: true
        };
        // cookie list
        // define cookies to remove
        const cookieList = [
            {
                c_importance: "sbe-sn",
                cookies: ['__RequestVerificationToken', 'AWSALBCORS', 'CFTDC', 'HIGHTECHSIGNS.AUTH', 'INF.CUST']
            },
            {
                c_importance: "sbe-pc",
                cookies: ['AWSALB', 'INF.RecentlyViewedProducts']
            }
        ];
        const filterCookieListAndDelete = (cookieListId) => {
            let cookieCategory = cookieList.filter(cc => cc.c_importance === cookieListId)
            cookieCategory[0].cookies.forEach(c => {
                try {
                    Cookies.remove(c, { path: '/', domain: 'www.signbuilderexpress.com' })
                } catch (error) {
                    console.log('Could not remove cookie: ' + c)
                }
            })
        }
        // sett cookies to user settings
        const setCookies = (user) => {
            // loop through list and delete cookies that match
            // look at user settings
            user.cookie_settings.forEach(cc => {
                if (!cc.cookie_active) {
                    // if cookie cat is false, then filter cookes in list
                    //  and delete cookies that match
                    filterCookieListAndDelete(cc.cookie_id)
                }
            })
        }
        // found user function
        const foundUserAction = (foundUser) => {
            // if found user
            // hide elements
            if (foundUser.pop_open) {
                // show pop up
                var popTimer = setTimeout(() => {
                    cookieConsentPopElm.fadeIn()
                    clearTimeout(popTimer)
                }, 1500);
            }
            cookieConsentPopElm.hide();
            // set cookies to user settings
            setCookies(foundUser);
        }
        // helpers
        // settings open
        const openCookieSettings = () => {
            cookieSettingsContElm.fadeIn();
            cookieSettingsContElm.css({'display':'flex'});
            
        }
        // cookie info drop down
        const openCookieInfo = (infoId) => {
            let infoElmArr = Array.from(cookieInfoContElm)
            infoElmArr.forEach(elm => {
                let eId = elm.dataset.cccinfo;
                eId === infoId ? $(elm).slideToggle() : $(elm).slideUp()
            })
        }
        // close all associated pop ups
        const closePops = () => {
            var fadeTimeOut = setTimeout(() => {
                cookieConsentPopElm.fadeOut()
                cookieSettingsContElm.fadeOut()
                clearTimeout(fadeTimeOut)
            }, 1000)
        }
        // checkCheckBoxes handler
        const checkCheckBoxes = (t, t_id) => {
            activeUser.cookie_settings.forEach(s => {
                s.cookie_id === t_id ? s.cookie_active = $(t).is(':checked') : ''
            });
        }
        // set user pop
        const setUserPopClosed = () => {
            // set user pop to false
            activeUser.pop_open = false;
        }
        // set user
        const setUser = () => {
            // set user into local storage for future
            localStorage.setItem('sbe_user_cookie_settings', JSON.stringify(activeUser))
        }
        // Submit cookies and end popups
        const checkUserAndSubmit = (changedCookie) => {
            if (!changedCookie) {
                // setting all cookies to true
                // if user chooses accept all cookies
                activeUser.cookie_settings.forEach(c => {
                    c.cookie_active = true
                })
            }
            // set user pop to false
            setUserPopClosed();
            // save user to local storage
            setUser();
            setCookies(activeUser);
            closePops();
        }
            $(function(){
                // hide all elments
            cookieConsentPopElm.hide()
            cookieSettingsContElm.hide()
            cookieInfoContElm.hide()

            // find if user has visited before
            if (localStorage.getItem('sbe_user_cookie_settings') == undefined) {
                // show pop up
                var popTimer = setTimeout(() => {
                    cookieConsentPopElm.fadeIn()
                    clearTimeout(popTimer)
                }, 1500);
            } else {
                let foundUser = JSON.parse(localStorage.getItem('sbe_user_cookie_settings'))
                foundUserAction(foundUser)
            }

            // handlers
            // open settings handler
            openSettingsBtnElm.on('click', (e) => {
                e.preventDefault()
                openCookieSettings();
            })
            // close settings handler
            closeSettingsElm.on('click', (e) => {
                e.preventDefault()
                cookieSettingsContElm.fadeOut();
            })
            // show cookie info handler
            cookieInfoTitleBtnElm.on('click', (e) => {
                let info_id = e.target.dataset.cccinfo
                openCookieInfo(info_id);
            })
            // toggle on change set user
            checkboxes.on('change', (e) => {
                let t = e.target;
                let t_id = t.dataset.cookietype;
                checkCheckBoxes(t, t_id)
                // take "disabled" off confirm settings btn 
                confirmChosenCookiesBtnElm.removeAttr('disabled')
            })
            // SUBMIT BUTTONS
            // -----------------------------------------------
            // accept all cookies
            acceptAllCookiesBtnElm.on('click', (e) => {
                e.preventDefault()
                checkUserAndSubmit(false)
            });
            // settings accept all cookies btn
            acceptAllCookiesBtn2Elm.on('click', (e) => {
                e.preventDefault()
                checkUserAndSubmit(false)
            })
            // confirm chosen cookies
            confirmChosenCookiesBtnElm.on('click', (e) => {
                e.preventDefault()
                checkUserAndSubmit(true)
            })
            })
            </script>
    </div>
            `;
}
// load
    ; $(function () {
        $('body').prepend(createCookieConsentHtml())
    });