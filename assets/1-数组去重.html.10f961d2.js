import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,f as a}from"./app.ce1b0c10.js";const r={},d=a(`<h1 id="一-数组去重-基础" tabindex="-1"><a class="header-anchor" href="#一-数组去重-基础" aria-hidden="true">#</a> 一. 数组去重(基础)</h1><h2 id="一-new-set-方法" tabindex="-1"><a class="header-anchor" href="#一-new-set-方法" aria-hidden="true">#</a> (一). new Set () 方法</h2><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>const arr1 = [1, 2, 3, 3, 4, 4, 1, 1, 1, 3, 4, 5, 6];
const arr2 = [...new Set(arr1)];
const arr3 = Array.from(new Set(arr1));
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-双重for循环" tabindex="-1"><a class="header-anchor" href="#二-双重for循环" aria-hidden="true">#</a> (二). 双重for循环</h2><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>const arr1 = [1, 2, 3, 3, 4, 4, 1, 1, 1, 3, 4, 5, 6];
function doubleForFn(arr) {
  for (let i = 0, len = arr.length; i &lt; len; i++) {
    // 将前一个数与后一个数进行对比; 所以此处 j=i+1
    for (let j = i + 1; j &lt; len; j++) {
      // 判断二者是否相等
      if (arr[i] === arr[j]) {
        // 相等则删除当前数据
        arr.splice(j, 1);
        // 当前数据已经减去一条; 下标自减
        j--;
        len--;
      }
    }
  }
  return arr;
}
const arrNew = doubleForFn(arr1);
console.log(arrNew); // [ 1, 2, 3, 4, 5, 6 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-indexof-方法" tabindex="-1"><a class="header-anchor" href="#三-indexof-方法" aria-hidden="true">#</a> (三). indexOf() 方法</h2><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>const arr1 = [1, 2, 3, 3, 4, 4, 1, 1, 1, 3, 4, 5, 6];
function indexOfFn(arr) {
  let array = [];
  arr.forEach((v) =&gt; {
    if (array.indexOf(v) === -1) array.push(v);
  });
  return array;
}
const indexOfArr = indexOfFn(arr1);
console.log(indexOfArr); //  [ 1, 2, 3, 4, 5, 6 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-includes-方法" tabindex="-1"><a class="header-anchor" href="#四-includes-方法" aria-hidden="true">#</a> (四). includes() 方法</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const arr1 = [1, 2, 3, 3, 4, 4, 1, 1, 1, 3, 4, 5, 6];
function includesFn(arr) {
  let array = [];
  arr.forEach((v) =&gt; {
    if (!array.includes(v)) array.push(v);
  });
  return array;
}
const includesArr = includesFn(arr1);
console.log(includesArr); // [ 1, 2, 3, 4, 5, 6 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-map-方法" tabindex="-1"><a class="header-anchor" href="#五-map-方法" aria-hidden="true">#</a> (五). Map() 方法</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const arr1 = [1, 2, 3, 3, 4, 4, 1, 1, 1, 3, 4, 5, 6];
function mapFn(arr) {
  const mapInstance = new Map();
  return arr.filter((v) =&gt; !mapInstance.has(v) &amp;&amp; mapInstance.set(v, 1));
}
const mapArr = mapFn(arr1);
console.log(mapArr, &quot;mapArr&quot;); // [ 1, 2, 3, 4, 5, 6 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二-对象数组去重" tabindex="-1"><a class="header-anchor" href="#二-对象数组去重" aria-hidden="true">#</a> 二. 对象数组去重</h1><h2 id="一-map-方法" tabindex="-1"><a class="header-anchor" href="#一-map-方法" aria-hidden="true">#</a> (一). Map() 方法</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let arr = [
  { code: 1, name: &quot;zz&quot; },
  { code: 1, name: &quot;zz&quot; },
  { code: 1, name: &quot;zz&quot; },
  { code: 2, name: &quot;xx&quot; },
  { code: 3, name: &quot;cc&quot; },
  { code: 3, name: &quot;jj&quot; },
];

function uniqueArr(arr, key) {
  // 创建 Map 实例对象
  const mapInstance = new Map();
  return arr.filter(
    (v) =&gt; !mapInstance.has(v[key]) &amp;&amp; mapInstance.set(v[key], true)
  );
}

const arrNew = uniqueArr(arr, &quot;code&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-双重for循环-1" tabindex="-1"><a class="header-anchor" href="#二-双重for循环-1" aria-hidden="true">#</a> (二). 双重for循环</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let arr = [
  { code: 1, name: &quot;zz&quot; },
  { code: 1, name: &quot;zz&quot; },
  { code: 1, name: &quot;zz&quot; },
  { code: 2, name: &quot;xx&quot; },
  { code: 3, name: &quot;cc&quot; },
  { code: 3, name: &quot;jj&quot; },
];

function doubleForFn(arr, key) {
  for (let i = 0, len = arr.length; i &lt; len; i++) {
    // 将前一个数与后一个数进行对比; 所以此处 j=i+1
    for (let j = i + 1; j &lt; len; j++) {
      // 判断二者是否相等
      if (arr[i][key] === arr[j][key]) {
        // 相等则删除当前数据
        arr.splice(j, 1);
        // 当前数据已经减去一条; 下标自减
        j--;
        len--;
      }
    }
  }
  return arr;
}
const doubleForArr = uniqueArr(arr, &quot;code&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),s=[d];function l(v,c){return e(),i("div",null,s)}const m=n(r,[["render",l],["__file","1-数组去重.html.vue"]]);export{m as default};
