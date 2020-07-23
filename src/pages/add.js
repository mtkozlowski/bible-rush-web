import React, { useEffect, useState } from 'react';
import Main from '../styles/Templates/Main';
import RegularSelection from '../styles/Templates/RegularSection';
import getYoutubeVideoDetails from '../tasks/getYoutubeVideoDetails';


function Add ({ match }) {
    useEffect(() => {
        const fetchItem = async () => {
            const url = new URL("http://localhost:8000/details");
            const params = {query: match.params.id};

            url.search = new URLSearchParams(params).toString();
            const data = await fetch(url);
            const item = await data.json();
            setItem(...item);
        }

        fetchItem();
    }, [match]);

    const [item, setItem] = useState({});



    return (
        <Main>
            <RegularSelection>
                <h1>Add!</h1>

            </RegularSelection>
        </Main>
    )
}

const dataJSON = {
    "kind":"youtube#videoListResponse",
    "etag":"3t3IRWojkN_jCoaKf3Om-GJGL4g",
    "items":[
       {
          "kind":"youtube#video",
          "etag":"TrbNeVBdb719Vlcpqh6XwSI1BHw",
          "id":"m-TXNvmairY",
          "snippet":{
             "publishedAt":"2020-06-12T22:00:11Z",
             "channelId":"UCLlzlc4XSItHVTcMnrIlv1w",
             "title":"Chlebak [#853] 13.06.2020",
             "description":"#Chlebak #TomaszGrabowskiOP #NorbertOczkowskiOP\n\nCodzienny komentarz do czytań mszalnych prowadzony przez o. Tomasza Grabowskiego OP i o. Norberta Oczkowskiego OP.\n_______________________________________ \n\n1. czytanie (1 Krl 19, 19-21)\n\nEliasz zszedł z góry i odnalazł Elizeusza, syna Szafata, orzącego: dwanaście par wołów przed nim, a on przy dwunastej. Wtedy Eliasz, podszedłszy do niego, zarzucił na niego swój płaszcz.\n\nWówczas Elizeusz zostawił woły i pobiegłszy za Eliaszem, powiedział: «Pozwól mi ucałować mego ojca i moją matkę, abym potem poszedł za tobą».\n\nOn mu odpowiedział: «Idź i wracaj, bo po co ci to uczyniłem?»\n\nWtedy powrócił do niego i zaraz wziął parę wołów, złożył je na ofiarę, a na jarzmie wołów ugotował ich mięso oraz dał ludziom, aby zjedli. Następnie zabrał się i poszedłszy za Eliaszem, stał się jego sługą.\n\n\nEwangelia (Mt 5, 33-37)\n\nJezus powiedział do swoich uczniów:\n\n«Słyszeliście, że powiedziano przodkom: „Nie będziesz fałszywie przysięgał, lecz dotrzymasz Panu swej przysięgi”. A Ja wam powiadam: Wcale nie przysięgajcie – ani na niebo, bo jest tronem Boga; ani na ziemię, bo jest podnóżkiem stóp Jego; ani na Jerozolimę, bo jest miastem wielkiego Króla. Ani na swoją głowę nie przysięgaj, bo nawet jednego włosa nie możesz uczynić białym albo czarnym.\n\nNiech wasza mowa będzie: Tak, tak; nie, nie. A co nadto jest, od Złego pochodzi».\n\n _______________________________________\n\nZdjęcia i montaż: Piotr Hołowienko (http://www.thisday.pl)\nZdjęcia czołówka: Marcin Jończyk https://www.youtube.com/channel/UCoKF0ZJRUPhasLJ-H701S8g  \n________________________________________\n\nZapraszamy do subskrybowania kanału na YT:\nhttp://bit.ly/dominikanieYT\n\nMożna nas również znaleźć na Facebooku: \nhttp://bit.ly/dominikanieFB\n\nTu nas można wesprzeć: https://patronite.pl/langustanapalmie\n_______________________________________",
             "thumbnails":{
                "default":{
                   "url":"https://i.ytimg.com/vi/m-TXNvmairY/default.jpg",
                   "width":120,
                   "height":90
                },
                "medium":{
                   "url":"https://i.ytimg.com/vi/m-TXNvmairY/mqdefault.jpg",
                   "width":320,
                   "height":180
                },
                "high":{
                   "url":"https://i.ytimg.com/vi/m-TXNvmairY/hqdefault.jpg",
                   "width":480,
                   "height":360
                },
                "standard":{
                   "url":"https://i.ytimg.com/vi/m-TXNvmairY/sddefault.jpg",
                   "width":640,
                   "height":480
                },
                "maxres":{
                   "url":"https://i.ytimg.com/vi/m-TXNvmairY/maxresdefault.jpg",
                   "width":1280,
                   "height":720
                }
             },
             "channelTitle":"Dominikanie.pl",
             "tags":[
                "Langusta na palmie",
                "Adam Szustak OP",
                "Adam Szustak",
                "dominikanie",
                "Biblia",
                "Słowo Boże",
                "kazania",
                "dominikanie.pl",
                "dominikaniepl"
             ],
             "categoryId":"22",
             "liveBroadcastContent":"none",
             "defaultLanguage":"pl",
             "localized":{
                "title":"Chlebak [#853] 13.06.2020",
                "description":"#Chlebak #TomaszGrabowskiOP #NorbertOczkowskiOP\n\nCodzienny komentarz do czytań mszalnych prowadzony przez o. Tomasza Grabowskiego OP i o. Norberta Oczkowskiego OP.\n_______________________________________ \n\n1. czytanie (1 Krl 19, 19-21)\n\nEliasz zszedł z góry i odnalazł Elizeusza, syna Szafata, orzącego: dwanaście par wołów przed nim, a on przy dwunastej. Wtedy Eliasz, podszedłszy do niego, zarzucił na niego swój płaszcz.\n\nWówczas Elizeusz zostawił woły i pobiegłszy za Eliaszem, powiedział: «Pozwól mi ucałować mego ojca i moją matkę, abym potem poszedł za tobą».\n\nOn mu odpowiedział: «Idź i wracaj, bo po co ci to uczyniłem?»\n\nWtedy powrócił do niego i zaraz wziął parę wołów, złożył je na ofiarę, a na jarzmie wołów ugotował ich mięso oraz dał ludziom, aby zjedli. Następnie zabrał się i poszedłszy za Eliaszem, stał się jego sługą.\n\n\nEwangelia (Mt 5, 33-37)\n\nJezus powiedział do swoich uczniów:\n\n«Słyszeliście, że powiedziano przodkom: „Nie będziesz fałszywie przysięgał, lecz dotrzymasz Panu swej przysięgi”. A Ja wam powiadam: Wcale nie przysięgajcie – ani na niebo, bo jest tronem Boga; ani na ziemię, bo jest podnóżkiem stóp Jego; ani na Jerozolimę, bo jest miastem wielkiego Króla. Ani na swoją głowę nie przysięgaj, bo nawet jednego włosa nie możesz uczynić białym albo czarnym.\n\nNiech wasza mowa będzie: Tak, tak; nie, nie. A co nadto jest, od Złego pochodzi».\n\n _______________________________________\n\nZdjęcia i montaż: Piotr Hołowienko (http://www.thisday.pl)\nZdjęcia czołówka: Marcin Jończyk https://www.youtube.com/channel/UCoKF0ZJRUPhasLJ-H701S8g  \n________________________________________\n\nZapraszamy do subskrybowania kanału na YT:\nhttp://bit.ly/dominikanieYT\n\nMożna nas również znaleźć na Facebooku: \nhttp://bit.ly/dominikanieFB\n\nTu nas można wesprzeć: https://patronite.pl/langustanapalmie\n_______________________________________"
             },
             "defaultAudioLanguage":"pl"
          }
       }
    ],
    "pageInfo":{
       "totalResults":1,
       "resultsPerPage":1
    }
 };


export default Add;