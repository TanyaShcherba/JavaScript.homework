создаем файл method-counter.html, в котором реализуем ф-цию getCounter, в которой будут методы log, count и reset, выполняющие следующий код:

 
var counter = getCounter(5);
  counter.log() // 5
  .count(4)
  .log() // 9
  .count(3)
  .log() // 12
  .reset()
  .log() // 0
  .count(8)
  .log(); // 8