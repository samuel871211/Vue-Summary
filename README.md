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


# vue-practice

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
