# 我的筆記

## class binding
```
如要套用多個class，可使用物件的方式表達

EX: <div class="{ class1: true, class2: false }"></div>
```

## component props
```
propType如果型別有錯，會在console有warning message
```

## computed vs method
```
有時候我們會需要在template顯示一些整理好的data

EX: <div>{{ sortedArray }}</div>

其中sortedArray是在computed中計算的

但也可以用method去計算

EX: <div>{{ sortedArray() }}</div>

兩者的差別是，computed只有在dependency array有變動才會重新計算

如果沒有變動，computed會有cache機制，把上次的值暫存

而在template使用method則會在每次渲染時都重新計算，效能上會比較差
```

## debounce
```
概念就是，在處理較為頻繁發生的使用者事件，例如：連續輸入、連續點擊

每次輸入or點擊，都會把timer的時間重置，timer的時間可以自行設定

等到使用者輸入or點擊完畢，timer到期，才會去執行接下來的動作

EX: 使用者連續點擊"登入"10次 => 1秒的timer到期 => 才會去做登入驗證
```

## throttling
```
諸如像mousemove、mousewheel這種頻繁觸發的事件

某些應用情景，我們可以讓其觸發的頻率降低，這就是throttle的概念

EX: 頁面滾動的速度控制在每100ms 50ms 20ms觸發一次
```

## dynamic attributes
```
可綁定id class等等動態屬性，也可以綁定on事件，例如onclick, onchange

EX: <input type="text" @[eventName]="handleEvent">

EX: <div :[attributeName]="'hello'">hello world</div>
```

## event handle advance
```
.once: 只會被觸發一次

.prevent: preventDefault，例如mouseWheel會觸發網頁的scroll

.capture: 捕獲事件是從外到內

.stop: 防止冒泡，冒泡是從內到外

.trim: 可用在input v-model.trim，去除使用者輸入的空白符

.number: 可用在input type number v-model.number，把string type data轉成number

@keydown.enter: 監聽常用的key event
```

## non prop attributes
```
沒有定義在組件props的屬性，例如id class @click，這些也可以傳遞到組件的

在組件的scope中，可以透過this.$attrs來取得

注意，預設會自動把non prop attributes掛在template的root節點

但如果template裡面有多個root，就需要指定要掛在哪個root
```

## slot
```
這個功能，讓組件變得更彈性，在組件內的template定義<slot></slot>

要引用組件的時候，可以在兩個tag裡面安插一些html標籤

EX: <Component><div>hello</div></Component>

它就會自動被replace到組件內定義的<slot></slot>

雖然也可以用props來實作，但是slot可以讓組件的重複利用有更多彈性空間
```

## slot with default content
```
另外，也可以在組件內的template定義<slot>content</slot>

如此一來，如果沒有提供任何安插進去的slot，就會預設render "content"

如果有的話，就會把content改成安插進去的slot
```

## named slot
```
組件內可以安插多個slot，給予name這個attribute，預設的name="default"

引用組件的時候，就可以使用v-slot:name來對應到組件內slot的安插位置
```

## scoped slot
```
這是一個可以讓父層取得組件內部data的技巧

通常會用在列表渲染，每個組件在引用的時候

可以根據情景，渲染成不同的樣式
```

## provide inject
```
跟react的useContext應該是類似的概念

當組件樹很深的時候，如果要從root一路傳遞props到樹節點

這樣做會很麻煩，而且不好維護，牽一髮而動全身

provide就是context的provider

inject就是context的consumer

如此一來，就不必層層傳遞，所有root底下的組件都可以inject data
```

## dynamic component with keep alive
```
以前在寫vue的時候沒有把組件這概念活用，每個頁面就是一個.vue

當一個頁面有幾千行程式，有很多state要管理的時候，會很不方便

dynamic component的的概念有點類似conditional rendering

只是每次重新渲染的時候，都會創建一個新的組件

這代表組件內部的data又會被初始化，有些情況我們會希望data能留著

這時候就可以在<component>外面包一層<keep-alive>
```

## ref
```
有時候，我們會需要透過JS取得某個HTML節點，這時候就可以使用ref

EX: <input ref="username" />

然後在Vue裡面就可以透過this.$refs.username來執行想要的操作
```

## composition
```
當組件隨著專案成長越來越大，開始包含各種業務邏輯之後，在維護上會變得更複雜

各種不同的邏輯問題分散在data, method, computed, watch等等地方

以searching bar為例，這邊需要有搜尋、篩選、排序的功能，這些功能全部混在一起

透過composition API就可以將不同的邏輯問題拆分開來，並且也能重複利用

以程式碼的實現來看，把每個邏輯問題拆分成一個function，此function會回傳一個

物件，裡面可以包含reactive data, functions，這些回傳的東西等等組件會用到

組件在setup()把這些composition引用進來，注意setup()是在created()之前就執行

所以我們不能在setup()裡面使用data, method, computed等等，但可以取用props

setup()回傳的物件就可以在整個組件內部使用，如此就可以達到邏輯問題拆分、重複利用
```

## before after
```
很tricky的一個css效果，之前沒認真學過，大概要等到真的用到才會想學吧(x

這邊是使用before跟after來達到視差滾動的效果，這邊牽扯到蠻多position的邏輯

背景圖片使用fixed定位在左上角，寬高佔滿整個viewport，然後前景圖片也是一樣，

但是前景圖片是用absolute定位，所以頁面往下滾的時候前景圖片會被往上捲，然後

absoulte定位會導致margin-bottom失效(沒錯，css就是一堆這種小地雷)

所以我們在前景圖片加上一個after，給它一個寬高佔滿整個viewport，但是要透明的

這樣就可以讓fixed的背景圖片慢慢的透過去，達到視差滾動的效果了。
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
