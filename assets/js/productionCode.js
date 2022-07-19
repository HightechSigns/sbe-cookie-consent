/* 
sbe-cookie-consent v0.0.1 
(c) 2022 Developed By Tom Ruff
Ruff Web Development
MIT License
*/
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
    _id = `sbe-${loadChars()}-${loadChars()}-${loadChars()}`
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
    }, 1500)
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
// on load
$(function () {
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