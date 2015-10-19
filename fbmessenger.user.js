// ==UserScript==
// @name         Messenger Make Right Sidebar smaller
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://www.messenger.com/*
// @grant        GM_addStyle
// ==/UserScript==

// Messages channels overview
GM_addStyle ( "                                     \
._1enh {                                   \
max-width: 70px !important; \
min-width: 70px !important; \
position: absolute; \
right: 0; \
}                                               \
" );

// Active message channel
GM_addStyle ( "                                     \
._1ht1._1ht2 {                                   \
    background-color: rgba(255,0,0,0.3); \
}                                               \
" );

//  Message channels
GM_addStyle ( "                                     \
._1ht1 {                                   \
    background-color: black; \
}                                               \
" );

// Message header
GM_addStyle ( " \
._1_fz ._5743, ._1_fz ._17w2 { \
    font-size: 30px; \
    font-weight: 500; \
    color: rgb(8, 239, 19); \
}\
" );

// Message header background
GM_addStyle ( " \
._5742 { \
    background-color: black; \
}\
" );

// Font size for text window
GM_addStyle ( "\
.__i_ { \
    font-size: 16px;\
}\
");

// Message field
GM_addStyle ( "\
    body { \
    color: rgb(255, 0, 0);\
} \
"    );

// Message box from me
GM_addStyle ( "\
    ._nd_ ._hh7 { \
    background-color: black; \
    color: rgb(255, 0, 0);\
} \
._nd_ ._hh7:active, ._nd_._-5k ._hh7 {\
    background-color: black;\
}\
    ._nd_ ._hh7 a { \
    color: rgb(255, 0, 0);\
} \
"    );

// Message box from me position
GM_addStyle ( "\
._o46._3i_m ._3058 { \
    clear: left; \
    float: left; \
} \
._o46._3i_m ._3058._15gf ._2poz {\
    float: left;\
}\
" );

// Message box from others
GM_addStyle ( "\
._hh7 { \
    background-color: black; \
    color: rgb(8, 239, 19); \
} \
._hh7:active { \
    background-color: black; \
    color: rgb(8, 239, 19); \
} \
._hh7 a {\
color: rgb(8, 239, 19); \
             }\
._hh7>span>a:hover { \
    background-color: black;\
}\
" );

// Background of message area
GM_addStyle ( "\
._4sp8 { \
    background-color: black; \
    display: flex; \
    font-size: 14px; \
    min-width: 320px; \
    margin-right: 70px; \
} \
"  );

// Buttons container
GM_addStyle( "\
._fl2 a { \
display: none; \
} \
" );

// Information container
GM_addStyle( "\
._4_j5 {\
    background-color: #fff; \
    border-left: 1px solid rgba(0, 0, 0, .10); \
    flex: 0 2 33.33%; \
    max-width: 0px; \
    min-width: 0px; \
} \
" );

// Monospace
GM_addStyle( "\
._4sp8 { \
    font-family: monospace; \
} \
a { \
color: rgb(8, 239, 19); \
} \
" ); 

