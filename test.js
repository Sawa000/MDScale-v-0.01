// ===================================定義域＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
let $perzi = 2;
let $perzi2 = 0; 
let $perzi3 = 0; 
let ckecnber = 0;
let kuri = 0;
let on_atai = 0;
var randoms = [];
var randoms0 = [];

let AllUp = 0;
let AllHp = 0;
let AllTp = 0;
let AllUH = 0;
let AllUHT = 0;

let Up2 = 0;
let Up3 = 0;
let Up4 = 0;
let Up5 = 0;
let Up6 = 0;
let Up7 = 0;
let Up8 = 0;
let Up9 = 0;
let Up10 = 0;
let Up11 = 0;
let Up12 = 0;

let Hp2 = 0;
let Hp3 = 0;
let Hp4 = 0;
let Hp5 = 0;
let Hp6 = 0;
let Hp7 = 0;
let Hp8 = 0;
let Hp9 = 0;
let Hp10 = 0;
let Hp11 = 0;
let Hp12 = 0;

let Tp2 = 0;
let Tp3 = 0;
let Tp4 = 0;
let Tp5 = 0;
let Tp6 = 0;
let Tp7 = 0;
let Tp8 = 0;
let Tp9 = 0;
let Tp10 = 0;
let Tp11 = 0;
let Tp12 = 0;
// ============乱数域＝＝＝＝＝
/** 最小値と最大値 */
var min = 0, max = 14;
for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}
var min0 = 0, max0 = 14;
for(i = min0; i <= max0; i++){
  while(true){
    var tmp0 = intRandom(min, max);
    if(!randoms0.includes(tmp0)){
      randoms0.push(tmp0);
      break;
    }
  }
}
function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}
var ransu = Math.floor( Math.random() * 30 ) ;

// ============定義＝＝＝＝＝
// 問題番号
let $nannberID = document.getElementById("nannbar");
$nannberID.textContent = textpuul[$perzi].mondaiban;
// タイトル
const $titleID = document.getElementById("title");
$titleID.textContent = textpuul[$perzi].taitoruna;
// 回答box
let $textboxID = document.getElementById("textbox");
let $input1 = document.createElement("input");
$input1.setAttribute("type", "text");
$input1.setAttribute("maxlength", textpuul[$perzi].colsID);
$input1.setAttribute("id", textpuul[$perzi].textboxID);
$input1.setAttribute("size", "10");
$textboxID.appendChild($input1);
// 問題文
const $mondaiID = document.getElementById("mondai");
$mondaiID.textContent = textpuul[$perzi].monndaina;
// 回答ボタン
let botan0ID = document.getElementById("kaiyou0");
let botan0ID1 = document.createElement("input");
botan0ID1.setAttribute("type", "button");
botan0ID1.setAttribute("id", textpuul[$perzi].botanID0);
botan0ID1.setAttribute("value", textpuul[$perzi].botan0);
botan0ID.appendChild(botan0ID1);

let botan1ID = document.getElementById("kaiyou1");
let botan1ID1 = document.createElement("input");
botan1ID1.setAttribute("type", "button");
botan1ID1.setAttribute("id", textpuul[$perzi].botanID1);
botan1ID1.setAttribute("value", textpuul[$perzi].botan1);
botan1ID.appendChild(botan1ID1);

let botan2ID = document.getElementById("kaiyou2");
let botan2ID1 = document.createElement("input");
botan2ID1.setAttribute("type", "button");
botan2ID1.setAttribute("id", textpuul[$perzi].botanID2);
botan2ID1.setAttribute("value", textpuul[$perzi].botan2);
botan2ID.appendChild(botan2ID1);

let botan3ID = document.getElementById("kaiyou3");
let botan3ID1 = document.createElement("input");
botan3ID1.setAttribute("type", "button");
botan3ID1.setAttribute("id", textpuul[$perzi].botanID3);
botan3ID1.setAttribute("value", textpuul[$perzi].botan3);
botan3ID.appendChild(botan3ID1);

let botan4ID = document.getElementById("kaiyou4");
let botan4ID1 = document.createElement("input");
botan4ID1.setAttribute("type", "button");
botan4ID1.setAttribute("id", textpuul[$perzi].botanID4);
botan4ID1.setAttribute("value", textpuul[$perzi].botan4);
botan4ID.appendChild(botan4ID1);

botan0ID.style.display="none";
botan1ID.style.display="none";
botan2ID.style.display="none";
botan3ID.style.display="none";
botan4ID.style.display="none";
//次へボタン
let nexID = document.getElementById("sousinn");
let nexID1 = document.createElement("input");
nexID1.setAttribute("type", "button");
nexID1.setAttribute("id", textpuul[$perzi].nextID);
nexID1.setAttribute("value", textpuul[$perzi].next);
nexID.appendChild(nexID1);
// 確認ボタン
// let kak = document.getElementById("testbut");
// let kakID = document.createElement("input");
// kakID.setAttribute("type", "button");
// kakID.setAttribute("id", "aaaaa");
// kakID.setAttribute("value", "確認ボタン");
// kak.appendChild(kakID);

// let botannBB = document.getElementById("testbut3");
// let botannBB1 = document.createElement("input");
// botannBB1.setAttribute("type", "button");
// botannBB1.setAttribute("id", "botann33");
// botannBB1.setAttribute("value", "結果表示");
// botannBB.appendChild(botannBB1);
// const botannBB2 = document.getElementById("botann33");

// リセットボタン
// let rise = document.getElementById("testbut2");
// let riseID = document.createElement("input");
// riseID.setAttribute("type", "button");
// riseID.setAttribute("id", "bbbb");
// riseID.setAttribute("value", "リセット");
// rise.appendChild(riseID);

// 結果ボタン
let botannAA = document.getElementById("botannAA");
let botannAA1 = document.createElement("input");
botannAA1.setAttribute("type", "button");
botannAA1.setAttribute("id", "botannBB");
botannAA1.setAttribute("value", "結果表示");
botannAA.appendChild(botannAA1);
const botannAA2 = document.getElementById("botannBB");
botannAA.style.display="none";

// ============取得＝＝＝＝＝
let texbox = document.getElementById(textpuul[$perzi].textboxID);
const nextbotID = document.getElementById(textpuul[$perzi].nextID);
const botan0ID2 = document.getElementById(textpuul[$perzi].botanID0);
const botan1ID2 = document.getElementById(textpuul[$perzi].botanID1);
const botan2ID2 = document.getElementById(textpuul[$perzi].botanID2);
const botan3ID2 = document.getElementById(textpuul[$perzi].botanID3);
const botan4ID2 = document.getElementById(textpuul[$perzi].botanID4);
const keikoku = document.getElementById("keikoku");
const kakbotID = document.getElementById("aaaaa");
const risebotID = document.getElementById("bbbb");
// =============================実行=====================================
// IDから睡眠時間まで
nextbotID.addEventListener('click', () => {
    if( texbox.value === "" ){
        keikoku.innerText = "正しい値を入れてください"
    }else{ // チェック域
        if( $perzi === 0 ){
            kakuninbutjs0 = texbox.value;
        }
        // id
        if( $perzi === 1 ){
            kakuninbutjs1= texbox.value;
        }
        // 体温
        if( $perzi === 2 ){
            kakuninbutjs2 = texbox.value;
        }
        // 脈拍
        if( $perzi === 3 ){
            kakuninbutjs3 = texbox.value;
        }
        // 睡眠
        if( $perzi === 4 ){
            kakuninbutjs4 = texbox.value;
        }
        texbox.value = '';
        keikoku.innerText = "";
        $perzi++;
        
        $input1.setAttribute("id", textpuul[$perzi].textboxID);
        $input1.setAttribute("maxlength", textpuul[$perzi].colsID);
        botan0ID1.setAttribute("id", textpuul[$perzi].botanID0);
        botan0ID1.setAttribute("value", textpuul[$perzi].botan0);
        botan1ID1.setAttribute("id", textpuul[$perzi].botanID1);
        botan1ID1.setAttribute("value", textpuul[$perzi].botan1);
        botan2ID1.setAttribute("id", textpuul[$perzi].botanID2);
        botan2ID1.setAttribute("value", textpuul[$perzi].botan2);
        botan3ID1.setAttribute("id", textpuul[$perzi].botanID3);
        botan3ID1.setAttribute("value", textpuul[$perzi].botan3);
        botan4ID1.setAttribute("id", textpuul[$perzi].botanID4);
        botan4ID1.setAttribute("value", textpuul[$perzi].botan4);
        // 番号
        $nannberID.textContent = textpuul[$perzi].mondaiban;
        // タイトル
        $titleID.textContent = textpuul[$perzi].taitoruna;
        // 回答ボックス
        let numbox = textpuul[$perzi].textbox_on_off;
        if( numbox > 0 ) {
           $textboxID.style.display = "block";
        }else{
           $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = textpuul[$perzi].monndaina;

        // ボタンBOX
        let numbut0 = textpuul[$perzi].botan_on_off0;
        let numbut1 = textpuul[$perzi].botan_on_off1;
        let numbut2 = textpuul[$perzi].botan_on_off2;
        let numbut3 = textpuul[$perzi].botan_on_off3;
        let numbut4 = textpuul[$perzi].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
           botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }

        let numnex = textpuul[$perzi].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }

});   
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ボタン＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
botan0ID2.addEventListener('click', () => {
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan0ID2.value;
        if( ckec === textpuul[$perzi].botan0 ){
            ckecnber = 0
        }        
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan0ID2.value;
        if( ckec === hppuul[$perzi2].botan0 ){
            ckecnber = 0
        }             
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan0ID2.value;
        if( ckec === hppuul[$perzi2].botan0 ){
            ckecnber = 0
        }             
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan0ID2.value;
        if( ckec === hp2puul[ransu].botan0 ){
            ckecnber = 0
        }         
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }          
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }        
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }        
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan0ID2.value;
        if( ckec === utpuul[$perzi3].botan0 ){
            ckecnber = 0
        }        
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    }
});

botan1ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan1ID2.value;  
        if( ckec === textpuul[$perzi].botan1 ){
            ckecnber = 1
        }             
        Up5 = Number(textpuul[$perzi].botanup[ckecnber]);
        Hp5 = Number(textpuul[$perzi].botanhp[ckecnber]);
        Tp5 = Number(textpuul[$perzi].botantp[ckecnber]);
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan1ID2.value; 
        if( ckec === hppuul[$perzi2].botan1 ){
            ckecnber = 1
        }            
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan1ID2.value;
        if( ckec === hppuul[$perzi2].botan1 ){
            ckecnber = 1
        }             
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan1ID2.value;
 
        if( ckec === hp2puul[ransu].botan1 ){
            ckecnber = 1
        }        
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan1ID2.value;     
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan1ID2.value;
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan1ID2.value;     
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan1ID2.value;     
        if( ckec === utpuul[$perzi3].botan1 ){
            ckecnber = 1
        }        
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        }
    }
});

botan2ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan2ID2.value; 
        if( ckec === textpuul[$perzi].botan2 ){
            ckecnber = 2
        }             
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan2ID2.value;      
        if( ckec === hppuul[$perzi2].botan2 ){
            ckecnber = 2
        }              
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan2ID2.value;      
        if( ckec === hppuul[$perzi2].botan2 ){
            ckecnber = 2
        }        
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan2ID2.value; 
        if( ckec === hp2puul[ransu].botan2 ){
            ckecnber = 2
        }        
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan2ID2.value;
        if( ckec === utpuul[$perzi3].botanID2 ){
            ckecnber = 2
        }         
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan2ID2.value;
        if( ckec === utpuul[$perzi3].botan2 ){
            ckecnber = 2
        }         
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan2ID2.value;      
        if( ckec === utpuul[$perzi3].botan2 ){
            ckecnber = 2
        }           
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan2ID2.value;  
        if( ckec === utpuul[$perzi3].botan2 ){
            ckecnber = 2
        }          
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    } 
});

botan3ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan3ID2.value;     
        if( ckec === textpuul[$perzi].botan3 ){
            ckecnber = 3
        }     
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan3ID2.value;
        if( ckec === hppuul[$perzi2].botan3 ){
            ckecnber = 3
        }  
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan3ID2.value;  
        if( ckec === hppuul[$perzi2].botan3 ){
            ckecnber = 3
        }   
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        ckec = botan3ID2.value;  
        if( ckec === hp2puul[ransu].botan3 ){
            ckecnber = 3
        }
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan3ID2.value;      
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan3ID2.value;   
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan3ID2.value;   
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan3ID2.value;        
        if( ckec === utpuul[$perzi3].botan3 ){
            ckecnber = 3
        }
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    }
});

botan4ID2.addEventListener('click', () => {     
    if( $perzi === 5 ){
        $perzi2 = randoms[0]
    }
    if( $perzi === 6 ){
        $perzi2 = randoms[1]
    }   
    if( $perzi === 8 ){
        $perzi3 = randoms0[0]
    }
    if( $perzi === 9 ){
        $perzi3 = randoms0[1]
    }
    if( $perzi === 10 ){
        $perzi3 = randoms0[2]
    }
    if( $perzi === 11 ){
        $perzi3 = randoms0[3]
    }
    if( $perzi === 12 ){
        $perzi3 = randoms0[4]
    }
// カウンター＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    if( $perzi === 5 ){
        ckec = botan4ID2.value;
        if( ckec === textpuul[$perzi].botan4 ){
            ckecnber = 4
        }        
        Up5 = textpuul[$perzi].botanup[ckecnber];
        Hp5 = textpuul[$perzi].botanhp[ckecnber];
        Tp5 = textpuul[$perzi].botantp[ckecnber];
    }
    // HP
    if( $perzi === 6 ){
        ckec = botan4ID2.value;
        if( ckec === hppuul[$perzi2].botan4 ){
            ckecnber = 4
        }        
        Up6 = hppuul[$perzi2].botanup[ckecnber];
        Hp6 = hppuul[$perzi2].botanhp[ckecnber];
        Tp6 = hppuul[$perzi2].botantp[ckecnber];
    }
    if( $perzi === 7 ){
        ckec = botan4ID2.value;
        if( ckec === hppuul[$perzi2].botan4 ){
            ckecnber = 4
        }        
        Up7 = hppuul[$perzi2].botanup[ckecnber];
        Hp7 = hppuul[$perzi2].botanhp[ckecnber];
        Tp7 = hppuul[$perzi2].botantp[ckecnber];
    }
    // 計算
    if( $perzi === 8 ){
        if( ckec === hp2puul[ransu].botan4 ){
            ckecnber = 4
        }     
        Up8 = hp2puul[ransu].botanup[ckecnber];
        Hp8 = hp2puul[ransu].botanhp[ckecnber];
        Tp8 = hp2puul[ransu].botantp[ckecnber];
    }
    // UT
    if( $perzi === 9 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up9 = utpuul[$perzi3].botanup[ckecnber];
        Hp9 = utpuul[$perzi3].botanhp[ckecnber];
        Tp9 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 10 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up10 = utpuul[$perzi3].botanup[ckecnber];
        Hp10 = utpuul[$perzi3].botanhp[ckecnber];
        Tp10 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 11 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up11 = utpuul[$perzi3].botanup[ckecnber];
        Hp11 = utpuul[$perzi3].botanhp[ckecnber];
        Tp11 = utpuul[$perzi3].botantp[ckecnber];
    }
    if( $perzi === 12 ){
        ckec = botan4ID2.value;
        if( ckec === utpuul[$perzi3].botan4 ){
            ckecnber = 4
        }     
        Up12 = utpuul[$perzi3].botanup[ckecnber];
        Hp12 = utpuul[$perzi3].botanhp[ckecnber];
        Tp12 = utpuul[$perzi3].botantp[ckecnber];
    }
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝カウンタ＝
    $perzi++;
    if($perzi < 8 ){
        $input1.setAttribute("id", hppuul[$perzi2].textboxID);
        botan0ID1.setAttribute("id", hppuul[$perzi2].botanID0);
        botan0ID1.setAttribute("value", hppuul[$perzi2].botan0);
        botan1ID1.setAttribute("id", hppuul[$perzi2].botanID1);
        botan1ID1.setAttribute("value", hppuul[$perzi2].botan1);
        botan2ID1.setAttribute("id", hppuul[$perzi2].botanID2);
        botan2ID1.setAttribute("value", hppuul[$perzi2].botan2);
        botan3ID1.setAttribute("id", hppuul[$perzi2].botanID3);
        botan3ID1.setAttribute("value", hppuul[$perzi2].botan3);
        botan4ID1.setAttribute("id", hppuul[$perzi2].botanID4);
        botan4ID1.setAttribute("value", hppuul[$perzi2].botan4);
        // 番号
        $nannberID.textContent = hppuul[$perzi2].mondaiban;
        // タイトル
        $titleID.textContent = hppuul[$perzi2].taitoruna;
        // 回答ボックス
        let numbox = hppuul[$perzi2].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hppuul[$perzi2].monndaina;
    
        // ボタンBOX
        let numbut0 = hppuul[$perzi2].botan_on_off0;
        let numbut1 = hppuul[$perzi2].botan_on_off1;
        let numbut2 = hppuul[$perzi2].botan_on_off2;
        let numbut3 = hppuul[$perzi2].botan_on_off3;
        let numbut4 = hppuul[$perzi2].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hppuul[$perzi2].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if($perzi === 8 ){
        $input1.setAttribute("id", hp2puul[ransu].textboxID);
        botan0ID1.setAttribute("id", hp2puul[ransu].botanID0);
        botan0ID1.setAttribute("value", hp2puul[ransu].botan0);
        botan1ID1.setAttribute("id", hp2puul[ransu].botanID1);
        botan1ID1.setAttribute("value", hp2puul[ransu].botan1);
        botan2ID1.setAttribute("id", hp2puul[ransu].botanID2);
        botan2ID1.setAttribute("value", hp2puul[ransu].botan2);
        botan3ID1.setAttribute("id", hp2puul[ransu].botanID3);
        botan3ID1.setAttribute("value", hp2puul[ransu].botan3);
        botan4ID1.setAttribute("id", hp2puul[ransu].botanID4);
        botan4ID1.setAttribute("value", hp2puul[ransu].botan4);
        // 番号
        $nannberID.textContent = hp2puul[ransu].mondaiban;
        // タイトル
        $titleID.textContent = hp2puul[ransu].taitoruna;
        // 回答ボックス
        let numbox = hp2puul[ransu].textbox_on_off;
        if( numbox > 0 ) {
            $textboxID.style.display = "block";
        }else{
            $textboxID.style.display = "none" ;
        }
        // 問題ボックス
        $mondaiID.textContent = hp2puul[ransu].monndaina;
    
        // ボタンBOX
        let numbut0 = hp2puul[ransu].botan_on_off0;
        let numbut1 = hp2puul[ransu].botan_on_off1;
        let numbut2 = hp2puul[ransu].botan_on_off2;
        let numbut3 = hp2puul[ransu].botan_on_off3;
        let numbut4 = hp2puul[ransu].botan_on_off4;
        if( numbut0 < 1 ) {
            botan0ID.style.display="none";
        }else{
            botan0ID.style.display="block";
        }
        if( numbut1 < 1 ) {
            botan1ID.style.display="none";
        }else{
            botan1ID.style.display="block";
        }    
        if( numbut2 < 1 ) {
            botan2ID.style.display="none";
        }else{
            botan2ID.style.display="block";
        }    
        if( numbut3 < 1 ) {
            botan3ID.style.display="none";
        }else{
            botan3ID.style.display="block";
        }
        if( numbut4 < 1 ) {
            botan4ID.style.display="none";
        }else{
            botan4ID.style.display="block";
        }
    
        let numnex = hp2puul[ransu].next_no_off;
        if( numnex < 1 ) {
            nexID.style.display="none";
        }else{
            nexID.style.display="block";
        }
    }
    if( $perzi > 8 ){
        if( $perzi < 13 ){ 
            $input1.setAttribute("id", utpuul[$perzi3].textboxID);
            botan0ID1.setAttribute("id", utpuul[$perzi3].botanID0);
            botan0ID1.setAttribute("value", utpuul[$perzi3].botan0);
            botan1ID1.setAttribute("id", utpuul[$perzi3].botanID1);
            botan1ID1.setAttribute("value", utpuul[$perzi3].botan1);
            botan2ID1.setAttribute("id", utpuul[$perzi3].botanID2);
            botan2ID1.setAttribute("value", utpuul[$perzi3].botan2);
            botan3ID1.setAttribute("id", utpuul[$perzi3].botanID3);
            botan3ID1.setAttribute("value", utpuul[$perzi3].botan3);
            botan4ID1.setAttribute("id", utpuul[$perzi3].botanID4);
            botan4ID1.setAttribute("value", utpuul[$perzi3].botan4);
            // 番号
            $nannberID.textContent = utpuul[$perzi3].mondaiban;
            // タイトル
            $titleID.textContent = utpuul[$perzi3].taitoruna;
            // 回答ボックス
            let numbox = utpuul[$perzi3].textbox_on_off;
            if( numbox > 0 ) {
                $textboxID.style.display = "block";
            }else{
                $textboxID.style.display = "none" ;
            }
            // 問題ボックス
            $mondaiID.textContent = utpuul[$perzi3].monndaina;
        
            // ボタンBOX
            let numbut0 = utpuul[$perzi3].botan_on_off0;
            let numbut1 = utpuul[$perzi3].botan_on_off1;
            let numbut2 = utpuul[$perzi3].botan_on_off2;
            let numbut3 = utpuul[$perzi3].botan_on_off3;
            let numbut4 = utpuul[$perzi3].botan_on_off4;
            if( numbut0 < 1 ) {
                botan0ID.style.display="none";
            }else{
                botan0ID.style.display="block";
            }
            if( numbut1 < 1 ) {
                botan1ID.style.display="none";
            }else{
                botan1ID.style.display="block";
            }    
            if( numbut2 < 1 ) {
                botan2ID.style.display="none";
            }else{
                botan2ID.style.display="block";
            }    
            if( numbut3 < 1 ) {
                botan3ID.style.display="none";
            }else{
                botan3ID.style.display="block";
            }
            if( numbut4 < 1 ) {
                botan4ID.style.display="none";
            }else{
                botan4ID.style.display="block";
            }
        
            let numnex = utpuul[$perzi3].next_no_off;
            if( numnex < 1 ) {
                nexID.style.display="none";
            }else{
                nexID.style.display="block";
            }
        }
        if( $perzi === 13 ){
            // 番号
            $nannberID.textContent = "";
            // タイトル
            $titleID.textContent = "";
            // 回答ボックス
            $textboxID.style.display = "none" ;
            // 問題ボックス
            $mondaiID.textContent = ""; 
            // ボタンBOX
            botan0ID.style.display="none";
            botan1ID.style.display="none";
            botan2ID.style.display="none";
            botan3ID.style.display="none";
            botan4ID.style.display="none";
            nexID.style.display="none";
            botannAA.style.display="block";
        } 
    }
});

// 確認版テスト
botannAA2.addEventListener('click', () => {
    if( kakuninbutjs3 >= 0){
        if(kakuninbutjs3 >= 1){
            Up3 = 0;
            Hp3 = 0;
            Tp3 = 1; 
        }else{
            Up3 = 0;
            Hp3 = 0;
            Tp3 = 0; 
        } 
    }else{
        Up3 = 1;
        Hp3 = 0;
        Tp3 = 0; 
    };     
    
    if( kakuninbutjs4 > 6 ){
        Up4 = 0;
        Hp4 = 0;
        Tp4 = 0; 
    }else{
        Up4 = 1;
        Hp4 = 0;
        Tp4 = 1;  
    };

    AllUp = Up2 + Up3 + Up4 + Up5 + Up6 + Up7 + Up8 + Up9 + Up10 + Up11 + Up12;
    AllHp = Hp2 + Hp3 + Hp4 + Hp5 + Hp6 + Hp7 + Hp8 + Hp9 + Hp10 + Hp11 + Hp12;
    AllTp = Tp2 + Tp3 + Tp4 + Tp5 + Tp6 + Tp7 + Tp8 + Tp9 + Tp10 + Tp11 + Tp12;

    AllUHT = AllUp + AllHp + AllTp;
    AllUH = AllUp + AllHp;
    
    const BAllUp = AllUp * AllUp;
    const BAllHp = AllHp * AllHp;
    const BAllTp = AllTp * AllTp;
// 総合ポイント
    let BAllUHT = BAllUp + BAllHp + BAllTp 
    BAllUHT = Math.sqrt (BAllUHT);
    const Paasennto0 = Math.sqrt (139);
    BAllUHT = BAllUHT/Paasennto0 ;
    BAllUHT = BAllUHT * 100 ;
    BAllUHT = 100 - Math.floor (BAllUHT);
// 新しいポイント 
    let BAllHU = BAllHp + BAllUp;
    const Paasennto1 = Math.floor (130);
    BAllHU = BAllHU/Paasennto1 ;
    BAllHU = BAllHU * 100 ;
    BAllHU = 100 - Math.floor (BAllHU);
// 普段の業務
    let BAllUT = BAllTp + BAllUp
    BAllUT = BAllUT/Paasennto1;
    BAllUT = BAllUT * 100;
    BAllUT = 100 - Math.floor (BAllUT);

    const jodsougo0 = document.getElementById("jodsougo0");
    jodsougo0.innerText = "・全体の総評";
    const jodsougo1 = document.getElementById("jodsougo1");
    jodsougo1.innerText = "全体の適性は「" + BAllUHT + "％」です";

    const jodnew0 = document.getElementById("jodnew0");
    jodnew0.innerText = "・新しい仕事への適性";
    const jodnew1 = document.getElementById("jodnew1");
    jodnew1.innerText = "新しい仕事の適性は「" + BAllHU + "％」です"

    const jodold0 = document.getElementById("jodold0");
    jodold0.innerText = "・普段の仕事への適性";
    const jodold1 = document.getElementById("jodold1");
    jodold1.innerText = "普段の仕事の適性は「" + BAllUT + "％」です";

    const jodothenA = document.getElementById("jodothenA");
    jodothenA.innerText = "・送信データ数値";

    const jodothen0 = document.getElementById("jodothen0");
    const errdeta = kakuninbutjs2 + AllHp.toString(16) + AllUp.toString(16) + AllTp.toString(16) + randoms[0].toString(16) + randoms[1].toString(16) + randoms0[0].toString(16) + randoms0[1].toString(16) + randoms0[2].toString(16) + randoms0[3].toString(16) + randoms0[4].toString(16)
    jodothen0.innerText = errdeta;
   
    let jodothen2 = document.getElementById("jodothen2");  
    let jodothen20 = document.createElement("input");
    jodothen20.setAttribute("type", "button");
    jodothen20.setAttribute("id", "btn_copy");
    jodothen20.setAttribute("value", "送信URL");
    jodothen2.appendChild(jodothen20);

    // let jodothen3 = document.getElementById("jodothen3");  
    // let jodothen30 = document.createElement("input");
    // jodothen30.setAttribute("type", "button");
    // jodothen30.setAttribute("id", "btn_copy1");
    // jodothen30.setAttribute("value", "コピー");
    // jodothen30.setAttribute("onclick", "copyToClipboard()");
    // jodothen3.appendChild(jodothen30);
});

jodothen2.addEventListener('click', () => { 
    location.href="https://forms.gle/ttxvFpbPfyN951TE7";
});