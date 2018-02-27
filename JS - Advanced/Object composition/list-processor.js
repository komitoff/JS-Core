function solve(arr) {
  var commandProc = (function() {
    var list = [];
    return {
      add: function(param) {
        list.push(param);
      },
      remove: function(param) {
        list = list.filter(x => x != param)
      }, 
      print: function() {
        console.log(list.join(','));
      }
    }
  })();

  for (const inp of arr) {
    var tokens = inp.split(' ');
    var cmd = tokens[0];
    var param = tokens[1];
    commandProc[cmd](param);
  }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])