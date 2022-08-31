//HTML側の要素を取得する
const bar = document.getElementById('bar').getContext('2d');

//グラフ
const barchart = new Chart(bar, {
  type: 'bar',
  data: {
   labels: [
    'HTML/CSS',
    'javascript','java',
        'PHP','Python','C++'],
   datasets: [{
      label: "値",
      data: [4, 3, 3, 5, 4, 2.5],
      backgroundColor: [
        'orangered',
        'yellow',
        'lightskyblue',
        'purple',
        'greenyellow',
        'blue',
      ],
      borderColor: [
        'orangered',
        'yellow',
        'lightskyblue',
        'purple',
        'greenyellow',
        'blue',
      ],
      borderWidth: 1
   }]

    },  
  options: {
   scales: {
    y: {
      beginAtZero: true
    }
   },
   plugins: {
    title: {
      display: true,
      position:'top',
      text: '言語ごとのレベル' 
    },
   }

    }

});