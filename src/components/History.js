import { Link } from "react-router-dom";

function History(){
    return(
        <div style={{margin:"0 30px",fontSize:"20px"}}>
        <h1 style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>История "Пятнашек"</h1>
        <p>Пятнашки — 3-я в мире по популярности и знаменитости механическая головоломка. Проигрывает лишь Пазлам и Кубику Рубику, впрочем, по факту все 3 этих головоломки обладают общими корнями. Помимо того, классический Кубик Рубик с сторонами 4 на 4 является, по сути, 3Д пятнашками на 6-ти гранях.</p>

        <img src="/img/15.png" width={300}/>
        <h2>Пятнашки — что это?</h2>
        <p>Данная головоломка относится к классу механических, то есть решить ее нужно двигая сегменты. Стандартное поле для игры представляет из себя квадрат 4 на 4, подобным образом, всего на нем может поместиться 16 фишек. Визуально поле презентует собой дощечку, ящичек или рамку. Фишек всего 15, и они пронумерованы по порядку, таким образом что на поле 1 ячейка является свободной и дает возможность играющему передвигать сегменты вдоль горизонтали или вертикали. Задача игры состоит в том, чтобы, смещая по полю фишки, перепутанные в случайном порядке, собрать верный цифровой ряд от 1 до 15.</p>
        <h2>История создания головоломки</h2>
        <p>Возникли пятнашки в 1870 годах, конкретнее дату назвать никто не в силах. Среди версий присутствует 1874, 76 или 78 год. Как правило упоминается первая дата, возможно, для того, чтобы отметить повторяемость изобретения головоломок, так как 100 лет спустя узрел свет знаменитейший кубик рубик.</p>
        <p>Схожая путаница царит и в отношении авторства игры. Одна версия утверждает, что прародителем этой занимательной головоломки являлся Сэм Ллойд (кто ценит схожие развлечения, обязательно, знают это имя). Впрочем факты упрямая штука, и они уверяют, что мистер Ллойд только говорил, но не мастерил этого. Пятнашки сконструировал неведомый миру почтмейстер.</p>
        <img style = {{width:"40%",margin:"0 30%"}} src = "/img/Lloyd.png" />
        <p>Хронологически история смотрится подобным образом. В 1891 году Ллойд говорит, что изобрел пятнашки. Но в 1877 году почтмейстер Нойес Чепмен запатентовал схожую игру. А в 1874 году, то есть еще ранее, он ее изобрел. По всей видимости, почтмейстер был абсолютно неамбициозным, не обладал коммерческой хваткой и никак не популяризировал игру в массах.</p>
        <p>Сам же Ллойд был не особо деликатным, так что до самого конца своих дней заявлял, что слава изобретения пятнашек принадлежит конкретно ему.</p>
        <h2>Непревзойденный коммерческий ход</h2>
        <p>Наверное, мы не станем особенно копать историю и ситуацию об авторстве, спустим на тормозах. Основное, что совершил Ллойд для того, чтобы целый мир заболел пятнашками. Так как именно к нему пришла умнейшая идея обнародовать конкурс с призом в 1000 долларов тому, кто 1-ым верно решит головоломку. Задачка казалась до смешного простой, не на своих участках были лишь 14 и 15, а награда была до неприличия крупной. Так что толпа заглотила наживку и начала ломать голову над решением.</p>
        <p>Правда заключалась в том, что головоломка эта не имела решения, она не собиралась. Так что Ллойд не рисковал деньгами, зато искусно подогрел интерес публике к новой забаве. Пятнашки раскупались как горячие пирожки, миллионными партиями. Однако, решить задачу так никто и не мог. Причем масштабы всеобщего помешательства на решении были грандиозными. Решить головоломку пытались не только на родине игры в США, но и в Европе, Азии и в Новой Зеландии. Но тщетно. Если бы Ллойд родился чуть раньше, за такие проделки его ожидал бы суд Линча.</p>
        <p>Суд Линча (линчевание, англ. lynching, the Lynch law) — убийство человека, подозреваемого в преступлении или нарушении общественных обычаев, без суда и следствия, обычно уличной толпой, путём повешения.</p>
        <p>Кстати, подобная мистификация привела к тому, что патентное бюро отказалось регистрировать головоломку, которая не имеет решения.</p>
        <img src = "/img/doc.png"  style={{width:"100%"}}/>
        <h2>Интересный алгоритм</h2>
        <p>Факт заключается в том, что, только перетасовывая пятнашки, передвигая их по полю, можно получить задачу, которая гарантированно имеет решение. Если же все фишки высыпать с поля, перемешать в руках и в произвольном порядке расставить на игровой доске, вероятность нахождения правильного решения составляет лишь 50%. Вот так-то!</p>
        <h2>Алгоритм «Как собрать пятнашки»?</h2>
        <p>Как-то раз, собирая пятнашки, заметил, что чем меньше поле ячеек в игре пятнашки, тем проще их собрать. Получается, что проще всего собрать пятнашки размером 3х3 ячейки, чем например, пятнашки размером 4х4.</p>
        <p>Пятнашки размером 3х3 элемента собираются очень легко, особенно если отсортировать все костяшки по порядку вокруг поля:</p>
        <img style = {{width:"40%",margin:"0 30%"}} src = "/img/15_1.png" />
        <p>Для этого нужно перемещать самую первую костяшку по кругу против часовой стрелки, и при первой же возможности поставить следом за первой костяшкой, вторую, потом третью, собрав, таким образом, паровозик из костяшек от первой до последней.</p>
        <p>Главное, чтобы последние две костяшки, в данном случае 7 и 8 стояли наоборот, то есть. паровозик из цифр должен выглядеть так: 1 2 3 4 5 6 8 7. Если мы поделим этот паровозик на строки, то как раз и получим собранные пятнашки</p>
        <p>Посмотрите еще раз на картинку выше, там костяшки 1 2 3 уже стоят на своем месте, осталось всего-то переместить костяшки 4 5 6 на второй ряд. В результате этого переноса костяшки 7 и 8 уже будут стоять в третьем ряду в нужном порядке.</p>
        <h3>Разделяй и властвуй</h3>
        <p>Это очень простой способ сбора пятнашек, однако, собрать таким способом пятнашки размером 4х4 ячейки уже намного сложнее, не говоря уже о пятнашках бОльшего размера.Если приосмотреться к этой игре внимательно, то можно увидеть, что ничего сложного нет, если разделить поле 4х4 ячейки на 3 части и собрать эти 3 части по отдельности.</p>
        <h3>Часть первая, костяшки 1 2 3 4</h3>
        <p>В первую очередь лучше собрать костяшки 1 2 3 4 и расположить их на своем месте, после чего просто “забыть” про них, будто их нет:</p>
        <img style = {{width:"40%",margin:"0 30%"}} src = "/img/15_2.png"/>
        <p>После того как мы про них “забыли”, дальше остается собрать пятнашки с размером поля уже 4х3, вместо 4х4.</p>
        <h2>Часть вторая, костяшки 5 9 13</h2>
        <p>Теперь нам нужно собрать костяшки 5 9 13 в паровозик и поставить их сбоку слева.</p>
        <img style = {{width:"40%",margin:"0 30%"}} src = "/img/15_3.png"/>
        <h2>Часть третья, оставшиеся костяшки</h2>
        <p>Теперь, когда мы уже поставили костяшки 1 2 3 4 и 5 9 13 на свои места, рабочее поле уменьшилось до размеров 3х3, и осталось только собрать пятнашки размером 3х3:</p>
        <img style = {{width:"40%",margin:"0 30%"}} src = "/img/15_4.png"/>
        <p>Единственное отличие заключается только в номерах костяшек, которые нужно отсортировать так же по возрастанию, поменяв последние две костяшки наоборот, чтобы получился паровозик: 6 7 8 10 11 12 15 14, который так же разделится на 3 ряда:</p>
        <img style = {{width:"40%",margin:"0 30%"}} src = "/img/15_5.png"/>
        <p>Проблема может быть только в том, что костяшки могут встать не по порядку. Вместо паровозика из цифр 6 7 8 10 11 12 15 14 может получиться последовательность 6 7 8 10 11 12 14 15. В таком случае нужно будет постараться поменять эти костяшки местами. Зачастую для этого приходится ломать уже построенные костяшки 5 9 13 или 1 2 3 4, но зато они потом так же быстро выстраиваются снова.</p>
        <h1>Коротко о том как собрать пятнашки</h1>
        <p>Неважно на каком размере поля мы играем схема сбора пятнашек одна и та же , а именно мы должны собрать по порядку все ряды кроме двух последних , их пока не трогаем, собрать эти ряды не составит особой сложности , если только постановка последней ячейки в строке ,но это делается легко,на последних двух рядах мы должны выстраивать ячейки не поочерёдно в ряду , а собирать по столбцам из двух ячеек с право налево, и дальше всё легко собирается, давай дерзай,у тебя получится</p>
        <Link to = "/">
            <button  className="greenButton" style = {{width:"10%",margin:"10% 45%"}}>Играть</button>
        </Link>
        </div>
    );
}

export default History;