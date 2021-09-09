import{q as e,e as t,s as a,a as s,b as l,i as d,u as n,n as r,h as i,r as p,S as o,j as c,k as g}from"./main2.js";const{document:u}=e;function x(e){let o,c,g,x,m,f,b;return{c(){o=t("link"),c=t("script"),x=a(),m=t("div"),m.innerHTML='<h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Dashboard</h2> \n  \n  <a class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" href="https://github.com/estevanmaito/windmill-dashboard"><div class="flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> \n      <span>Star this project(Windmill) on GitHub</span></div> \n    <span>View more →</span></a> \n  <a class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple mt-4" href="https://github.com/ndzeux/svindmill"><div class="flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> \n      <span>Star this project(Svindmill) on GitHub</span></div> \n    <span>View more →</span></a> \n  \n  <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"><div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"><div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg></div> \n      <div><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total clients</p> \n        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">6389</p></div></div> \n    \n    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"><div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></div> \n      <div><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Account balance</p> \n        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">$ 46,760.89</p></div></div> \n    \n    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"><div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg></div> \n      <div><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">New sales</p> \n        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">376</p></div></div> \n    \n    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"><div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg></div> \n      <div><p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Pending contacts</p> \n        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">35</p></div></div></div> \n\n  \n  <div class="w-full overflow-hidden rounded-lg shadow-xs"><div class="w-full overflow-x-auto"><table class="w-full whitespace-no-wrap"><thead><tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"><th class="px-4 py-3">Client</th> \n            <th class="px-4 py-3">Amount</th> \n            <th class="px-4 py-3">Status</th> \n            <th class="px-4 py-3">Date</th></tr></thead> \n        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"><tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Hans Burger</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 863.45</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Approved</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Jolina Angelie</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">Unemployed</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 369.95</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">Pending</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Sarah Curry</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">Designer</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 86.00</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">Denied</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Rulia Joberts</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">Actress</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 1276.45</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Approved</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Wenzel Dashington</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">Actor</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 863.45</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">Expired</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Dave Li</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">Influencer</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 863.45</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Approved</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Maria Ramovic</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">Runner</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 863.45</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Approved</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Hitney Wouston</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">Singer</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 863.45</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Approved</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr> \n\n          <tr class="text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"/> \n                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div> \n                <div><p class="font-semibold">Hans Burger</p> \n                  <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p></div></div></td> \n            <td class="px-4 py-3 text-sm">$ 863.45</td> \n            <td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">Approved</span></td> \n            <td class="px-4 py-3 text-sm">6/10/2020</td></tr></tbody></table></div> \n    <div class="grid py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800 overflow-x-auto"><span class="flex items-center col-span-3 pr-4 ml-4">Showing 21-30 of 100</span> \n      <span class="col-span-2"></span> \n      \n      <span class="flex col-span-4 mt-3 sm:mt-auto justify-center sm:justify-end"><nav aria-label="Table navigation"><ul class="inline-flex items-center"><li><button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700" aria-label="Previous"><svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button></li> \n            <li><button class="px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700">1</button></li> \n            <li><button class="px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700">2</button></li> \n            <li><button class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700">3</button></li> \n            <li><button class="px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700">4</button></li> \n            <li><span class="px-3 py-1">...</span></li> \n            <li><button class="px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700">8</button></li> \n            <li><button class="px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700">9</button></li> \n            <li><button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-200 dark:focus-ring-purple-700" aria-label="Next"><svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button></li></ul></nav></span></div></div> \n\n  \n  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Charts</h2> \n  <div class="grid gap-6 mb-8 md:grid-cols-2"><div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"><h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">Revenue</h4> \n      <canvas id="pie"></canvas> \n      <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"><div class="flex items-center"><span class="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span> \n          <span>Shirts</span></div> \n        <div class="flex items-center"><span class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span> \n          <span>Shoes</span></div> \n        <div class="flex items-center"><span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span> \n          <span>Bags</span></div></div></div> \n    <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"><h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">Traffic</h4> \n      <canvas id="line"></canvas> \n      <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"><div class="flex items-center"><span class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span> \n          <span>Organic</span></div> \n        <div class="flex items-center"><span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span> \n          <span>Paid</span></div></div></div></div>',u.title="Dashboard - Welcome",s(o,"rel","stylesheet"),s(o,"href","https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css"),c.src!==(g="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js")&&s(c,"src","https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"),c.defer=!0,s(m,"class","ms:container px-6 mx-auto grid")},m(t,a){l(u.head,o),l(u.head,c),d(t,x,a),d(t,m,a),f||(b=[n(o,"load",e[0]),n(c,"load",e[1])],f=!0)},p:r,i:r,o:r,d(e){i(o),i(c),e&&i(x),e&&i(m),f=!1,p(b)}}}function m(e,t,a){let s,l;return e.$$.update=()=>{12&e.$$.dirty&&s&&l&&(setTimeout((()=>{const e=document.getElementById("line");window.myLine=new Chart(e,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Organic",backgroundColor:"#0694a2",borderColor:"#0694a2",data:[43,48,40,54,67,73,70],fill:!1},{label:"Paid",fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:[24,50,64,74,52,51,65]}]},options:{responsive:!0,legend:{display:!1},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}}});const t=document.getElementById("pie");window.myPie=new Chart(t,{type:"doughnut",data:{datasets:[{data:[33,33,33],backgroundColor:["#0694a2","#1c64f2","#7e3af2"],label:"Dataset 1"}],labels:["Shoes","Shirts","Bags"]},options:{responsive:!0,cutoutPercentage:80,legend:{display:!1}}})}),25),a(2,s=a(2,s=!1)))},[()=>{a(2,s=!0)},()=>{a(3,l=!0)},s,l]}export default class extends o{constructor(e){super(),c(this,e,m,x,g,{})}}
