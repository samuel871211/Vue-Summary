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
