import React, { useState } from "react";

export default function Logo(props) {
    const [color] = useState(props.color);


    return (
        <>
            <div className="p-0 m-0">
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="150"
                    viewBox="0 0 1920.000000 1080.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M2065 8595 c-75 -13 -172 -50 -240 -89 -70 -42 -169 -155 -214 -248
-103 -209 -122 -444 -79 -992 28 -361 30 -753 5 -901 -50 -290 -143 -484 -305
-637 -152 -143 -319 -210 -524 -209 -54 0 -105 -2 -113 -5 -24 -9 -65 -87 -65
-122 0 -17 4 -42 10 -56 9 -25 11 -26 117 -25 181 0 327 -51 482 -169 113 -86
201 -195 271 -337 151 -304 185 -638 130 -1270 -35 -402 -32 -708 10 -869 60
-235 208 -380 440 -431 64 -13 129 -15 432 -12 396 4 379 1 412 72 23 47 21
92 -4 105 -15 8 -128 10 -363 8 -334 -3 -344 -2 -424 21 -81 23 -176 72 -220
113 -79 73 -133 203 -154 363 -15 120 -7 410 18 690 21 242 24 772 5 890 -61
368 -199 631 -431 817 -45 36 -107 79 -137 95 -30 15 -54 30 -54 33 0 3 35 28
78 57 238 158 415 429 501 768 61 242 70 552 31 1070 -26 347 -24 698 3 792
46 160 140 246 314 290 59 15 115 17 408 15 373 -3 372 -3 412 57 24 36 31
105 12 116 -6 4 -164 8 -352 10 -250 3 -361 0 -412 -10z"
                        />
                        <path
                            d="M16368 8592 c-15 -17 -3 -90 20 -121 38 -51 42 -52 412 -49 328 2
349 1 424 -20 163 -45 247 -124 292 -271 23 -78 37 -284 30 -446 -4 -82 -16
-271 -27 -420 -21 -300 -25 -605 -8 -753 39 -362 159 -651 360 -866 69 -74
192 -174 243 -197 32 -15 33 -26 4 -34 -46 -14 -193 -120 -263 -190 -172 -173
-283 -404 -336 -700 -21 -115 -23 -161 -23 -400 0 -180 6 -345 19 -495 27
-309 28 -737 2 -830 -57 -208 -170 -322 -372 -376 -63 -17 -102 -19 -413 -16
-315 3 -345 2 -363 -14 -10 -9 -19 -26 -19 -37 0 -32 40 -106 63 -119 15 -8
134 -13 376 -15 401 -5 432 -1 576 67 142 68 243 199 289 376 41 160 45 447
10 844 -22 259 -29 632 -15 772 48 459 237 784 553 948 108 57 207 80 338 80
115 0 123 3 135 53 10 37 -19 111 -52 137 -22 17 -41 20 -133 20 -131 0 -230
23 -339 80 -246 128 -407 367 -472 702 -45 231 -46 422 -8 933 29 378 23 706
-14 847 -78 295 -253 466 -524 513 -116 20 -748 18 -765 -3z"
                        />
                        <path
                            d="M15320 6690 l0 -359 -62 43 c-79 55 -117 71 -205 85 -162 28 -333
-27 -449 -143 -142 -142 -214 -355 -214 -630 0 -409 138 -676 387 -749 194
-57 383 -11 508 124 29 33 56 59 58 59 3 0 8 -36 12 -80 l7 -80 169 0 169 0 0
1025 c0 564 -3 1025 -7 1025 -5 0 -82 9 -173 20 -91 11 -173 20 -182 20 -17 0
-18 -24 -18 -360z m-135 -529 c24 -11 64 -38 89 -61 l46 -43 0 -343 0 -343
-56 -60 c-67 -73 -104 -97 -173 -112 -107 -23 -214 35 -259 139 -49 113 -67
387 -38 554 43 238 207 351 391 269z"
                        />
                        <path
                            d="M8235 6910 c-363 -40 -646 -314 -726 -705 -10 -49 -19 -103 -19 -120
0 -27 -3 -25 -29 27 -84 166 -208 274 -370 322 -213 63 -462 30 -626 -82 -164
-112 -260 -299 -287 -558 -26 -248 33 -493 156 -653 75 -97 202 -176 333 -207
93 -22 286 -22 378 0 243 59 406 232 475 505 l12 44 22 -64 c69 -195 190 -341
349 -419 131 -64 215 -82 397 -82 217 -1 350 30 545 127 l100 50 3 473 2 472
-345 0 c-269 0 -345 -3 -345 -12 0 -7 7 -70 17 -140 l17 -128 143 0 143 0 0
-244 0 -244 -49 -21 c-77 -33 -145 -44 -250 -39 -162 7 -247 61 -315 200 -45
91 -64 183 -77 363 -28 386 57 667 235 780 77 48 138 65 236 65 130 0 223 -33
327 -116 l41 -34 101 107 c56 59 101 110 101 113 -1 14 -142 114 -205 145
-131 65 -322 94 -490 75z m-1258 -751 c132 -64 194 -247 179 -534 -11 -234
-69 -361 -187 -412 -80 -34 -199 -22 -268 27 -88 64 -130 184 -138 400 -11
291 48 460 182 521 58 27 175 26 232 -2z"
                        />
                        <path
                            d="M3500 5916 l0 -956 195 0 195 0 0 329 0 329 213 5 c189 4 222 8 306
31 118 33 199 76 275 146 112 104 160 205 178 380 33 314 -107 542 -391 634
-144 47 -161 48 -573 53 l-398 5 0 -956z m775 644 c76 -29 145 -97 169 -165
21 -62 21 -213 1 -282 -20 -67 -88 -143 -154 -172 -64 -27 -160 -41 -293 -41
l-108 0 0 346 0 346 163 -4 c137 -4 171 -8 222 -28z"
                        />
                        <path
                            d="M10795 6460 c-92 -11 -200 -33 -300 -62 -127 -37 -119 -19 -70 -158
23 -66 44 -123 47 -125 2 -3 28 2 57 11 201 59 391 72 495 34 108 -41 145 -96
149 -225 l2 -70 -210 -7 c-183 -5 -222 -9 -304 -32 -267 -74 -391 -220 -391
-457 0 -224 125 -386 340 -440 30 -7 100 -13 155 -13 167 1 325 58 424 154 24
23 44 40 45 38 16 -25 65 -87 81 -101 48 -42 164 -87 226 -87 24 0 28 7 64
122 28 91 35 123 25 126 -31 11 -72 60 -80 97 -5 22 -10 204 -10 405 0 404 -5
445 -62 552 -59 110 -179 193 -327 223 -88 19 -258 26 -356 15z m385 -958 c0
-138 0 -139 -29 -179 -106 -146 -335 -188 -439 -80 -38 39 -52 81 -52 157 1
97 43 160 134 201 66 29 119 36 264 38 l122 1 0 -138z"
                        />
                        <path
                            d="M13802 6455 c-112 -25 -219 -84 -297 -164 -22 -22 -43 -41 -46 -41
-4 0 -9 24 -13 53 -4 28 -9 67 -12 85 l-6 32 -164 0 -164 0 0 -730 0 -730 190
0 190 0 0 521 0 521 62 64 c81 85 146 117 238 118 82 0 113 -17 145 -80 19
-37 20 -62 23 -591 l3 -553 189 0 190 0 0 533 c0 312 -4 568 -11 617 -24 200
-136 324 -315 350 -88 12 -125 12 -202 -5z"
                        />
                        <path
                            d="M5830 6453 c-132 -25 -259 -133 -345 -295 -21 -39 -36 -57 -39 -48
-3 8 -17 74 -31 145 -15 72 -29 138 -31 148 -5 16 -26 17 -250 17 l-244 0 0
-125 0 -125 100 0 100 0 0 -480 0 -480 -100 0 -100 0 0 -125 0 -125 435 0 435
0 0 125 0 125 -145 0 -145 0 0 245 c0 231 1 247 24 309 67 187 208 333 344
359 l32 7 0 -140 0 -140 128 0 127 0 33 287 c18 157 31 288 29 289 -2 2 -29
10 -62 19 -56 14 -234 19 -295 8z"
                        />
                        <path
                            d="M9940 6453 c-14 -3 -57 -20 -96 -38 -91 -44 -183 -139 -240 -249
l-42 -79 -10 49 c-6 27 -21 102 -33 167 l-23 117 -248 0 -248 0 0 -125 0 -125
105 0 105 0 0 -480 0 -480 -105 0 -105 0 0 -125 0 -125 440 0 440 0 0 125 0
125 -150 0 -150 0 0 243 c0 269 1 274 78 421 68 130 186 229 300 251 l32 7 0
-141 0 -141 125 0 c93 0 125 3 125 13 0 6 14 127 30 267 16 140 30 265 30 276
0 33 -90 54 -226 53 -60 -1 -120 -4 -134 -6z"
                        />
                        <path
                            d="M11732 5833 c4 -574 4 -590 26 -653 62 -184 181 -264 392 -264 167 0
293 49 402 155 l57 56 6 -46 c3 -25 8 -63 11 -83 l6 -38 164 0 164 0 0 730 0
730 -190 0 -190 0 0 -524 0 -524 -51 -56 c-92 -101 -231 -148 -320 -108 -51
22 -72 44 -88 91 -8 24 -11 197 -11 577 l0 544 -191 0 -190 0 3 -587z"
                        />
                        <path
                            d="M9435 4471 c-86 -21 -115 -60 -115 -157 l0 -74 -60 0 c-57 0 -60 -1
-60 -25 0 -24 3 -25 60 -25 l60 0 0 -190 0 -190 25 0 25 0 0 190 0 190 80 0
c79 0 80 0 80 25 0 25 -1 25 -80 25 l-80 0 0 64 c0 54 4 70 24 93 22 26 30 28
88 26 34 -1 72 -3 83 -5 14 -2 21 3 23 19 3 18 -4 23 -48 32 -56 12 -62 12
-105 2z"
                        />
                        <path
                            d="M7850 4445 c0 -24 2 -25 75 -25 l75 0 0 -274 c0 -261 1 -275 21 -299
26 -34 84 -51 141 -43 55 8 73 20 65 41 -6 13 -15 15 -52 10 -52 -8 -87 -1
-109 21 -14 13 -16 55 -16 305 l0 289 -100 0 -100 0 0 -25z"
                        />
                        <path
                            d="M3607 4413 c-4 -7 -170 -511 -192 -581 -6 -21 -4 -23 21 -20 26 3 30
10 52 81 l23 77 134 0 133 0 27 -80 c25 -75 28 -80 55 -80 l29 0 -70 208 c-38
114 -83 251 -100 305 l-30 97 -39 0 c-21 0 -41 -3 -43 -7z m93 -209 c28 -81
50 -154 50 -161 0 -10 -26 -13 -105 -13 -58 0 -105 3 -105 6 0 14 103 324 107
321 2 -2 26 -71 53 -153z"
                        />
                        <path
                            d="M12630 4308 c-14 -5 -73 -14 -133 -18 -90 -6 -113 -11 -145 -33 -86
-56 -97 -188 -20 -241 l22 -16 -22 -23 c-31 -33 -29 -86 3 -117 22 -20 37 -24
113 -27 110 -5 128 -9 152 -33 49 -49 8 -105 -87 -120 -104 -17 -193 14 -193
66 0 8 -10 14 -25 14 -29 0 -32 -15 -10 -66 20 -49 68 -67 175 -68 65 0 96 5
132 21 75 34 103 100 70 162 -28 52 -79 74 -190 80 -106 7 -125 18 -105 64 11
23 15 25 75 20 115 -8 188 54 188 160 0 42 -5 54 -33 82 l-33 33 58 4 c32 2
60 7 63 10 7 7 -12 58 -22 57 -5 0 -19 -5 -33 -11z m-89 -97 c23 -24 29 -38
29 -75 0 -25 -5 -57 -12 -71 -23 -51 -99 -70 -163 -40 -39 19 -55 51 -55 111
0 37 6 51 29 75 26 25 37 29 86 29 49 0 60 -4 86 -29z"
                        />
                        <path
                            d="M4456 4276 c-56 -21 -86 -55 -93 -104 -8 -62 35 -102 151 -137 98
-30 126 -51 126 -95 0 -87 -147 -118 -248 -52 -23 15 -25 15 -38 -3 -20 -28
-18 -31 31 -55 138 -67 315 -10 315 100 0 82 -35 115 -166 155 -85 26 -114 47
-114 82 0 69 127 96 222 47 25 -13 32 -14 39 -2 13 20 6 31 -32 50 -50 25
-145 32 -193 14z"
                        />
                        <path
                            d="M4947 4280 c-16 -5 -44 -20 -63 -35 l-34 -26 0 30 c0 26 -4 31 -25
31 l-25 0 0 -328 0 -329 30 5 30 4 0 109 0 110 29 -22 c74 -55 194 -24 241 61
23 41 25 56 25 160 0 141 -16 182 -85 218 -46 23 -76 26 -123 12z m87 -52 c43
-19 66 -82 65 -179 0 -105 -14 -147 -59 -177 -43 -29 -102 -26 -149 7 l-31 22
0 133 c0 131 0 132 28 158 52 49 95 60 146 36z"
                        />
                        <path
                            d="M5306 4277 c-51 -12 -62 -23 -47 -45 7 -12 19 -12 66 -2 110 23 175
-12 175 -93 l0 -45 -88 -4 c-97 -4 -139 -21 -176 -71 -28 -38 -28 -116 0 -155
49 -67 156 -80 234 -28 l37 24 19 -23 c11 -13 29 -26 40 -30 29 -8 38 27 13
49 -17 14 -19 32 -19 168 0 172 -10 208 -67 241 -41 23 -124 30 -187 14z m194
-296 c0 -66 -1 -70 -35 -100 -30 -26 -44 -31 -86 -31 -65 0 -86 12 -100 58 -9
31 -8 45 5 75 20 48 60 66 149 67 l67 0 0 -69z"
                        />
                        <path
                            d="M5816 4275 c-88 -31 -141 -120 -141 -235 0 -193 144 -289 318 -212
44 19 47 23 37 42 -8 15 -17 19 -28 14 -127 -53 -202 -38 -246 50 -28 57 -25
172 5 227 44 77 122 97 212 54 37 -17 38 -17 51 1 12 16 11 20 -6 33 -26 18
-104 41 -137 41 -14 -1 -43 -7 -65 -15z"
                        />
                        <path
                            d="M6248 4281 c-50 -16 -86 -51 -114 -108 -53 -108 -31 -262 48 -328 59
-50 157 -56 238 -15 43 22 48 31 26 49 -11 10 -21 9 -43 -3 -101 -52 -204 -12
-232 89 -6 22 -11 43 -11 48 0 4 72 7 160 7 l160 0 0 58 c0 73 -40 158 -86
184 -37 22 -109 31 -146 19z m119 -67 c33 -20 54 -57 60 -104 l6 -41 -134 3
-134 3 4 30 c12 106 114 161 198 109z"
                        />
                        <path
                            d="M7113 4277 c-98 -37 -153 -172 -124 -308 24 -111 83 -163 187 -164
113 0 179 73 191 212 11 132 -42 237 -132 262 -49 13 -81 13 -122 -2z m138
-63 c33 -30 49 -70 56 -138 12 -131 -33 -214 -119 -223 -24 -2 -54 2 -68 9
-105 56 -105 310 0 366 33 17 105 9 131 -14z"
                        />
                        <path
                            d="M7596 4276 c-22 -8 -52 -24 -67 -35 l-28 -21 -3 28 c-2 19 -9 28 -25
30 l-23 3 0 -235 0 -236 25 0 25 0 0 173 0 173 33 31 c44 42 69 53 116 53 31
0 44 -6 60 -26 20 -25 21 -40 21 -215 l0 -189 30 0 30 0 0 185 c0 195 -6 232
-47 267 -27 25 -100 31 -147 14z"
                        />
                        <path
                            d="M9763 4279 c-87 -26 -140 -134 -130 -265 11 -149 95 -228 221 -210
120 18 192 171 152 325 -19 74 -38 104 -81 131 -39 24 -116 33 -162 19z m142
-69 c34 -32 49 -83 49 -165 0 -124 -36 -183 -117 -192 -87 -10 -135 44 -145
163 -8 108 26 193 88 217 31 13 101 -1 125 -23z"
                        />
                        <path
                            d="M10323 4271 c-24 -11 -52 -35 -65 -55 -13 -20 -26 -36 -30 -36 -5 0
-8 23 -8 50 l0 50 -60 0 c-57 0 -60 -1 -60 -25 0 -22 4 -25 35 -25 l35 0 0
-185 0 -185 -35 0 c-31 0 -35 -3 -35 -25 l0 -25 116 0 c114 0 115 0 112 23 -3
19 -10 22 -50 25 l-48 3 0 113 c0 105 2 118 28 167 28 53 61 81 115 93 27 6
27 6 27 -49 0 -51 2 -55 24 -55 30 0 36 16 36 90 0 51 -2 58 -22 64 -39 10
-71 6 -115 -13z"
                        />
                        <path
                            d="M11105 4271 c-22 -10 -46 -25 -54 -34 -17 -21 -31 -13 -31 19 0 17
-5 24 -20 24 -20 0 -20 -7 -20 -329 l0 -328 25 5 c25 4 25 5 25 112 l0 107 47
-23 c150 -77 275 46 260 256 -8 118 -44 179 -118 200 -47 14 -68 12 -114 -9z
m113 -47 c34 -24 53 -69 59 -143 7 -84 -10 -162 -44 -195 -45 -46 -118 -45
-173 1 l-30 25 0 120 c0 65 5 128 10 138 31 57 130 88 178 54z"
                        />
                        <path
                            d="M11655 4276 c-31 -14 -74 -56 -93 -91 -11 -19 -11 -18 -12 6 0 15 -3
41 -6 58 -6 30 -7 31 -65 31 -56 0 -59 -1 -59 -25 0 -22 4 -25 40 -25 l40 0 0
-184 0 -185 -37 -3 c-31 -2 -39 -7 -41 -25 -3 -23 -2 -23 112 -23 l116 0 0 25
c0 23 -3 25 -50 25 l-50 0 0 108 c0 92 4 114 24 157 13 28 35 61 49 73 24 23
91 45 101 34 4 -3 6 -27 6 -54 0 -44 2 -48 24 -48 23 0 25 3 28 73 2 39 2 74
1 76 -7 11 -102 10 -128 -3z"
                        />
                        <path
                            d="M11965 4275 c-52 -18 -101 -72 -116 -127 -21 -77 -14 -183 16 -243
31 -65 74 -94 147 -101 125 -12 208 84 208 239 0 125 -50 212 -135 236 -51 14
-71 13 -120 -4z m120 -49 c54 -23 70 -64 70 -181 0 -77 -4 -108 -18 -132 -24
-45 -69 -66 -124 -60 -82 9 -114 63 -114 193 0 98 18 146 65 175 37 23 75 24
121 5z"
                        />
                        <path
                            d="M12987 4280 c-36 -11 -54 -26 -89 -74 l-28 -39 0 44 c0 63 -8 71 -71
67 -46 -3 -54 -6 -54 -23 0 -16 8 -21 38 -23 l37 -3 0 -184 0 -184 -37 -3
c-31 -2 -39 -7 -41 -25 -3 -23 -2 -23 112 -23 l116 0 0 25 c0 23 -4 25 -46 25
l-46 0 4 128 c3 121 5 131 30 170 33 48 61 69 103 74 30 3 30 2 33 -49 3 -48
5 -53 26 -53 22 0 24 5 30 71 4 39 5 73 2 76 -10 10 -91 12 -119 3z"
                        />
                        <path
                            d="M13246 4277 c-51 -12 -62 -23 -47 -45 7 -12 19 -12 66 -2 110 23 175
-12 175 -93 l0 -45 -88 -4 c-97 -4 -139 -21 -176 -71 -28 -38 -28 -116 0 -155
49 -67 156 -80 234 -28 l37 24 19 -23 c11 -13 29 -26 40 -30 29 -8 38 27 13
49 -17 14 -19 32 -19 168 0 172 -10 208 -67 241 -41 23 -124 30 -187 14z m194
-296 c0 -66 -1 -70 -35 -100 -30 -26 -44 -31 -86 -31 -65 0 -86 12 -100 58 -9
31 -8 45 5 75 20 48 60 66 149 67 l67 0 0 -69z"
                        />
                        <path
                            d="M13682 4275 c-18 -8 -35 -21 -38 -30 -9 -24 -24 -18 -24 10 0 18 -5
25 -20 25 -19 0 -20 -7 -20 -235 l0 -235 25 0 25 0 0 188 0 188 28 27 c32 31
86 37 96 11 3 -9 6 -105 6 -215 l0 -199 30 0 30 0 0 186 0 186 30 29 c23 24
37 30 62 27 30 -3 33 -7 40 -43 4 -22 7 -118 7 -212 l1 -173 25 0 25 0 0 195
c0 219 -8 257 -57 276 -36 14 -96 -3 -117 -33 l-15 -21 -23 27 c-29 32 -73 41
-116 21z"
                        />
                        <path
                            d="M14122 4275 c-18 -8 -35 -21 -38 -30 -9 -24 -24 -18 -24 10 0 18 -5
25 -20 25 -19 0 -20 -7 -20 -235 l0 -235 25 0 25 0 0 188 0 188 28 27 c32 31
86 37 96 11 3 -9 6 -105 6 -215 l0 -199 30 0 30 0 0 186 0 186 30 29 c23 24
37 30 62 27 30 -3 33 -7 40 -43 4 -22 7 -118 7 -212 l1 -173 25 0 25 0 0 195
c0 219 -8 257 -57 276 -36 14 -96 -3 -117 -33 l-15 -21 -23 27 c-29 32 -73 41
-116 21z"
                        />
                        <path
                            d="M14620 4274 c-93 -40 -135 -125 -128 -254 4 -60 10 -87 31 -123 49
-83 136 -113 239 -83 66 19 89 40 67 62 -14 13 -21 12 -64 -7 -102 -45 -198 5
-212 110 l-6 40 159 3 159 3 -3 60 c-6 100 -37 154 -107 186 -48 22 -88 23
-135 3z m136 -61 c28 -18 54 -72 54 -112 l0 -31 -130 0 -130 0 0 25 c0 109
118 176 206 118z"
                        />
                        <path
                            d="M15175 4271 c-22 -10 -51 -34 -65 -54 -21 -30 -26 -33 -32 -19 -4 9
-7 32 -7 50 l-1 32 -60 0 c-57 0 -60 -1 -60 -25 0 -22 4 -25 40 -25 l40 0 0
-185 0 -185 -40 0 c-36 0 -40 -2 -40 -25 l0 -25 115 0 115 0 0 25 c0 23 -3 25
-50 25 l-50 0 0 109 c0 87 4 118 20 153 31 68 59 95 115 108 l35 8 0 -54 c0
-53 0 -54 30 -54 l30 0 0 74 c0 58 -3 75 -16 80 -29 11 -79 6 -119 -13z"
                        />
                        <path
                            d="M15505 4283 c-98 -26 -140 -96 -101 -171 17 -34 37 -45 145 -80 95
-30 128 -61 117 -106 -19 -76 -140 -99 -235 -45 -26 15 -36 17 -47 8 -24 -20
-15 -37 34 -61 37 -18 63 -23 122 -23 128 0 196 53 187 143 -7 65 -42 95 -152
132 -51 17 -100 39 -109 49 -22 24 -20 64 5 87 29 26 139 27 188 1 30 -15 37
-15 49 -3 19 19 9 33 -36 52 -39 16 -135 26 -167 17z"
                        />
                        <path
                            d="M8300 4275 c0 -16 164 -461 172 -466 12 -8 -13 -69 -38 -91 -11 -10
-36 -24 -57 -33 -42 -17 -53 -55 -17 -55 60 0 126 56 160 135 22 51 180 498
180 509 0 4 -12 6 -27 4 -25 -3 -30 -15 -98 -212 l-72 -208 -73 211 c-72 208
-74 211 -102 211 -15 0 -28 -2 -28 -5z"
                        />
                    </g>
                </svg>
            </div>
        </>
    );
}
